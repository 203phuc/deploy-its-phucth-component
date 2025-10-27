import { type TextSize } from '@components/Atom/Text/type';
import { IconName } from '../../Atom/Icons/types';
export interface DropdownOption {
  label: string;
  value: string | number;
  disabled?: boolean;
  icon?: IconName; // For flag icons or other icons
}

export type DropdownVariant = 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'other';
export type DropdownDirection = 'down' | 'up';

export interface DropdownProps {
  /**
   * Array of select options with label, value, and optional properties
   */
  options: DropdownOption[];
  /**
   * Whether the dropdown is currently open/visible
   */
  isOpen: boolean;
  /**
   * Callback function called when dropdown should be closed
   */
  onClose?: () => void;
  /**
   * Width variant of the select dropdown
   */
  variant?: DropdownVariant;
  /**
   * Direction of the dropdown (up or down)
   */
  direction?: DropdownDirection;
  /**
   * Currently selected value
   */
  value?: string | number;
  /**
   * Callback function called when an option is selected
   */
  onSelect?: (value: string | number) => void;
  /**
   * Additional CSS classes for the dropdown container
   */
  className?: string;
  /**
   * font for the text
   */
  font?: 'spaceGrotesk' | 'inter';
  /**
   * size for the text
   */
  textSize?: TextSize;
  /**
   * color for the text
   */
  color?: 'black-900' | 'default';
  /**
   * weight for the text
   */
  weight?: 'regular' | 'semiBold' | 'bold' | 'moderate';
}
