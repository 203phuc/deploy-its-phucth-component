import type { IconName } from '@components/Atom/Icons';
import type { DropdownOption } from '@components/Molecule/Dropdown';
import type { Dispatch, SetStateAction } from 'react';

export interface NavLinkDropdownItem {
  id: string;
  label: string;
  type: string;
  condition: string;
  icon?: IconName;
  path?: string;
}

export interface NavLinkItem {
  id: string;
  label: string;
  type: string;
  condition: string;
  icon?: IconName;
  dropdown?: NavLinkDropdownItem[];
  path?: string;
}

export interface Product {
  id: number;
  name: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
  image: string;
}

export interface CartItemProps {
  product?: Product[];
  onQuantityChange?: (id: number, quantity: number) => void;
}

export interface CartContentProps {
  cartItems: Product[];
  onClose: () => void;
  onQuantityChange: (id: number, quantity: number) => void;
}

export interface FlyoutCartProps {
  setFlyoutCartOpen: Dispatch<SetStateAction<boolean>>;
  isMobile: boolean;
}

export interface FlyoutMenuProps {
  setFlyoutMenuOpen: Dispatch<SetStateAction<boolean>>;
  cartItem: number;
}

export interface IconBlockProps {
  cartItem?: number;
  setFlyoutCartOpen?: Dispatch<SetStateAction<boolean>>;
}

export interface NavigationBarProps {
  scrolled?: boolean;
  /** vertical translation in px applied to the nav (for slide animations) */
  translateY?: number;
  /** css transition to apply to the transform */
  transition?: string;
  setFlyoutCartOpen?: Dispatch<SetStateAction<boolean>>;
  setFlyoutMenuOpen?: Dispatch<SetStateAction<boolean>>;
}

export interface DropdownSelectorProps {
  options: DropdownOption[];
  value: string | number;
  onSelect: (val: string | number) => void;
  width?: number;
}

export interface DropDownHoverProps {
  navLinks?: NavLinkItem[];
}

export type MessageType = 'success' | 'error';

export interface MessageModalProps {
  type: MessageType;
  message: string;
  isOpen: boolean;
  onClose: () => void;
  autoCloseDuration?: number; // milliseconds, 0 to disable auto-close
}

export interface NotificationBarProps {
  onClose?: () => void;
}
