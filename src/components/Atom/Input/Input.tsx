import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { isValidEmail } from 'src/util/emailValidation';
import { cn } from '../../../util/tailwindClass';
import { Button, ButtonProps } from '../Button';
import { Icons } from '../Icons';
import { Text } from '../Text';
import { inputCva, inputElementCva, labelCva, textareaCva } from './style';
import type { InputProps } from './type';

/**
 * Universal Input Component - can render as input or textarea
 */
export const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      textSize,
      as = 'input',
      type = 'text',
      variant = 'solid',
      size = 'medium',
      bgColor = 'white',
      placeholderColor = 'gray',
      iconStart,
      iconEnd,
      buttonStart,
      buttonEnd,
      onIconEndClick,
      placeholder,
      label,
      required,
      error,
      className,
      fontFamily = 'inter',
      placeholderSize,
      ...props
    },
    ref,
  ) => {
    const innerRef = useRef<HTMLInputElement>(null);
    const innerRefArea = useRef<HTMLTextAreaElement>(null);
    const validChar = 12;

    useImperativeHandle(ref, () => innerRef.current!);
    useImperativeHandle(ref, () => innerRefArea.current!);
    // Compose label classes using CVA
    const labelClasses = labelCva({ textSize, fontFamily });
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [value, setValue] = useState<string>('');
    useEffect(() => {
      const form = innerRefArea.current?.form;
      if (!form) return;

      const handleSubmit = (e: Event) => {
        // optional: prevent actual form submission
        e.preventDefault();
        if (type === 'password' && as === 'textarea' && value.length < validChar) {
          // you can set error state here
          setErrorMessage('Password must be at least 12 characters');
        } else {
          setErrorMessage('');
        }
      };

      form.addEventListener('submit', handleSubmit);
      return () => form.removeEventListener('submit', handleSubmit);
    });

    // Helper function to render start decoration (icon or button)
    const renderStartDecoration = () => {
      if (buttonStart) {
        // If it's a Button component, set variant to 'text' for inside Input
        const element = buttonStart;
        if (React.isValidElement(element) && element.type === Button) {
          return (
            <div className="flex h-full items-center">
              {React.cloneElement(element, { variant: 'text' } as ButtonProps)}
            </div>
          );
        }
        return <div className="flex items-center">{buttonStart}</div>;
      }
      if (iconStart) {
        // Check if iconStart is a React element
        if (React.isValidElement(iconStart)) {
          return <div className="flex items-center">{iconStart}</div>;
        }
        // Otherwise, treat it as an icon name
        return <Icons iconName={iconStart} className="h-fit w-fit text-gray-500" />;
      }
      return null;
    };

    const isValidPassword = (value: string) => {
      // example: minimum 6 chars
      return value.length >= validChar;
    };
    const handleInvalid = (
      e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement> | Event,
      setErrorMessage: (msg: string) => void,
      ref: React.RefObject<HTMLInputElement | HTMLTextAreaElement | null> | null,
    ) => {
      e.preventDefault();

      const el = ref?.current ?? (e.target as HTMLInputElement);
      const type = el.type;
      const value = el.value;

      if (type === 'email' && !isValidEmail(value)) {
        setErrorMessage('Invalid email');
        return;
      }

      if (type === 'password' && !isValidPassword(value)) {
        setErrorMessage('Password must be at least 12 characters');
        return;
      }

      setErrorMessage('');
    };

    function normalizeRef<T>(ref: React.ForwardedRef<T>): React.RefObject<T> | null {
      if (ref && typeof ref !== 'function') {
        return ref as React.RefObject<T>;
      }
      return null;
    }

    // Helper function to render end decoration (icon or button)
    const renderEndDecoration = () => {
      if (buttonEnd) {
        // If it's a Button component, set variant to 'text' for inside Input
        const element = buttonEnd;
        if (React.isValidElement(element) && element.type === Button) {
          return (
            <div className="flex h-full items-center">
              {React.cloneElement(element, {
                variant: 'text',
                className: 'hover:bg-transparent',
              } as ButtonProps)}
            </div>
          );
        }
        return <div className="flex items-center">{buttonEnd}</div>;
      }
      if (iconEnd) {
        // Check if iconEnd is a React element
        if (React.isValidElement(iconEnd)) {
          if (onIconEndClick) {
            return (
              <button
                type="button"
                className="flex items-center border-0 bg-transparent p-0"
                onClick={onIconEndClick}
                style={{ cursor: 'pointer' }}
              >
                {iconEnd}
              </button>
            );
          }
          return <div className="flex items-center">{iconEnd}</div>;
        }
        // Otherwise, treat it as an icon name
        return (
          <Icons
            iconName={iconEnd}
            className="h-fit w-fit text-gray-500"
            box
            onClick={onIconEndClick}
            style={onIconEndClick ? { cursor: 'pointer' } : undefined}
          />
        );
      }
      return null;
    };

    // Render as textarea
    if (as === 'textarea') {
      const textareaProps = props as React.TextareaHTMLAttributes<HTMLTextAreaElement>;
      const textareaClasses = cn(
        textareaCva({ variant, error: !!error || !!errorMessage, fontFamily }),
        className,
      );

      return (
        <div className="flex flex-col gap-1">
          {/* Label (optional) */}
          {label && (
            <label className={labelClasses}>
              {label}
              {required && <span className={labelClasses}>*</span>}
            </label>
          )}

          {/* Textarea element */}
          <textarea
            {...textareaProps}
            ref={innerRefArea}
            placeholder={placeholder}
            className={textareaClasses}
            onChange={(e) => setValue(e.target.value)}
          />

          <input
            type={type}
            value={value}
            className="hidden"
            minLength={type === 'password' ? validChar : undefined}
            onInvalid={(e) => {
              const objRef = normalizeRef(innerRef);
              handleInvalid(e, setErrorMessage, objRef); // just call it, no return needed
            }}
          />

          {/* Error message (optional) */}
          {(error ?? errorMessage) && (
            <Text color="black-700" weight="regular" size="xsmall">
              {errorMessage || error}
            </Text>
          )}
        </div>
      );
    }

    // Render as input (default)
    const wrapperClasses = cn(
      inputCva({ variant, size, error: !!error || !!errorMessage, bgColor }),
      className,
      'passwordInput',
    );
    const inputClasses = inputElementCva({ textSize, fontFamily, placeholderColor, placeholderSize });

    return (
      <div className="flex flex-col gap-2">
        {/* Label (optional) */}
        {label && (
          <label className={labelClasses}>
            {label}
            {required && <span className={labelClasses}>*</span>}
          </label>
        )}

        {/* Input wrapper */}
        <div className={wrapperClasses}>
          {/* Start icon or button (optional) - button takes precedence */}
          {renderStartDecoration()}

          {/* Input element */}
          <input
            style={{ textAlign: props.textAlign ?? 'left' }}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
            ref={innerRef}
            type={type}
            placeholder={placeholder}
            minLength={type === 'password' ? validChar : undefined}
            className={inputClasses}
            onInvalid={(e) => handleInvalid(e, setErrorMessage, normalizeRef(ref))} // <--- FIXED)}
          />

          {/* End icon or button (optional) - button takes precedence */}
          {renderEndDecoration()}
        </div>

        {/* Error message (optional) */}
        {(error ?? errorMessage) && (
          <Text color="black-700" weight="regular" size="xsmall">
            {errorMessage || error}
          </Text>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
