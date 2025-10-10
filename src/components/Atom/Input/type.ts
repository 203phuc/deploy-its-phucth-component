import type { InputHTMLAttributes } from 'react';
import type { IconName } from '../Icons/types';

export type InputVariant = 'line' | 'solid';
export type InputSize = 'small' | 'medium' | 'large';

/**
 * Input component props
 */
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The input type
   * @default 'text'
   */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date';

  /**
   * Optional design variant (for styling theme)
   * @default 'solid'
   */
  variant?: InputVariant;

  /**
   * Size of the input
   * @default 'medium'
   */
  size?: InputSize;

  /**
   * Optional leading icon name
   */
  iconStart?: IconName;

  /**
   * Optional trailing icon name
   */
  iconEnd?: IconName;

  /**
   * Callback when end icon is clicked
   */
  onIconEndClick?: () => void;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Optional label text
   */
  label?: string;

  /**
   * Optional error message
   */
  error?: string;

  /**
   * Additional className to apply to the wrapper
   */
  className?: string;
}
