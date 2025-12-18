import { Flex } from '@components/Atom/Flex';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Slider } from '@components/Molecule/Slider';
import { RouterProvider } from '@pages/CustomHook/navigateHook';
import { useState } from 'react';
import { NewsletterProvider } from '../../context/NewsletterContext';
import { SliderProvider } from '../../context/SliderContext';
import { bannerItems } from './mockData/banners';
import { defaultProducts as homeProducts, link } from './mockData/products';
import { BannerGrid } from './sections/BannerGrid';
import { Branding } from './sections/Branding';
import { FeatureSection } from './sections/FeatureSection';
import { Footer } from './sections/Footer';
import { useHomePage } from './sections/hooks/HomePageHook';
import { IconBoxSection } from './sections/IconBoxSection';
import { MessageModal } from './sections/MessageModal';
import { NavigationBar } from './sections/NavigationBar';
import { NewsletterSection } from './sections/NewsletterSection';
import { NotificationBar } from './sections/NotificationBar';
import ProductGrid from './sections/ProductGrid';
import TextImageSection from './sections/TextImageSection';

const HomePageContent = () => {
  const {
    screenWidth,
    currentIndex,
    handleIndexChange,
    setNotificationVisible,
    scrolled,
    isMobileScreen,
    notificationHeight,
    desktopSlides,
    mobileImageSlides,
    mobileTextSlides,
  } = useHomePage();

  if (screenWidth === null) return null;

  return (
    <Flex direction="column" width="100%" height="100%">
      <Position position="fixed" zIndex={5} top={0} left={0} right={0}>
        <Section transform="translateZ(0)" w="100%">
          <Position position="relative" zIndex={15}>
            <NotificationBar isMobile={isMobileScreen} onClose={() => setNotificationVisible(false)} />
          </Position>
          <Position position="fixed" top={0} left={0} right={0} zIndex={10}>
            <NavigationBar
              isMobile={isMobileScreen}
              scrolled={scrolled}
              translateY={notificationHeight}
              transition="transform 220ms cubic-bezier(.2,.9,.2,1)"
            />
          </Position>
        </Section>
      </Position>

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
          images={['/assets/banner1.png', '/assets/banner2.png', '/assets/banner3.png', '/assets/prod_1.png']}
        />
      </Section>
      <Section>
        <IconBoxSection isMobile={isMobileScreen} />
      </Section>
      <Section>
        <Footer isMobile={isMobileScreen} />
      </Section>
    </Flex>
  );
};

export const HomePage = () => {
  const [messageModal, setMessageModal] = useState<{ isOpen: boolean }>({ isOpen: false });

  const handleNewsletterSuccess = () => setMessageModal({ isOpen: true });
  const closeMessageModal = () => setMessageModal({ isOpen: false });

  return (
    <RouterProvider>
      <SliderProvider>
        <NewsletterProvider onSignupSuccess={handleNewsletterSuccess}>
          <Position position="relative">
            <MessageModal
              type="success"
              message="You have successfully subscribed!"
              isOpen={messageModal.isOpen}
              onClose={closeMessageModal}
              autoCloseDuration={5000}
            />
          </Position>
          <HomePageContent />
        </NewsletterProvider>
      </SliderProvider>
    </RouterProvider>
  );
};
