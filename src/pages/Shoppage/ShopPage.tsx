import { Flex } from '@components/Atom/Flex';
import React, { useEffect } from 'react';
import { onSmallScreenChange } from 'src/util/mediaQueries';
import { SliderProvider } from '../../context/SliderContext';
import { Footer } from '../Homepage/sections/Footer';
import { useHomePage } from '../Homepage/sections/hooks/HomePageHook';
import { NavigationBar } from '../Homepage/sections/NavigationBar';
import { PageHeader } from './components/PageHeader';

const ShopPageContent = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const { notificationHeight, scrolled } = useHomePage();
  useEffect(() => {
    return onSmallScreenChange(setIsMobile);
  }, []);
  return (
    <SliderProvider>
      <React.Fragment>
        <NavigationBar
          isMobile={isMobile}
          scrolled={scrolled}
          translateY={notificationHeight}
          transition="transform 220ms cubic-bezier(.2,.9,.2,1)"
        />
        <Flex direction="column" align="center">
          <Flex flex={1} direction="column"></Flex>
          <PageHeader />
        </Flex>
        <Footer />
      </React.Fragment>
    </SliderProvider>
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
