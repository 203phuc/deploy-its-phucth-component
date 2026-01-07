import { type MutualProps } from '../../Homepage/sections/types';

interface IconBoxItem {
  icon: string;
  title: string;
  description: string;
  iconSize?: number;
  strokeWidth?: number;
}

export const useIconBox = ({ isMobile }: MutualProps) => {
  const iconBoxItems: IconBoxItem[] = [
    {
      icon: 'TruckIcon',
      title: 'Free shipping',
      description: 'Order above $200',
      iconSize: 32,
    },
    {
      icon: 'MoneyIcon',
      title: 'Money-back',
      description: '30 day Guarantee',
      iconSize: 32,
    },
    {
      icon: 'PhoneIcon',
      title: 'Premium Support',
      description: 'Phone and email support',
      iconSize: 32,
      strokeWidth: 1,
    },
    {
      icon: 'LockIcon',
      title: 'Secure Payments',
      description: 'Secure by Stripe',
      iconSize: 32,
    },
  ];

  return {
    iconBoxItems,
    isMobile,
  };
};

export type { IconBoxItem };
