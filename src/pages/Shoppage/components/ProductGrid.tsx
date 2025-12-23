import { ProductCard } from './ProductCard';

interface ProductGridProps {
  isMobile?: boolean;
}

export const ProductGrid = ({ isMobile }: ProductGridProps) => {
  if (isMobile) {
    // Mobile specific rendering logic can go here
  }
  return <ProductCard size={isMobile ? '2column' : '5column'} isNew salePercentage={50} />;
};

export default ProductGrid;
