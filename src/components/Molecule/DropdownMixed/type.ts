import { TextSize } from '@components/Atom/Text/type';

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
  gap?: number | string;
  padding?: number | string;
  isOpen?: boolean;
  onClose?: () => void;
  closeOnClickOutside?: boolean;
  width?: number | string;
  height?: number | string;
  fitContent?: boolean; // new prop
  textColor?: TextColor;
  textSize?: TextSize;
  paddingTop?: number | string;
  paddingBot?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
}
