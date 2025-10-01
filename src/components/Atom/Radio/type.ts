import type { InputHTMLAttributes } from 'react';
import { RadioCvaProps } from './style';

export type RadioShape = 'circle' | 'sharp' | 'rounded';
export type RadioSize = 'sm' | 'md' | 'lg';

export interface RadioProps
  extends Partial<RadioCvaProps>,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  /**
   * Whether the radio is checked
   */
  readonly checked?: boolean;
  /**
   * Callback when the radio state changes
   */
  readonly onChange?: (checked: boolean) => void;
  /**
   * The shape of the radio
   */
  readonly shape?: RadioShape;
  /**
   * The size of the radio
   */
  readonly size?: RadioSize;
  /**
   * Whether the radio is disabled
   */
  readonly disabled?: boolean;
  /**
   * Whether to allow unselecting the radio when clicked
   */
  readonly allowUnselect?: boolean;
  /**
   * Additional class name
   */
  readonly className?: string;
}
