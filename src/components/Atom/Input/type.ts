import type { InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react';
import type { IconName } from '../Icons/types';

export type InputVariant = 'line' | 'solid';
export type InputSize = 'small' | 'medium' | 'large';
/**
 * Unified onChange handler that works for both input and textarea
 */
export type InputChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

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
   * Optional leading button/element
   */
  buttonStart?: ReactNode;

  /**
   * Optional trailing button/element
   */
  buttonEnd?: ReactNode;

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
   * Font family for all text elements (label, placeholder, and input text)
   * @default 'inter'
   */
  fontFamily?: InputFontFamily;
}

export type InputFontFamily = 'inter' | 'grotesk';

/**
 * Props when rendered as input
 */
interface InputElementProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, BaseInputProps {
  as?: 'input';
  /**
   * The input type
   * @default 'text'
   */
  type?: 'text' | 'password' | 'email' | 'number' | 'url' | 'search' | 'date' | 'tel';

  /**
   * Callback when input value changes
   */
  onChange?: (event: InputChangeEvent) => void;
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
  buttonStart?: never;
  buttonEnd?: never;
  onIconEndClick?: never;

  /**
   * Callback when textarea value changes
   */
  onChange?: (event: InputChangeEvent) => void;
}

/**
 * Input component props - union of input and textarea props
 */
export type InputProps = InputElementProps | TextareaElementProps;

/**
 * PhoneInput component props
 */
export interface PhoneInputProps {
  /**
   * The input type for phone input
   * @default 'tel'
   */
  type?: 'tel';

  /**
   * Callback when input value changes
   */
  onChange?: (event: InputChangeEvent) => void;
}
