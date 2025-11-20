// hooks/useBannerGrid.ts
import { useMemo } from 'react';
import { BannerItem } from '../types';

export const useBannerGrid = (items: BannerItem[] = [], isMobile: boolean) => {
  // Filter out undefined/null items
  const validItems = useMemo(() => items.filter((i): i is BannerItem => i != null), [items]);

  const left = validItems[0];
  const topRight = validItems[1];
  const bottomRight = validItems[2];

  return { isMobile, left, topRight, bottomRight, validItems };
};
