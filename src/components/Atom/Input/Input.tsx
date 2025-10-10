import React from 'react';
import { Icons } from '../Icons';
import { inputCva, inputElementCva } from './style';
import type { InputProps } from './type';

/**
 * Universal Input Component
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
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
      ...props
    },
    ref,
  ) => {
    // Compose wrapper classes using CVA
    const wrapperClasses = [inputCva({ variant, size, error: !!error }), className].filter(Boolean).join(' ');

    // Compose input element classes using CVA
    const inputClasses = inputElementCva({ size });

    return (
      <div className="flex flex-col gap-1">
        {/* Label (optional) */}
        {label && <label className="text-sm font-medium text-gray-700">{label}</label>}

        {/* Input wrapper */}
        <div className={wrapperClasses}>
          {/* Start icon (optional) */}
          {iconStart && <Icons iconName={iconStart} className="h-4 w-4 text-gray-500" />}
          {/* Input element */}
          <input {...props} ref={ref} type={type} placeholder={placeholder} className={inputClasses} />
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
