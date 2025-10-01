import { useState } from 'react';
import { radioCva } from './style';
import type { RadioProps } from './type';

const getShapeClass = (shape: string) => {
  if (shape === 'circle') return 'rounded-full';
  if (shape === 'rounded') return 'rounded-[2px]';
  return '';
};

const innerSizeMap = {
  sm: 'w-[10px] h-[10px]',
  md: 'w-[14px] h-[14px]',
  lg: 'w-[18px] h-[18px]',
};

export const Radio = ({
  checked,
  onChange,
  shape = 'circle',
  size = 'md',
  disabled = false,
  allowUnselect = true,
  className,
  ...props
}: RadioProps) => {
  const [uncontrolledChecked, setUncontrolledChecked] = useState(false);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : uncontrolledChecked;

  const handleClick = () => {
    if (disabled) return;

    const newChecked = allowUnselect ? !isChecked : true;

    if (!isControlled) {
      setUncontrolledChecked(newChecked);
    }

    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={
        radioCva({
          size,
          shape,
          disabled,
        }) +
        ' ' +
        className
      }
    >
      {isChecked && <div className={`${innerSizeMap[size]} ${getShapeClass(shape)} bg-black`} />}
      <input
        type="radio"
        className="sr-only hidden"
        checked={isChecked}
        disabled={disabled}
        onChange={handleClick}
        {...props}
      />
    </button>
  );
};

export default Radio;
