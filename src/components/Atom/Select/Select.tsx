import React, { useEffect, useRef, useState } from 'react';
import { Icons } from '../Icons/Icons';
import { Text } from '../Text/Text';
import { getSelectStyles, optionVariants } from './style';
import { SelectOption, SelectProps } from './type';

export const Select: React.FC<SelectProps> = ({
  options,
  isOpen,
  onClose,
  value,
  onChange,
  disabled = false,
  className = '',
  variant = 'default',
  direction = 'down',
}) => {
  const [selectedValue, setSelectedValue] = useState<string | number | undefined>(value);
  const selectRef = useRef<HTMLDivElement>(null);
  const styles = getSelectStyles(variant, direction);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleOptionClick = (optionValue: string | number, option: SelectOption) => {
    if (disabled || option.disabled) return;

    setSelectedValue(optionValue);
    onChange?.(optionValue);
    onClose?.();
  };

  if (!isOpen) return null;

  const dropdownClasses = [styles.dropdown, styles.width, className].filter(Boolean).join(' ');

  return (
    <div ref={selectRef} className="relative">
      <div className={dropdownClasses} role="listbox" aria-label="Select options">
        {options.map((option) => {
          const isSelected = option.value === selectedValue;
          const optionClasses = optionVariants({
            variant: variant === 'width-114' ? 'width-114' : 'default',
            selected: isSelected,
            disabled: option.disabled,
            className: !option.disabled ? 'hover:bg-gray-100' : '',
          });

          return (
            <div
              key={String(option.value)}
              className={optionClasses}
              onClick={() => handleOptionClick(option.value, option)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOptionClick(option.value, option);
                }
              }}
              role="option"
              tabIndex={option.disabled ? -1 : 0}
              aria-selected={isSelected}
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-1 items-center gap-2">
                  {option.icon && <Icons iconName={option.icon} iconSize={16} color="black" />}
                  <Text font="spaceGrotesk" weight="moderate" size="small" className="flex-1">
                    {option.label}
                  </Text>
                </div>
                {variant !== 'width-114' && isSelected && (
                  <Icons iconName="CheckIcon" iconSize={20} color="black" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Select.displayName = 'Select';

export default Select;
