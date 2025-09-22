import React from 'react';
import { buttonCva } from './style';
import type { ButtonProps } from './type';

export const Button = ({
  as = 'button',
  className,
  children,
  // CVA handled props
  variant = 'solid',
  size = 'medium',
  underlineSize = 'medium',
  roundness = 'pill',
  fullWidth = false,
  hasIcon = false,
  font = 'inter',
  // rest forwarded to underlying element
  ...rest
}: ButtonProps) => {
  const variantProps =
    variant === 'underline'
      ? { variant, underlineSize, font }
      : { variant, size, roundness, fullWidth, hasIcon, font };

  const classes = [buttonCva(variantProps), className].filter(Boolean).join(' ');

  if (as === 'a') {
    const { href, ...anchorProps } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} href={href} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  buttonProps.type = buttonProps.type ?? 'button'; // default type to avoid accidental form submit

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
