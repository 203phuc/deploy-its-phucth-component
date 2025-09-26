import React, { forwardRef, useEffect, useState } from 'react';
import { checkboxCva, checkIconCva, inputStyles, labelCva, labelTextClasses } from './style';
import type { CheckboxProps } from './type';

interface CheckIconProps {
  size?: 'small' | 'medium' | 'large';
  checked?: boolean;
}

const CheckIcon = ({ size = 'medium', checked = true }: CheckIconProps) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={checkIconCva({ size, checked })}
    >
      <path
        d="M5 13L9 17L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CheckBox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      label,
      size = 'medium',
      roundness = 'square',
      disabled = false,
      checked: controlledChecked,
      defaultChecked,
      onChange,
      className,
      ...rest
    },
    ref,
  ) => {
    const isControlled = typeof controlledChecked === 'boolean';
    const [internalChecked, setInternalChecked] = useState(!!defaultChecked);
    const checked = isControlled ? controlledChecked : internalChecked;

    useEffect(() => {
      if (isControlled) return;
      setInternalChecked(!!defaultChecked);
    }, [defaultChecked, isControlled]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked;
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      onChange?.(e, { checked: newChecked });
    };

    const wrapperClass = checkboxCva({
      size,
      roundness,
      disabled,
      checked,
      className,
    });

    return (
      <label className={labelCva({ disabled })} htmlFor={id}>
        <div className="flex items-center">
          <input
            id={id}
            ref={ref}
            type="checkbox"
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            onChange={handleChange}
            className={inputStyles}
            {...rest}
          />
          <div className={wrapperClass}>
            <CheckIcon size={size} checked={checked} />
          </div>
        </div>
        {label && <span className={labelTextClasses}>{label}</span>}
      </label>
    );
  },
);

CheckBox.displayName = 'CheckBox';
