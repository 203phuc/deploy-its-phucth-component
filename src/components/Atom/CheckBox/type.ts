import type { VariantProps } from 'class-variance-authority';
import { checkboxCva } from './style';

export type CheckboxOnChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  data: { checked: boolean },
) => void;

/** Available sizes for the Checkbox component */
export type CheckboxSize = 'small' | 'medium' | 'large';

export type CheckboxRoundness = 'square' | 'rounded' | 'pill';

/**
 * Props for the Checkbox component
 */
export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'onChange'>,
    CheckboxCvaProps {
  /** Unique identifier for the checkbox input */
  id?: string;

  /** Optional label text or element to display next to the checkbox */
  label?: React.ReactNode;

  /**
   * Controlled checked state of the checkbox
   */
  checked?: boolean;

  /**
   * Default checked state for uncontrolled usage
   */
  defaultChecked?: boolean;

  /** Size variant of the checkbox */
  size?: CheckboxSize;

  /** Border radius style of the checkbox */
  roundness?: CheckboxRoundness;

  /**
   * Callback when the checkbox state changes
   */
  onChange?: CheckboxOnChange;
}

export type CheckboxCvaProps = Omit<VariantProps<typeof checkboxCva>, 'disabled'>;
