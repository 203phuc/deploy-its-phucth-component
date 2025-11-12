import React from 'react';
import { textCva } from './style';
import type { TextProps } from './type';

export const Text: React.FC<TextProps> = ({
  weight = 'regular',
  font = 'inter',
  size = 'medium',
  color = 'default',
  children,
  line,
  className,
  align = 'left',
  ...rest
}) => {
  // Compose class names
  const classes = [textCva({ weight, font, size, line, color, align }), className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Text;
