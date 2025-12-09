import React, { forwardRef, useEffect, useState } from 'react';
import { CheckIcon } from './CheckIcon';
import { checkboxCva, inputStyles, labelCva, labelTextClasses } from './style';
import type { CheckboxProps } from './type';

export const CheckBox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      label,
      size = 'medium',
      roundness,
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
