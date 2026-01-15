import { Flex } from '@components/Atom/Flex';
import { Overlay } from '@components/Atom/Overlay';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { NewsletterProvider } from '@context/NewsletterContext';
import { AboutUsPage } from '@pages/AboutUspage/AboutUsPage';
import { ContactPage } from '@pages/Contactpage/ContactPage';
import { RouterProvider, useSharedRouter } from '@pages/CustomHook/navigateHook';
import { HomePage } from '@pages/Homepage';
import { MyAccountPage } from '@pages/MyAccountPage/MyAccountPage';
import { NotFoundPage } from '@pages/NotFoundpage';
import { PolicyPage } from '@pages/PolicyPage/PolicyPage';
import { sampleProduct } from '@pages/Productpage/mockData/sampleProduct';
import { ProductPage } from '@pages/Productpage/ProductPage';
import { SearchPage } from '@pages/SearchProductpage';
import { ShopPage } from '@pages/Shoppage';
import { ReactNode, useEffect, useState } from 'react';
import { onSmallScreenChange } from '../../../../src/util/mediaQueries';
import { FlyoutCart } from './sections/FlyoutCart';
import { FlyoutMenu } from './sections/FlyoutMenu';
import { Footer } from './sections/Footer';
import { MessageModal } from './sections/MessageModal';
import { NavigationBar } from './sections/NavigationBar';
import { NotificationBar } from './sections/NotificationBar';

const routes: Record<string, ReactNode> = {
  '/home': <HomePage />,
  '/shop': <ShopPage />,
  '/about-us': <AboutUsPage />,
  '/product': <ProductPage product={sampleProduct} />,
  '/contact': <ContactPage />,
  '/search-product-page': <SearchPage />,
  '/my-account': <MyAccountPage />,
  '/policy/shopping': <PolicyPage policyType="shopping" />,
  '/policy/payment': <PolicyPage policyType="payment" />,
  '/policy/shipping': <PolicyPage policyType="shipping" />,
  '/policy/return': <PolicyPage policyType="return" />,
  '/policy/refunds': <PolicyPage policyType="refunds" />,
  '/policy/cookies': <PolicyPage policyType="cookies" />,
  '/policy/privacy': <PolicyPage policyType="privacy" />,
  '/policy/terms': <PolicyPage policyType="terms" />,
};

// --- App content (uses router) ---
function AppContent() {
  const [flyoutCartOpen, setFlyoutCartOpen] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { path } = useSharedRouter();
  const [notificationVisible, setNotificationVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [messageModal, setMessageModal] = useState<{ isOpen: boolean }>({ isOpen: false });
  const [FlyoutMenuOpen, setFlyoutMenuOpen] = useState(false);

  useEffect(() => {
    const cleanup = onSmallScreenChange(setIsSmallScreen);
    return cleanup;
  }, []);

  const handleNewsletterSuccess = () => {
    setMessageModal({ isOpen: true });
  };

  const closeMessageModal = () => {
    setMessageModal({ isOpen: false });
  };

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

  // Compute heights so we can push page content below the fixed navbar
  let notificationHeight = 0;
  if (notificationVisible) {
    notificationHeight = isSmallScreen ? 36 : 40;
  }

  return (
    <Position position="relative">
      <MessageModal
        type="success"
        message="You have successfully subscribed!"
        isOpen={messageModal.isOpen}
        onClose={closeMessageModal}
        autoCloseDuration={5000}
      />
      <Overlay isOpen={FlyoutMenuOpen} onClose={() => setFlyoutMenuOpen(false)} zIndex={100} position="left">
        <FlyoutMenu setFlyoutMenuOpen={setFlyoutMenuOpen} cartItem={2} />
      </Overlay>
      <Overlay isOpen={flyoutCartOpen} onClose={() => setFlyoutCartOpen(false)} zIndex={10} position="right">
        <FlyoutCart setFlyoutCartOpen={setFlyoutCartOpen} isMobile={isSmallScreen} />
      </Overlay>

      <Position position={scrolled ? 'fixed' : 'relative'} top={0} left={0} right={0} zIndex={5}>
        <NotificationBar onClose={() => setNotificationVisible(false)} />
      </Position>
      {/* Make the nav full width by anchoring left/right to 0. NavigationBar handles its inner padding. */}
      <Position
        position={scrolled || path === '/home' || path === '/about-us' ? 'fixed' : 'relative'}
        top={
          notificationHeight && (scrolled || path === '/home' || path.startsWith('/about-us'))
            ? notificationHeight
            : 0
        }
        left={0}
        right={0}
        zIndex={4}
      >
        <NavigationBar
          setFlyoutCartOpen={setFlyoutCartOpen}
          setFlyoutMenuOpen={setFlyoutMenuOpen}
          scrolled={scrolled}
          translateY={0}
          transition="transform 220ms cubic-bezier(.2,.9,.2,1)"
        />
      </Position>

      <Section>
        <Flex width="100%" align="center" justify="center">
          <NewsletterProvider onSignupSuccess={handleNewsletterSuccess}>
            {routes[path] ?? <NotFoundPage />}
          </NewsletterProvider>
        </Flex>
      </Section>
      <Footer />
    </Position>
  );
}

// --- Root wrapper (provides router) ---
export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
