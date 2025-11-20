import { DropdownOption } from '@components/Molecule/Dropdown';
import { navLinks } from '../mockData/constant';
export interface ProductItem {
  id: number;
  name: string;
  prices: number;
  imageUrl?: string;
  currency?: string;
  isNew?: boolean;
  salePrice?: number;
  salePercentage?: number;
}

export interface LinkItem {
  label: string;
  url: string;
}

export interface ProductGridProps {
  products?: ProductItem[];
  links?: LinkItem[]; // use the defined LinkItem interface instead of object[]
  isMobile?: boolean;
}

export interface MutualProps {
  isMobile?: boolean;
}
export interface BannerItem {
  id: number;
  name: string;
  imageUrl: string;
  link?: string;
}

export interface BannerGridProps {
  items: BannerItem[]; // expects at least 3 items: left, right-top, right-bottom
  isMobile: boolean;
}
export interface DropDownHoverProps {
  navLinks?: typeof navLinks;
}
export interface DropdownSelectorProps {
  options: DropdownOption[];
  value: string | number;
  onSelect: (val: string | number) => void;
  width?: number;
}

export interface IconBlockProps {
  cartItem?: number; // or number if it's a count
  setFlyoutCartOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
export type MessageType = 'success' | 'error';
export interface TextImageSectionProps {
  intro?: string;
  title: string;
  description?: string;
  images: string[]; // expect 4 image urls
  isMobile: boolean;
}

export interface ProductCardProps {
  name: string;
  price: number;
  /** ISO 4217 currency code, e.g. 'USD', 'EUR' */
  currency?: string;
  imageUrl?: string;
  /** Mark product as new */
  isNew?: boolean;
  /** Sale price. Must be provided together with salePercentage */
  salePrice?: number;
  /** Sale discount percentage (e.g., 20 for 20% off). Must be provided together with salePrice */
  salePercentage?: number;
  /** Visual size variant for the card. Use 'small' for mobile compact layout */
  size?: 'default' | 'small';
}
export interface MessageModalProps {
  type: MessageType;
  message: string;
  isOpen: boolean;
  onClose: () => void;
  autoCloseDuration?: number; // milliseconds, 0 to disable auto-close
}
export interface NavigationBarProps {
  scrolled?: boolean;
  /** vertical translation in px applied to the nav (for slide animations) */
  translateY?: number;
  /** css transition to apply to the transform */
  transition?: string;
  setFlyoutCartOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setFlyoutMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
}
export interface NotificationBarProps {
  isMobile: boolean;
  onClose?: () => void;
}
