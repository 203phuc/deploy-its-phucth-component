import { Position } from '@components/Atom/Position/Position';
import { ProductGridLayout } from '@pages/HOC/ProductGridLayout';
import React from 'react';
import { SliderProvider } from '../../context/SliderContext';
import { Footer } from '../Homepage/sections/Footer';
import { NavigationBar } from '../Homepage/sections/NavigationBar';
import { PageHeader } from './components/PageHeader';
import { useShopPage } from './hooks/useShopPage';
import { products } from './mockData/products';

const ShopPageContent = () => {
  const { isMobile, columns, setColumns, filter, setFilter, notificationHeight, scrolled } = useShopPage();
  return (
    <React.Fragment>
      <Position position={scrolled ? 'fixed' : 'relative'} top={0} left={0} right={0} zIndex={10}>
        <NavigationBar
          isMobile={isMobile}
          scrolled={scrolled}
          translateY={notificationHeight}
          transition="transform 220ms cubic-bezier(.2,.9,.2,1)"
        />
      </Position>
      <ProductGridLayout
        isMobile={isMobile}
        products={products}
        columns={columns}
        setColumns={setColumns}
        filter={filter}
        setFilter={setFilter}
        component={<PageHeader isMobile={isMobile} />}
      />
      <Footer isMobile={isMobile} />
    </React.Fragment>
  );
};
export const ShopPage = () => {
  return (
    <SliderProvider>
      <ShopPageContent />
    </SliderProvider>
  );
};

export default ShopPage;
