import { ProductGridLayout } from '@pages/HOC/ProductGridLayout';
import { PageHeader } from './components/PageHeader';
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
      component={<PageHeader isMobile={isMobile} />}
    />
  );
};
export const ShopPage = () => {
  return <ShopPageContent />;
};

export default ShopPage;
