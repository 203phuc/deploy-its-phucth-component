// type.ts
import type { VariantProps } from 'class-variance-authority';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { buttonCva } from './style';

export type ButtonCvaProps = VariantProps<typeof buttonCva>;

export type ButtonVariant = 'solid' | 'outlined' | 'text' | 'underline';
export type ButtonSize = 'xlarge' | 'large' | 'largeCompact' | 'medium' | 'small' | 'xsmall';
export type ButtonRoundness = 'pill' | 'round' | 'sharp';
export type ButtonFont = 'spaceGrotesk' | 'inter';

export type ButtonProps = {
  /**
   * The variant of the button
   * */
  variant?: ButtonVariant;
  /**
   * The size of the button
   * */
  size?: ButtonSize;
  /**
   * The size of the underline (only applicable for underline variant) */
  underlineSize?: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
  /**
   * The border radius of the button
   */
  roundness?: ButtonRoundness;
  /**
   * Whether the button should take full width of its container
   * */
  fullWidth?: boolean;
  /**
   *  Whether the button has an icon (for proper spacing)
   */
  hasIcon?: boolean;
  /**
   * Additional className to apply to the button
   */
  className?: string;
  /**
   * Font family to use for the button text
   */
  font?: ButtonFont;
  /**
   * Button content
   */
  children?: React.ReactNode;
} & (
  | (ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string })
);
