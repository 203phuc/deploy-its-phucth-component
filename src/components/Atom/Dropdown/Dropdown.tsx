import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../../util/tailwindClass';
import { Icons } from '../Icons/Icons';
import { Text } from '../Text/Text';
import type { OptionVariants } from './style';
import { getSelectStyles, optionVariants } from './style';
import { DropdownOption, DropdownProps } from './type';

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  isOpen,
  onClose,
  value,
  onChange,
  font = 'spaceGrotesk',
  color = 'black-900',
  weight = 'moderate',
  disabled = false,
  className = '',
  variant = 'default',
  direction = 'down',
  ...props
}) => {
  const [dropdownValue, setDropdownValue] = useState<string | number | undefined>(value);
  const selectRef = useRef<HTMLDivElement>(null);
  const styles = getSelectStyles(variant, direction);

  useEffect(() => {
    setDropdownValue(value);
  }, [value]);
  let optionVariant: OptionVariants['variant'];

  switch (variant) {
    case 'default':
    case 'width-228':
    case 'width-173':
    case 'other':
      optionVariant = 'default';
      break;
    case 'width-114':
      optionVariant = 'width-114';
      break;
    case 'width-255':
      optionVariant = 'none';
      break;
    default:
      optionVariant = 'default';
      break;
  }

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

  const handleOptionClick = (optionValue: string | number, option: DropdownOption) => {
    if (disabled || option.disabled) return;

    setDropdownValue(optionValue);
    onChange?.(optionValue);
    onClose?.();
  };

  if (!isOpen) return null;

  const dropdownClasses = cn(styles.dropdown, styles.width, className);

  return (
    <div ref={selectRef} className="relative" {...props}>
      <div className={dropdownClasses} role="listbox" aria-label="Select options">
        {options.map((option) => {
          const isSelected = option.value === dropdownValue;
          const optionClasses = optionVariants({
            variant: optionVariant,
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
              {variant !== 'other' ? (
                <div className="flex items-center justify-between">
                  <div className="flex flex-1 items-center gap-2">
                    {option.icon && <Icons iconName={option.icon} iconSize={16} color="black" />}
                    <Text font={font} weight={weight} color={color} className="flex-1">
                      {option.label}
                    </Text>
                  </div>
                  {variant !== 'width-114' && isSelected && (
                    <Icons iconName="CheckIcon" iconSize={20} color="black" />
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex flex-1 items-center">
                    {option.icon && <Icons iconName={option.icon} iconSize={16} color="black" />}
                    <Text font={font} weight={weight} color={color} size="small" className="flex-1">
                      {option.label}
                    </Text>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
