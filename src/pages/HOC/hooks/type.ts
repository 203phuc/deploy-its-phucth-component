import { ImagePlaceholderSize } from '@components/Atom/ImagePlaceholder/type';
import { PageHeaderProps } from '@pages/Shoppage/components/PageHeader';

export interface ProductCardProps {
  size?:
    | 'list'
    | '5column'
    | '4column'
    | '3column'
    | '2column'
    | '4columnFilter'
    | '3columnFilter'
    | '2columnFilter'
    | 'listColumnFilter'
    | '2columnMobile'
    | 'listMobile';
  imageUrl?: string;
  title?: string;
  price: number;
  rating?: 0 | 1 | 2 | 3 | 4 | 5;
  isNew?: boolean;
  salePercentage?: number;
  description?: string;
}

export const cardDimensions = {
  '5column': { w: 241.5, h: 408, imageSize: 's5' as ImagePlaceholderSize },
  '4column': { w: 310, h: 499, imageSize: 's8' as ImagePlaceholderSize },
  '4columnFilter': { w: 228, h: 390, imageSize: 's30' as ImagePlaceholderSize },
  '3column': { w: 424, h: 651, imageSize: 's19' as ImagePlaceholderSize },
  '2column': { w: 652, h: 975, imageSize: 's23' as ImagePlaceholderSize },
  '2columnFilter': { w: 483, h: 709, imageSize: 's32' as ImagePlaceholderSize },
  '3columnFilter': { w: 313, h: 499, imageSize: 's31' as ImagePlaceholderSize },
  '2columnMobile': {
    w: 163,
    h: 277,
    textSize: 'smedium',
    priceSize: 'xsmall',
    imageSize: 's2' as ImagePlaceholderSize,
  },
  listMobile: { w: 343, h: 522, imageSize: 's14' as ImagePlaceholderSize },
};
export type ColumnType =
  | 'list'
  | '5column'
  | '4column'
  | '3column'
  | '2column'
  | '4columnFilter'
  | '3columnFilter'
  | '2columnFilter'
  | '2columnMobile'
  | 'listColumnFilter'
  | 'listMobile';

export interface ProductGridProps {
  isMobile?: boolean;
  product?: ProductCardProps[];
  columns?: ColumnType;
}
export const columnMap: Record<ColumnType, number> = {
  list: 1,
  '5column': 5,
  '4column': 4,
  '3column': 3,
  '2column': 2,
  listMobile: 1,
  '4columnFilter': 4,
  '3columnFilter': 3,
  '2columnFilter': 2,
  '2columnMobile': 2,
  listColumnFilter: 1,
};
export const defaultRowGap = 56;
export const defaultFilterGap = 27;
export const defaultColumnGap = 32;

export const rowGapMap: Record<ColumnType, number> = {
  list: 0,
  '5column': 52,
  '4column': defaultRowGap,
  '3column': defaultRowGap,
  '4columnFilter': defaultRowGap,
  '3columnFilter': defaultRowGap,
  '2columnFilter': defaultRowGap,
  '2columnMobile': defaultRowGap,
  listColumnFilter: 0,
  listMobile: 1,
  '2column': defaultRowGap,
};

export const columnGapMap: Record<ColumnType, number> = {
  list: 0,
  '5column': defaultColumnGap,
  '4column': defaultColumnGap,
  '3column': defaultColumnGap,
  listMobile: 0,
  '4columnFilter': defaultFilterGap,
  '3columnFilter': defaultFilterGap,
  '2columnFilter': defaultFilterGap,
  '2columnMobile': defaultFilterGap,
  listColumnFilter: 0,
  '2column': defaultColumnGap,
};

export const ITEMS_PER_PAGE = {
  '5column': 15,
  '4column': 12,
  '3column': 12,
  '2column': 12,
  '4columnFilter': 12,
  '3columnFilter': 12,
  '2columnFilter': 12,
  listMobile: 12,
  listItemFilter: 12,
  list: 12,
} as const;
export interface ProductGridLayoutProps {
  isMobile: boolean;
  products: ProductCardProps[];
  columns: ColumnType;
  setColumns: React.Dispatch<React.SetStateAction<ColumnType>>;
  filter?: boolean;
  setFilter?: React.Dispatch<React.SetStateAction<boolean>>;
  component?: React.ReactElement<PageHeaderProps>;
}
