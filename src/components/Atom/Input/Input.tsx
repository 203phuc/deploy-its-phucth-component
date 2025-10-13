import React from 'react';
import { Icons } from '../Icons';
import { inputCva, inputElementCva, labelCva, textareaCva } from './style';
import type { InputProps } from './type';

/**
 * Universal Input Component - can render as input or textarea
 */
export const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      as = 'input',
      type = 'text',
      variant = 'solid',
      size = 'medium',
      iconStart,
      iconEnd,
      onIconEndClick,
      placeholder,
      label,
      error,
      className,
      rows = 4,
      ...props
    },
    ref,
  ) => {
    // Compose label classes using CVA
    const labelClasses = labelCva({ size });

    // Render as textarea
    if (as === 'textarea') {
      const textareaClasses = [textareaCva({ variant, size, error: !!error }), className]
        .filter(Boolean)
        .join(' ');

      return (
        <div className="flex flex-col gap-1">
          {/* Label (optional) */}
          {label && <label className={labelClasses}>{label}</label>}

          {/* Textarea element */}
          <textarea
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
            placeholder={placeholder}
            rows={rows}
            className={textareaClasses}
          />

          {/* Error message (optional) */}
          {error && <span className="text-sm text-black">{error}</span>}
        </div>
      );
    }

    // Render as input (default)
    const wrapperClasses = [inputCva({ variant, size, error: !!error }), className].filter(Boolean).join(' ');
    const inputClasses = inputElementCva({ size });

    return (
      <div className="flex flex-col gap-1">
        {/* Label (optional) */}
        {label && <label className={labelClasses}>{label}</label>}

        {/* Input wrapper */}
        <div className={wrapperClasses}>
          {/* Start icon (optional) */}
          {iconStart && <Icons iconName={iconStart} className="h-4 w-4 text-gray-500" />}
          {/* Input element */}
          <input
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
            ref={ref as React.ForwardedRef<HTMLInputElement>}
            type={type}
            placeholder={placeholder}
            className={inputClasses}
          />
          {/* End icon (optional) */}
          {iconEnd && (
            <Icons
              iconName={iconEnd}
              className="h-4 w-4 text-gray-500"
              box
              onClick={onIconEndClick}
              style={onIconEndClick ? { cursor: 'pointer' } : undefined}
            />
          )}
        </div>

        {/* Error message (optional) */}
        {error && <span className="text-sm text-black">{error}</span>}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
