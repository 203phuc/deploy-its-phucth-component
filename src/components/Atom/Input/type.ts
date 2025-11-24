import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';
import type { IconName } from '../Icons/types';
import { InputCvaProps } from './style';

export type InputVariant = 'line' | 'solid';
export type InputSize = 'small' | 'medium' | 'large' | 'xlarge';
export type InputBgColor = 'white' | 'transparent';
export type InputPlaceholderColor = 'gray' | 'black' | 'white';
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
   * Background color of the input
   * @default 'white'
   */
  bgColor?: InputBgColor;

  /**
   * Placeholder text color
   * @default 'gray'
   */
  placeholderColor?: InputPlaceholderColor;
  /**
   * Text alignment inside the input
   * @default 'left'
   */
  textAlign?: 'left' | 'center' | 'right';
  /**
   * Optional leading icon name or React element
   */
  iconStart?: IconName | React.ReactElement;

  /**
   * Optional trailing icon name or React element
   */
  iconEnd?: IconName | React.ReactElement;

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
   * Indicates if the input is required
   */
  required?: boolean;

  /**
   * Optional error message
   */
  error?: string;

  /**
   * Font family for all text elements (label, placeholder, and input text)
   * @default 'inter'
   */
  readonly fontFamily?: 'inter' | 'grotesk';
}
export type PlaceholderSize =
  | 'special2'
  | 'special1'
  | 'xsmall'
  | 'small'
  | 'smedium'
  | 'medium'
  | 'large'
  | 'xlarge'
  | '2xlarge'
  | '3xlarge'
  | '4xlarge';
/**
 * Props when rendered as input
 */
interface InputElementProps
  extends Omit<InputCvaProps, 'fontFamily' | 'placeholderColor' | 'size'>,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    BaseInputProps {
  as?: 'input';
  /**
   * The input type
   * @default 'text'
   */
  type?: 'text' | 'password' | 'email' | 'number' | 'url' | 'search' | 'date' | 'tel';
  textSize?:
    | 'special1'
    | 'special2'
    | 'xsmall'
    | 'small'
    | 'smedium'
    | 'medium'
    | 'large'
    | 'xlarge'
    | '2xlarge'
    | '3xlarge'
    | '4xlarge';
  /**
   * Callback when input value changes
   */
  onChange?: (event: InputChangeEvent) => void;

  /**
   * Callback when input value changes
   */
  placeholderSize?: PlaceholderSize;
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
  textSize?:
    | 'special1'
    | 'special2'
    | 'xsmall'
    | 'small'
    | 'smedium'
    | 'medium'
    | 'large'
    | 'xlarge'
    | '2xlarge'
    | '3xlarge'
    | '4xlarge';
  /**
   * Callback when input value changes
   */
  placeholderSize?: PlaceholderSize;
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
