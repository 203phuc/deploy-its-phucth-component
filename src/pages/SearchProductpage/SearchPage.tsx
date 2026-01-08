import { ProductGridLayout } from '@pages/HOC/ProductGridLayout';
import { SliderProvider } from '../../context/SliderContext';
import { PageHeader } from './components/PageHeader';
import { SearchNoResults } from './components/SearchNoResults';
import { useSearchPage } from './hooks/useSearchPage';
import { products } from './mockData/products';

const SearchPageContent = () => {
  const { isMobile, columns, setColumns, filter, setFilter, searchQuery } = useSearchPage();

  if (!searchQuery) return null;

  const filteredProducts = products.filter((product) =>
    product?.title?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (filteredProducts.length === 0) {
    return <SearchNoResults searchQuery={searchQuery} isMobile={isMobile} />;
  }

  return (
    <ProductGridLayout
      isMobile={isMobile}
      products={filteredProducts}
      columns={columns}
      setColumns={setColumns}
      filter={filter}
      setFilter={setFilter}
      component={<PageHeader searchQuery={searchQuery} isMobile={isMobile} />}
    />
  );
};

export const SearchPage = () => {
  return (
    <SliderProvider>
      <SearchPageContent />
    </SliderProvider>
  );
};

export default SearchPage;
