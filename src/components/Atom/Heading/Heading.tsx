import React from 'react';
import { headingCva } from './style';
import type { HeadingProps } from './type';

export const Heading: React.FC<HeadingProps> = ({
  weight = 'Regular',
  font = 'Inter',
  size = 'h7',
  color = 'default',
  children,
  className,
  ...rest
}) => {
  // Compose class names
  const classes = [headingCva({ weight, font, size, color }), className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Heading;
