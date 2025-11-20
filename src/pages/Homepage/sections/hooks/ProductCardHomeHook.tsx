import { useMemo } from 'react';
import { formatPrice } from '../../../../util/formatPrice';
import { ProductCardProps } from '../types';

function getSizeConfig(size: 'default' | 'small') {
  return {
    small: {
      card: { cardW: 163, cardH: 277, imageH: 217, badgeW: 49, badgeH: 24 },
      flex: { direction: 'column' as const, gap: 8 },
      text: { badge: 'xsmall' as const, name: 'smedium' as const, price: 'xsmall' as const },
    },
    default: {
      card: { cardW: 424, cardH: 631, imageH: 565, badgeW: 63, badgeH: 30 },
      flex: { direction: 'row' as const, gap: 12 },
      text: { badge: 'small' as const, name: 'special1' as const, price: 'small' as const },
    },
  }[size];
}

export const useProductCard = ({
  price,
  salePrice,
  salePercentage,
  currency = 'USD',
  size = 'default',
}: Pick<ProductCardProps, 'price' | 'salePrice' | 'salePercentage' | 'currency' | 'size'>) => {
  const config = useMemo(() => getSizeConfig(size), [size]);

  const priceLabel = useMemo(() => formatPrice(price, currency), [price, currency]);

  const saleLabel = useMemo(() => {
    if (!salePrice || !salePercentage || salePercentage <= 0) return null;
    return formatPrice(salePrice, currency);
  }, [salePrice, salePercentage, currency]);

  const showSaleBadge = salePercentage !== undefined && salePercentage > 0;

  return {
    config, // size styling
    priceLabel, // original price
    saleLabel, // sale price (if any)
    showSaleBadge, // boolean
  };
};
