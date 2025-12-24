import { Flex } from '@components/Atom/Flex';
import { Position } from '@components/Atom/Position/Position';
import { Section } from '@components/Atom/Section/Section';
import React, { useEffect } from 'react';
import { onSmallScreenChange } from 'src/util/mediaQueries';
import { SliderProvider } from '../../context/SliderContext';
import { Footer } from '../Homepage/sections/Footer';
import { useHomePage } from '../Homepage/sections/hooks/HomePageHook';
import { NavigationBar } from '../Homepage/sections/NavigationBar';
import { PageHeader } from './components/PageHeader';
import { ProductGrid } from './components/ProductGrid';
import { ToolBar } from './components/ToolBar';
import { products } from './mockData/products';

const ShopPageContent = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const { notificationHeight, scrolled } = useHomePage();
  const [columns, setColumns] = React.useState<'list' | '5column' | '4column' | '3column' | '2column'>(
    '5column',
  );
  useEffect(() => {
    return onSmallScreenChange(setIsMobile);
  }, []);
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
      <Flex direction="column" align="center">
        <PageHeader isMobile={isMobile} />
        <Section w="100%" px={isMobile ? 16 : 52}>
          <ToolBar productCount={products.length} isMobile={isMobile} setColumns={setColumns} />
          <ProductGrid product={products} columns={columns} isMobile={isMobile} />
        </Section>
      </Flex>
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
