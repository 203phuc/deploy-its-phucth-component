import { Flex } from '@components/Atom/Flex';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Slider } from '@components/Molecule/Slider';
import { SliderProvider } from '../../context/SliderContext';
import { IconBox } from '../HOC/IconBox';
import { bannerItems } from './mockData/banners';
import { defaultProducts as homeProducts, link } from './mockData/products';
import { BannerGrid } from './sections/BannerGrid';
import { Branding } from './sections/Branding';
import { FeatureSection } from './sections/FeatureSection';
import { useHomePage } from './sections/hooks/HomePageHook';
import { NewsletterSection } from './sections/NewsletterSection';
import ProductGrid from './sections/ProductGrid';
import TextImageSection from './sections/TextImageSection';

const HomePageContent = () => {
  const {
    currentIndex,
    handleIndexChange,
    isMobileScreen,
    desktopSlides,
    mobileImageSlides,
    mobileTextSlides,
  } = useHomePage();

  return (
    <Flex direction="column" width="100%" height="100%">
      <Flex direction="column" gap={40} width="100%">
        <Flex justify="center" align="center" width="100%">
          <Position position="relative">
            {isMobileScreen ? (
              <Section pt={47}>
                <Slider
                  autoPlay={3000}
                  onSlideChange={handleIndexChange}
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

      <Section w="100%">
        <BannerGrid isMobile={isMobileScreen} items={bannerItems} />
      </Section>
      <Section w="100%">
        <ProductGrid isMobile={isMobileScreen} products={homeProducts} links={link} />
      </Section>
      <Section w="100%">
        <Branding isMobile={isMobileScreen} />
      </Section>
      <Section w="100%">
        <FeatureSection isMobile={isMobileScreen} />
      </Section>
      <Section w="100%">
        <NewsletterSection isMobile={isMobileScreen} />
      </Section>
      <Section>
        <TextImageSection
          isMobile={isMobileScreen}
          intro="CHECK US OUT"
          title="On instagram"
          description="Browse a curated selection of new arrivals and bestsellers — handpicked and ready to ship."
          images={[
            'https://res.cloudinary.com/dnuicbze9/image/upload/v1766379463/banner1_mfkrjx.png',
            'https://res.cloudinary.com/dnuicbze9/image/upload/v1766379462/banner2_afsx5i.png',
            'https://res.cloudinary.com/dnuicbze9/image/upload/v1766379461/banner3_z9eyfw.png',
            'https://res.cloudinary.com/dnuicbze9/image/upload/v1766383908/prod_1_lc42xu.png',
          ]}
        />
      </Section>
      <Section>
        <IconBox isMobile={isMobileScreen} />
      </Section>
    </Flex>
  );
};

export const HomePage = () => {
  return (
    <SliderProvider>
      <HomePageContent />
    </SliderProvider>
  );
};
