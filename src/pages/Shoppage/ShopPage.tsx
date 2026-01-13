import { PageHeader } from '@pages/HOC/PageHeader';
import { ProductGridLayout } from '@pages/HOC/ProductGridLayout';
import { useShopPage } from './hooks/useShopPage';
import { products } from './mockData/products';

const ShopPageContent = () => {
  const { isMobile, columns, setColumns, filter, setFilter } = useShopPage();
  return (
    <ProductGridLayout
      isMobile={isMobile}
      products={products}
      columns={columns}
      setColumns={setColumns}
      filter={filter}
      setFilter={setFilter}
      component={
        <PageHeader
          isMobile={isMobile}
          title="Shop"
          subtitle="Welcome to our online shopping paradise Explore wonderful products waiting for you."
          backgroundImage="https://res.cloudinary.com/dnuicbze9/image/upload/v1766393221/pageheader_fhqave.png"
        />
      }
    />
  );
};
export const ShopPage = () => {
  return <ShopPageContent />;
};

export default ShopPage;
