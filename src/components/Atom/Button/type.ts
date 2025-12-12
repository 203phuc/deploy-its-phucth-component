// type.ts
import type { VariantProps } from 'class-variance-authority';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { buttonCva } from './style';

export type ButtonCvaProps = VariantProps<typeof buttonCva>;

export type ButtonVariant = 'solidBlack' | 'outlined' | 'text' | 'underline' | 'solidWhite';
export type ButtonSize = 'xlarge' | 'large' | 'largeCompact' | 'medium' | 'small' | 'xsmall';
export type ButtonRoundness = 'pill' | 'round' | 'sharp';
export type ButtonFont = 'spaceGrotesk' | 'inter';

export type ButtonProps = {
  /**
   * The variant of the button
   * */
  readonly variant?: ButtonVariant;
  /**
   * The size of the button
   * */
  readonly size?: ButtonSize;
  /**
   * The border radius of the button
   */
  readonly roundness?: ButtonRoundness;
  /**
   * Whether the button should take full width of its container
   * */
  readonly fullWidth?: boolean;
  /**
   *  Whether the button has an icon (for proper spacing)
   */
  readonly hasIcon?: boolean;
  /**
   * Additional className to apply to the button
   */
  readonly className?: string;
  /**
   * Font family to use for the button text
   */
  readonly font?: ButtonFont;
  /**
   * Font family to use for the button text
   */
  readonly under?: ButtonFont;
  /**
   * Button content
   */
  readonly children?: React.ReactNode;
} & (
  | (ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string })
);
