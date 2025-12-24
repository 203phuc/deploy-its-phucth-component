import { Grid } from '@components/Atom/Grid';
import { useMemo } from 'react';
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

export const ProductGrid = ({ isMobile, product, columns = '5column' }: ProductGridProps) => {
  const gridColumns = isMobile ? 2 : columnMap[columns];
  const gridRowGap = isMobile ? 52 : rowGapMap[columns]; // row gap per size

  const productsWithId = useMemo(() => {
    if (!product) return [];
    return addUniqueIds(product);
  }, [product]);

  return (
    <Grid columns={gridColumns} columnGap={32} rowGap={gridRowGap}>
      {productsWithId.map((item) => (
        <ProductCard
          key={item.uid}
          price={item.price}
          size={columns ?? (isMobile ? '2column' : '5column')}
          isNew={item.isNew}
          rating={item.rating}
          salePercentage={item.salePercentage}
          title={item.title}
        />
      ))}
    </Grid>
  );
};

export default ProductGrid;
