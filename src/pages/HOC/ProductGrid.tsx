import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Grid } from '@components/Atom/Grid';
import { ProductCard } from './ProductCard';
import { ProductGridProps } from './hooks/type';
import { useProductGrid } from './hooks/useProductGrid';

export const ProductGrid = ({ isMobile, product, columns = '5column' }: ProductGridProps) => {
  const {
    visibleProducts,
    canLoadMore,

    // layout
    gridColumns,
    gridRowGap,
    gridColumnGapMap,

    // actions
    handleLoadMore,
  } = useProductGrid({ isMobile, product, columns });

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
