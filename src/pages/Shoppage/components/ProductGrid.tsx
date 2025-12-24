import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Grid } from '@components/Atom/Grid';
import { useLayoutEffect, useMemo, useState } from 'react';
import { addUniqueIds } from 'src/util/uniqueId';
import { ProductCard, ProductCardProps } from './ProductCard';
type ColumnType = 'list' | '5column' | '4column' | '3column' | '2column';

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
};
const defaultRowGap = 56;

const rowGapMap: Record<ColumnType, number> = {
  list: 0,
  '5column': 52,
  '4column': defaultRowGap,
  '3column': defaultRowGap,
  '2column': defaultRowGap,
};

const ITEMS_PER_PAGE = {
  '5column': 15,
  '4column': 12,
  '3column': 12,
  '2column': 12,
  list: 12,
} as const;

export const ProductGrid = ({ isMobile, product, columns = '5column' }: ProductGridProps) => {
  const [visibleCount, setVisibleCount] = useState<number>(0);

  // Reset visible count when layout changes
  useLayoutEffect(() => {
    const columnType = isMobile ? '2column' : columns;
    setVisibleCount(ITEMS_PER_PAGE[columnType as keyof typeof ITEMS_PER_PAGE]);
  }, [isMobile, columns]);

  const gridColumns = isMobile ? 2 : columnMap[columns];
  const gridRowGap = isMobile ? 52 : rowGapMap[columns];

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
      <Grid columns={gridColumns} columnGap={32} rowGap={gridRowGap}>
        {visibleProducts.map((item) => (
          <ProductCard
            key={item.uid}
            price={item.price}
            size={isMobile ? '2column' : columns}
            isNew={item.isNew}
            rating={item.rating}
            salePercentage={item.salePercentage}
            title={item.title}
          />
        ))}
      </Grid>
      {canLoadMore && (
        <Flex justify="center">
          <Button onClick={handleLoadMore} roundness="round" size="medium">
            Load More
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default ProductGrid;
