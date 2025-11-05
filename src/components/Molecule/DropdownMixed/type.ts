export type TextColor =
  | 'default'
  | 'black-400'
  | 'black-500'
  | 'black-600'
  | 'black-700'
  | 'black-800'
  | 'black-900'
  | 'blue-700'
  | 'red-500'
  | 'teal-600'
  | 'white';

export interface MixedDropDownOption {
  label: string;
  value: string | number;
  disabled?: boolean;
  uid?: string;
  onSelect?: () => void;
}

export interface DropdownMixedProps extends React.HTMLAttributes<HTMLDivElement> {
  listItem?: MixedDropDownOption[];
  variant?: 'navigation' | 'searchPanel';
  closeOnClickOutside?: boolean;
  isOpen?: boolean;
  fitContent?: boolean;
  onClose?: () => void;
}
