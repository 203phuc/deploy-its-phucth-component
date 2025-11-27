import React from 'react';
import { cn } from '../../../util/tailwindClass';
import { Button, ButtonProps } from '../Button';
import { Icons } from '../Icons';
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
    // Compose label classes using CVA
    const labelClasses = labelCva({ textSize, fontFamily });

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
      const textareaClasses = cn(textareaCva({ variant, error: !!error, fontFamily }), className);

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
            ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
            placeholder={placeholder}
            className={textareaClasses}
          />

          {/* Error message (optional) */}
          {error && <span className="text-sm text-black">{error}</span>}
        </div>
      );
    }

    // Render as input (default)
    const wrapperClasses = cn(
      inputCva({ variant, size, error: !!error, bgColor }),
      className,
      'passwordInput',
    );
    const inputClasses = inputElementCva({ textSize, fontFamily, placeholderColor, placeholderSize });

    return (
      <div className="flex flex-col gap-1">
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
            ref={ref as React.ForwardedRef<HTMLInputElement>}
            type={type}
            placeholder={placeholder}
            className={inputClasses}
          />

          {/* End icon or button (optional) - button takes precedence */}
          {renderEndDecoration()}
        </div>

        {/* Error message (optional) */}
        {error && <span className="text-sm text-black">{error}</span>}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
