import { Flex } from '@components/Atom/Flex';
import { Section } from '@components/Atom/Section/Section';
import { Text } from '@components/Atom/Text/Text';
import { useEffect, useState } from 'react';
import { Footer } from '../Homepage/sections/Footer';
import { NavigationBar } from '../Homepage/sections/NavigationBar';
import BreadCrumb from './components/BreadCrumb';
import { useBreadcrumbHistory } from './hooks/useBreadcrumbHistory';

const ShopPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const breadcrumbHistory = useBreadcrumbHistory(3);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Flex direction="column">
      <NavigationBar isMobile={isMobile} />
      <Flex flex={1} direction="column">
        <Section py={32} px={isMobile ? 16 : 48}>
          <BreadCrumb items={breadcrumbHistory} gap={3} className="mb-6" />
          <Text size="xlarge" weight="bold" className="mb-6">
            Shop
          </Text>
          {/* Add your shop components here */}
        </Section>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default ShopPage;
