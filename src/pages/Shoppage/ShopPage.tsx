import { Flex } from '@components/Atom/Flex';
import { Section } from '@components/Atom/Section/Section';
import { Text } from '@components/Atom/Text/Text';
import { useEffect, useState } from 'react';
import { Footer } from '../Homepage/sections/Footer';
import { NavigationBar } from '../Homepage/sections/NavigationBar';

export const ShopPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial mobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Flex direction="column" height="100vh">
      {/* Header with Navigation */}
      <header>
        <NavigationBar scrolled={true} isMobile={isMobile} />
      </header>

      {/* Main Content */}
      <Flex flex={1} direction="column">
        <Section py={32} px={isMobile ? 16 : 48}>
          <Text size="xlarge" weight="bold">
            Shop
          </Text>
          {/* Add your shop components here */}
        </Section>
      </Flex>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </Flex>
  );
};

export default ShopPage;
