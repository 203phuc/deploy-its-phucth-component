import React from 'react';
import { PositionProps } from './type';

const toUnit = (v?: string | number) => (typeof v === 'number' ? `${v}px` : v);

export const Position = ({
  position = 'absolute',
  top,
  left,
  right,
  bottom,
  zIndex,
  children,
  style,
  ...props
}: PositionProps) => {
  const computedStyle: React.CSSProperties = {
    position,
    top: toUnit(top),
    left: toUnit(left),
    right: toUnit(right),
    bottom: toUnit(bottom),
    zIndex,
    ...style,
  };

  return (
    <div style={computedStyle} {...props}>
      {children}
    </div>
  );
};
