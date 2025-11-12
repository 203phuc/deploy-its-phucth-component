import { Flex } from '@components/Atom/Flex';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Slider } from '@components/Molecule/Slider';
import { useEffect, useState } from 'react';
import { SliderProvider, useSliderData } from '../../context/SliderContext';
import { bannerItems } from './data/banners';
import { defaultProducts as homeProducts, link } from './data/products';
import BannerGrid from './sections/BannerGrid';
import { Branding } from './sections/Branding';
import ProductGrid from './sections/ProductGrid';

// Inner component that uses the slider context
const HomePageContent = () => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { desktopSlides, mobileImageSlides, mobileTextSlides } = useSliderData();

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize(); // ✅ Set initial value after mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (screenWidth === null) {
    return null; // or loading skeleton while waiting for client
  }

  const handleIndexChange = (index: number) => {
    console.log('running');
    console.log(index);
    setCurrentIndex(index);
  };

  const isMobile = screenWidth <= 768; // ✅ more realistic breakpoint

  return (
    <Flex direction="column" width="100%" height="100%">
      <Flex direction="column" gap={40} width="100%">
        <Flex justify="center" align="center" width="100%">
          <Position position="relative">
            {isMobile ? (
              <Section pt={47}>
                <Slider
                  autoPlay={3000}
                  onSlideChange={(current) => handleIndexChange(current)}
                  height={350}
                  width={375}
                  slides={mobileImageSlides}
                />
                <Slider
                  showDots={false}
                  currentIndex={currentIndex}
                  height={272}
                  width={375}
                  slides={mobileTextSlides}
                />
              </Section>
            ) : (
              <Section w="100%">
                <Slider autoPlay={3000} height={800} width={1440} slides={desktopSlides} />
              </Section>
            )}
          </Position>
        </Flex>
      </Flex>
      {/* BannerGrid section: uses same simple data shape (name, imageUrl, link) */}
      <Section w="100%">
        <BannerGrid items={bannerItems} />
      </Section>
      <Section w="100%">
        <ProductGrid products={homeProducts} links={link} />
      </Section>
      <Section w="100%">
        <Branding />
      </Section>
    </Flex>
  );
};

// Outer component that provides the slider context
export const HomePage = () => {
  return (
    <SliderProvider>
      <HomePageContent />
    </SliderProvider>
  );
};
