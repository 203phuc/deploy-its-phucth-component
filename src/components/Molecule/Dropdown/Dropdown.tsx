import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../../util/tailwindClass';
import { Icons } from '../../Atom/Icons/Icons';
import { Text } from '../../Atom/Text/Text';
import type { OptionVariants } from './style';
import { getSelectStyles, optionVariants } from './style';
import { DropdownOption, DropdownProps } from './type';

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  isOpen,
  onClose,
  value,
  textSize,
  onSelect,
  font = 'spaceGrotesk',
  color = 'black-900',
  weight = 'moderate',
  className = '',
  variant = 'default',
  direction = 'down',
  disabled,
  align,
  children,
  ...props
}) => {
  const [dropdownValue, setDropdownValue] = useState<string | number | undefined>(value);
  const selectRef = useRef<HTMLDivElement>(null);
  const styles = getSelectStyles(variant, direction, align);

  useEffect(() => {
    setDropdownValue(value);
  }, [value]);
  let optionVariant: OptionVariants['variant'];

  switch (variant) {
    case 'default':
    case 'sm':
    case 'other':
      optionVariant = 'default';
      break;
    case 'xs':
      optionVariant = 'xs';
      break;
    case 'lg':
      optionVariant = 'none';
      break;
    case 'md':
      optionVariant = 'md';
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
    if (option.disabled) return;

    setDropdownValue(optionValue);
    onSelect?.(optionValue);
    onClose?.();
  };

  const dropdownClasses = cn(styles.dropdown, styles.width, className);

  return (
    <div ref={selectRef} className="relative" {...props}>
      {children}
      {isOpen ? (
        <div className={dropdownClasses}>
          {options.map((option) => {
            const isSelected = option.value === dropdownValue;
            const optionClasses = optionVariants({
              variant: optionVariant,
              selected: isSelected,
              disabled: disabled ?? option.disabled,
              className: !option.disabled && !disabled ? 'hover:bg-gray-100' : '',
            });

            return (
              <button
                key={String(option.value)}
                className={optionClasses}
                onClick={() => handleOptionClick(option.value, option)}
                disabled={disabled ?? option.disabled} // prevents click on disabled options
                type="button" // always good practice in forms
              >
                {variant !== 'other' ? (
                  <div className="flex items-center justify-between">
                    <div className="flex w-full flex-1 items-center gap-2">
                      {option.icon && <Icons iconName={option.icon} iconSize={16} color="black" />}
                      <Text font={font} weight={weight} color={color} size={textSize} className="flex-1">
                        {option.label}
                      </Text>
                    </div>
                    {(variant !== 'xs' && option.value === dropdownValue) ||
                      (variant !== 'sm' && option.value === dropdownValue && (
                        <Icons iconName="CheckIcon" iconSize={20} color="black" />
                      ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="flex flex-1 items-center">
                      {option.icon && <Icons iconName={option.icon} iconSize={16} color="black" />}
                      <Text
                        font={font}
                        weight={weight}
                        color={color}
                        size={textSize ?? 'small'}
                        className="flex-1"
                      >
                        {option.label}
                      </Text>
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
