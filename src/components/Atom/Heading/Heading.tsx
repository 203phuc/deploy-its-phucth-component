import React from 'react';
import { headingCva } from './style';
import type { HeadingProps } from './type';

export const Heading: React.FC<HeadingProps> = ({
  weight = 'regular',
  font = 'inter',
  size = 'h7',
  color = 'default',
  align = 'left',
  children,
  className,
  ...rest
}) => {
  // Compose class names
  const classes = [headingCva({ weight, font, size, color, align }), className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Heading;
