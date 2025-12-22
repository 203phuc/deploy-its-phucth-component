import { Flex } from '@components/Atom/Flex';
import React from 'react';
import { Footer } from '../Homepage/sections/Footer';
import { NavigationBar } from '../Homepage/sections/NavigationBar';
import { PageHeader } from './components/PageHeader';

export const ShopPage = () => {
  return (
    <React.Fragment>
      <NavigationBar isMobile={false} />
      <Flex direction="column" align="center">
        <Flex flex={1} direction="column"></Flex>
        <PageHeader />
      </Flex>
      <Footer />
    </React.Fragment>
  );
};

export default ShopPage;
