import { Flex } from '@components/Atom/Flex';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Slider } from '@components/Molecule/Slider';
import { useIsMobile } from '@pages/CustomHook/breakpoint';
import { useScreenSize } from '@pages/CustomHook/getScreenSizeHook';
import { RouterProvider } from '@pages/CustomHook/navigateHook';
import { useEffect, useState } from 'react';
import { NewsletterProvider } from '../../context/NewsletterContext';
import { SliderProvider, useSliderData } from '../../context/SliderContext';
import { bannerItems } from './mockData/banners';
import { defaultProducts as homeProducts, link } from './mockData/products';
import { BannerGrid } from './sections/BannerGrid';
import { Branding } from './sections/Branding';
import { FeatureSection } from './sections/FeatureSection';
import { Footer } from './sections/Footer';
import { IconBoxSection } from './sections/IconBoxSection';
import { MessageModal } from './sections/MessageModal';
import { NavigationBar } from './sections/NavigationBar';
import { NewsletterSection } from './sections/NewsletterSection';
import { NotificationBar } from './sections/NotificationBar';
import ProductGrid from './sections/ProductGrid';
import TextImageSection from './sections/TextImageSection';

// Inner component that uses the slider context
const HomePageContent = () => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { desktopSlides, mobileImageSlides, mobileTextSlides } = useSliderData();
  const [notificationVisible, setNotificationVisible] = useState(true);
  const { width } = useScreenSize();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const mobile: boolean = useIsMobile(); // safe

  // Compute heights so we can push page content below the fixed navbar
  let notificationHeight = 0;
  if (notificationVisible && !scrolled) {
    if (width > 375) {
      notificationHeight = 40;
    } else {
      notificationHeight = 36;
    }
  }
  const navTranslate = notificationHeight;
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize(); // ✅ Set initial value after mount
    setIsMobileScreen(mobile);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobile]);

  if (screenWidth === null) {
    return null; // or loading skeleton while waiting for client
  }

  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Flex direction="column" width="100%" height="100%">
      <Position position="relative" zIndex={5}>
        <Section transform="translateZ(0)">
          <Position position="relative" zIndex={15}>
            <NotificationBar isMobile={isMobileScreen} onClose={() => setNotificationVisible(false)} />
          </Position>
          <Position position="fixed" top={0} left={0} right={0} zIndex={10}>
            <NavigationBar
              // setFlyoutCartOpen={setFlyoutCartOpen}
              // setFlyoutMenuOpen={setFlyoutMenuOpen}
              isMobile={isMobileScreen}
              scrolled={scrolled}
              translateY={navTranslate}
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
            '/src/assets/banner1.png',
            '/src/assets/banner2.png',
            '/src/assets/banner3.png',
            '/src/assets/prod_1.png',
          ]}
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

// Outer component that provides the slider context
export const HomePage = () => {
  const [messageModal, setMessageModal] = useState<{ isOpen: boolean }>({ isOpen: false });
  const handleNewsletterSuccess = () => {
    setMessageModal({ isOpen: true });
  };
  const closeMessageModal = () => {
    setMessageModal({ isOpen: false });
  };
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
