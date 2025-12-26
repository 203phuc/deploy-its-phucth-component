import { Position } from '@components/Atom/Position/Position';
import { ProductGridLayout } from '@pages/HOC/ProductGridLayout';
import React, { useEffect, useState } from 'react';
import { onSmallScreenChange } from 'src/util/mediaQueries';
import { SliderProvider } from '../../context/SliderContext';
import { type ColumnType } from '../HOC/ProductGrid';
import { Footer } from '../Homepage/sections/Footer';
import { useHomePage } from '../Homepage/sections/hooks/HomePageHook';
import { NavigationBar } from '../Homepage/sections/NavigationBar';
import { PageHeader } from './components/PageHeader';
import { products } from './mockData/products';

const ShopPageContent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { notificationHeight, scrolled } = useHomePage();
  const [columns, setColumns] = useState<ColumnType>('5column');
  const [filter, setFilter] = useState<boolean>(false);
  useEffect(() => {
    console.log('filter', filter);
    console.log(columns);
    return onSmallScreenChange(setIsMobile);
  }, [filter, isMobile, columns]);
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
