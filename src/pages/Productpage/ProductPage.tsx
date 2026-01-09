import { Flex } from '@components/Atom/Flex';
import { ProductSection } from './components/ProductSection';
import { TabSection } from './components/TabSection';
import { useProductPage } from './hooks/useProductPage';
import { sampleProduct } from './mockData/sampleProduct';
import { Product } from './types';

interface ProductPageProps {
  product: Product;
}

export const ProductPage = ({ product = sampleProduct }: ProductPageProps) => {
  const { isMobile } = useProductPage();
  return (
    <Flex direction="column">
      <ProductSection product={product} isMobile={isMobile} />
      <TabSection
        description={product.description}
        specifications={product.specifications ?? {}}
        reviews={product.reviews ?? []}
        questions={product.questions ?? []}
        reviewCount={product.reviewCount ?? 0}
      />
    </Flex>
  );
};
