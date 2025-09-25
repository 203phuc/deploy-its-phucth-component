// Toggle.tsx
import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import { knobCva, trackCva } from './style';
import type { ToggleProps } from './type';

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(function Toggle(props, ref) {
  const {
    checked,
    defaultChecked = false,
    onCheckedChange,
    size = 'medium',
    shape = 'rounded',
    disabled = false,
    className,
    onClick,
    ...rest
  } = props;

  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState<boolean>(() => Boolean(defaultChecked));

  // keep internal in sync when defaultChecked changes (optional)
  useEffect(() => {
    if (!isControlled) setInternalChecked(Boolean(defaultChecked));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultChecked]);

  const isChecked = isControlled ? Boolean(checked) : internalChecked;

  const handleToggle = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      const next = !isChecked;
      if (!isControlled) setInternalChecked(next);
      onCheckedChange?.(next);

      // Call onClick handler if provided
      if (typeof onClick === 'function') {
        onClick(e);
      }
    },
    [disabled, isChecked, isControlled, onCheckedChange, onClick],
  );

  const trackClass = trackCva({
    size,
    shape,
    state: isChecked ? 'on' : 'off',
    disabled: !!disabled,
  });

  const knobClass = knobCva({
    size,
    checked: isChecked,
    shape,
  });

  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled}
      className={`${trackClass} ${className ?? ''}`.trim()}
      onClick={handleToggle}
      {...rest}
    >
      <span className={knobClass} aria-hidden="true" data-size={size} />
    </button>
  );
});

export default Toggle;
