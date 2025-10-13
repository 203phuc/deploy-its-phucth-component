import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import type { IconName } from '../Icons/types';

export type InputVariant = 'line' | 'solid';
export type InputSize = 'small' | 'medium' | 'large';

/**
 * Base props shared between input and textarea
 */
interface BaseInputProps {
  /**
   * Render as input or textarea
   * @default 'input'
   */
  as?: 'input' | 'textarea';

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

  /**
   * Number of visible text rows (only for textarea)
   * @default 4
   */
  rows?: number;
}

/**
 * Props when rendered as input
 */
interface InputElementProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, BaseInputProps {
  as?: 'input';
  /**
   * The input type
   * @default 'text'
   */
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date';
}

/**
 * Props when rendered as textarea
 */
interface TextareaElementProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    BaseInputProps {
  as: 'textarea';
  type?: never;
  iconStart?: never;
  iconEnd?: never;
  onIconEndClick?: never;
}

/**
 * Input component props - union of input and textarea props
 */
export type InputProps = InputElementProps | TextareaElementProps;
