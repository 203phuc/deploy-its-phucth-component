import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Grid } from '@components/Atom/Grid';
import { useLayoutEffect, useMemo, useState } from 'react';
import { addUniqueIds } from 'src/util/uniqueId';
import { ProductCard, ProductCardProps } from './ProductCard';
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

interface ProductGridProps {
  isMobile?: boolean;
  product?: ProductCardProps[];
  columns?: ColumnType;
}
const columnMap: Record<ColumnType, number> = {
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
const defaultRowGap = 56;
const defaultFilterGap = 27;
const defaultColumnGap = 32;

const rowGapMap: Record<ColumnType, number> = {
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

const columnGapMap: Record<ColumnType, number> = {
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

const ITEMS_PER_PAGE = {
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

export const ProductGrid = ({ isMobile, product, columns = '5column' }: ProductGridProps) => {
  const [visibleCount, setVisibleCount] = useState<number>(0);

  // Reset visible count when layout changes
  useLayoutEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE[columns as keyof typeof ITEMS_PER_PAGE]);
  }, [isMobile, columns]);

  const gridColumns = columnMap[columns];
  const gridRowGap = isMobile ? 52 : rowGapMap[columns];
  const gridColumnGapMap = isMobile ? 16 : columnGapMap[columns];

  const productsWithId = useMemo(() => {
    if (!product) return [];
    return addUniqueIds(product);
  }, [product]);

  const visibleProducts = useMemo(() => {
    return productsWithId.slice(0, visibleCount);
  }, [productsWithId, visibleCount]);

  const canLoadMore = visibleCount < (productsWithId.length || 0);

  const getLoadMoreCount = () => {
    const columnType = isMobile ? '2column' : columns;
    return ITEMS_PER_PAGE[columnType as keyof typeof ITEMS_PER_PAGE];
  };

  const loadMoreCount = getLoadMoreCount();

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + loadMoreCount);
  };

  return (
    <Flex direction="column" gap={56}>
      <Grid columns={gridColumns} columnGap={gridColumnGapMap} rowGap={gridRowGap}>
        {visibleProducts.map((item) => (
          <ProductCard
            key={item.uid}
            price={item.price}
            size={columns}
            isNew={item.isNew}
            rating={item.rating}
            salePercentage={item.salePercentage}
            title={item.title}
          />
        ))}
      </Grid>
      {canLoadMore && (
        <Flex justify="center">
          <Button onClick={handleLoadMore} roundness="round" size={isMobile ? 'xsmall' : 'medium'}>
            Load More
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default ProductGrid;
