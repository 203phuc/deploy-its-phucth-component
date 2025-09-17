import React from 'react';
import { textCva } from './style';
import type { TextProps } from './type';

export const Text: React.FC<TextProps> = ({
  weight = 'Regular',
  font = 'Inter',
  color,
  size = 'medium',
  children,
  className,
  style,
  ...rest
}) => {
  // color token mapping

  const classes = textCva({
    weight,
    font,
  });

  // numeric sizes should become px
  const inlineStyle: React.CSSProperties = {
    ...style,
    ...(typeof size === 'number' ? { fontSize: `${size}px` } : {}),
    // apply arbitrary color inline if not using token
    ...(color ? { color } : {}),
  };

  return (
    <div className={[classes, className].filter(Boolean).join(' ')} style={inlineStyle} {...rest}>
      {children}
    </div>
  );
};

export default Text;
