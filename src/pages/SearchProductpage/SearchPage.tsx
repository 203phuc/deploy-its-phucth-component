import { Flex } from '@components/Atom/Flex';
import { Section } from '@components/Atom/Section';
import { ProductGridLayout } from '@pages/HOC/ProductGridLayout';
import { SliderProvider } from '../../context/SliderContext';
import { BreadCrumb } from '../HOC/BreadCrumb/BreadCrumb';
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
    <Flex direction="column" gap={24}>
      <Section w="100%" pt={isMobile ? 48 : 72} pb={isMobile ? 0 : 24} px={isMobile ? 16 : 0}>
        <BreadCrumb
          items={[
            { id: 'home', label: 'Home', path: '/' },
            { id: 'search', label: `Search: ${searchQuery}` },
          ]}
        />
      </Section>
      <ProductGridLayout
        isMobile={isMobile}
        products={filteredProducts}
        columns={columns}
        setColumns={setColumns}
        filter={filter}
        setFilter={setFilter}
      />
    </Flex>
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
