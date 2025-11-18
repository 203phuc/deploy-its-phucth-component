import { Flex } from '@components/Atom/Flex';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Slider } from '@components/Molecule/Slider';
import { useEffect, useState } from 'react';
import { SliderProvider, useSliderData } from '../../context/SliderContext';
import { bannerItems } from './mockData/banners';
import { defaultProducts as homeProducts, link } from './mockData/products';
import BannerGrid from './sections/BannerGrid';
import { Branding } from './sections/Branding';
import { FeatureSection } from './sections/FeatureSection';
import { IconBoxSection } from './sections/IconBoxSection';
import { NewsletterSection } from './sections/NewsletterSection';
import ProductGrid from './sections/ProductGrid';
import TextImageSection from './sections/TextImageSection';

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
      <Section w="100%">
        <FeatureSection />
      </Section>
      <Section w="100%">
        <NewsletterSection />
      </Section>
      <Section>
        <TextImageSection
          intro="CHECK US OUT"
          title="On instagram"
          description="Browse a curated selection of new arrivals and bestsellers — handpicked and ready to ship."
          images={[
            '/src/assets/banner1.png',
            '/src/assets/banner2.png',
            '/src/assets/banner3.png',
            '/src/assets/prod_1.png',
          ]}
        />
      </Section>
      <Section>
        <IconBoxSection />
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
