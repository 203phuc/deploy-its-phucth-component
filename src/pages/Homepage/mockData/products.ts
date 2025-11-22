import type { LinkItem, ProductItem } from '../sections/types';
import { bestsellerProducts } from './bestsellers';
import { newarrivalsProducts } from './newarrivals';
import { saleProducts } from './sale';

export const defaultProducts: ProductItem[] = bestsellerProducts;

export const productsByCategory = {
  bestsellers: bestsellerProducts,
  newarrivals: newarrivalsProducts,
  sale: saleProducts,
};

export const link: LinkItem[] = [
  { label: 'Best sellers', url: 'bestsellers' },
  { label: 'New arrivals', url: 'newarrivals' },
  { label: 'Sale', url: 'sale' },
];
