import { IconName } from '@components/Atom/Icons';

export interface NavLinkDropdownItem {
  id: string;
  label: string;
  type: string;
  condition: string;
  icon?: IconName;
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

export const navLinks: NavLinkItem[] = [
  {
    id: '3',
    label: 'Home',
    type: 'link',
    condition: 'Always',
    path: '/',
  },
  {
    id: '4',
    label: 'Shop',
    type: 'group',
    condition: 'Always',
    icon: 'ChevronDownIcon',
    path: '/product',
    dropdown: [
      {
        id: '4_1',
        label: 'Home & Decor',
        type: 'button',
        condition: 'User hovers over [Shop]',
        icon: 'ChevronDownIcon',
      },
      {
        id: '4_2',
        label: 'Clothing',
        type: 'button',
        condition: 'User hovers over [Shop]',
        icon: 'ChevronDownIcon',
      },
      {
        id: '4_3',
        label: 'Accessories',
        type: 'button',
        condition: 'User hovers over [Shop]',
        icon: 'ChevronDownIcon',
      },
      { id: '4_4', label: 'Outdoor', type: 'button', condition: 'User hovers over [Shop]' }, // no icon
    ],
  },
  {
    id: '5',
    label: 'Product',
    type: 'group',
    condition: 'Always',
    icon: 'ChevronDownIcon',
    dropdown: [
      {
        id: '5_1',
        label: 'Best sellers',
        type: 'button',
        condition: 'User hovers over [Product]',
        icon: 'ChevronDownIcon',
      },
      { id: '5_2', label: 'New arrivals', type: 'button', condition: 'User hovers over [Product]' },
      {
        id: '5_3',
        label: 'Sale',
        type: 'button',
        condition: 'User hovers over [Product]',
        icon: 'ChevronDownIcon',
      },
    ],
  },
  {
    id: '6',
    label: 'Pages',
    type: 'group',
    condition: 'Always',
    icon: 'ChevronDownIcon',
    dropdown: [
      { id: '6_1', label: 'Blogs', type: 'button', condition: 'User hovers over [Pages]' },
      {
        id: '6_2',
        label: 'About us',
        type: 'button',
        condition: 'User hovers over [Pages]',
        icon: 'ChevronDownIcon',
      },
      {
        id: '6_3',
        label: 'Contact us',
        type: 'button',
        condition: 'User hovers over [Pages]',
        icon: 'PhoneIcon',
      },
    ],
  },
];
