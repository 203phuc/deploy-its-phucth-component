import { IconName } from '../Icons/types';

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
  icon?: IconName; // For flag icons or other icons
  type?: 'language' | 'currency'; // To distinguish between language and currency options
}

export type SelectVariant = 'default' | 'width-228' | 'width-173' | 'width-114';
export type SelectDirection = 'down' | 'up';

export interface SelectProps {
  /**
   * Array of select options with label, value, and optional properties
   */
  options: SelectOption[];
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
  variant?: SelectVariant;
  /**
   * Direction of the dropdown (up or down)
   */
  direction?: SelectDirection;
  /**
   * Currently selected value
   */
  value?: string | number;
  /**
   * Callback function called when an option is selected
   */
  onChange?: (value: string | number) => void;
  /**
   * Whether the entire select component is disabled
   */
  disabled?: boolean;
  /**
   * Additional CSS classes for the dropdown container
   */
  className?: string;
}
