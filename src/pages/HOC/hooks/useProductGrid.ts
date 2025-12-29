import { useLayoutEffect, useMemo, useState } from 'react';
import { addUniqueIds } from 'src/util/uniqueId';
import { ITEMS_PER_PAGE, ProductGridProps, columnGapMap, columnMap, rowGapMap } from './type';

export const useProductGrid = ({ isMobile, product, columns = '5column' }: ProductGridProps) => {
  const [visibleCount, setVisibleCount] = useState<number>(0);

  useLayoutEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE[columns as keyof typeof ITEMS_PER_PAGE]);
  }, [isMobile, columns]);

  const gridColumns = columnMap[columns];
  const gridRowGap = isMobile ? 52 : rowGapMap[columns];
  const gridColumnGapMap = isMobile ? 16 : columnGapMap[columns];

  const productsWithId = useMemo(() => (product ? addUniqueIds(product) : []), [product]);

  const visibleProducts = useMemo(
    () => productsWithId.slice(0, visibleCount),
    [productsWithId, visibleCount],
  );

  const columnType = isMobile ? '2column' : columns;
  const loadMoreCount = ITEMS_PER_PAGE[columnType as keyof typeof ITEMS_PER_PAGE];

  const canLoadMore = visibleCount < productsWithId.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + loadMoreCount);
  };

  return {
    // data
    visibleProducts,
    visibleCount,
    canLoadMore,

    // layout
    gridColumns,
    gridRowGap,
    gridColumnGapMap,

    // actions
    handleLoadMore,
    setVisibleCount,
    loadMoreCount,
  };
};
