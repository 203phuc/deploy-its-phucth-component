import { Flex } from '@components/Atom/Flex';
import { Overlay } from '@components/Atom/Overlay';
import { Position } from '@components/Atom/Position';
import { useScreenSize } from '@pages/CustomHook/getScreenSizeHook';
import { RouterProvider, useSharedRouter } from '@pages/CustomHook/navigateHook';
import { HomePage } from '@pages/Homepage/HomePage';
import { ProductPage } from '@pages/Product/ProductPage';
import { ReactNode, useEffect, useState } from 'react';
import { NewsletterProvider } from '../../context/NewsletterContext';
import { FlyoutCart } from './sections/FlyoutCart';
import { FlyoutMenu } from './sections/FlyoutMenu';
import { Footer } from './sections/Footer';
import { MessageModal } from './sections/MessageModal';
import { NavigationBar } from './sections/NavigationBar';
import { NotificationBar } from './sections/NotificationBar';

const routes: Record<string, ReactNode> = {
  '/home': <HomePage />,
  '/product': <ProductPage />,
  '/contact': <h1>Contact Page</h1>,
};

// --- App content (uses router) ---
function AppContent() {
  const [flyoutCartOpen, setFlyoutCartOpen] = useState<boolean>(false);
  const { width } = useScreenSize();
  const { path } = useSharedRouter();
  const [notificationVisible, setNotificationVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [messageModal, setMessageModal] = useState<{ isOpen: boolean }>({ isOpen: false });
  const [FlyoutMenuOpen, setFlyoutMenuOpen] = useState(false);

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
  if (notificationVisible && !scrolled) {
    if (width > 375) {
      notificationHeight = 40;
    } else {
      notificationHeight = 36;
    }
  }

  const navTranslate = notificationHeight;

  return (
    <Position position="relative">
      <MessageModal
        type="success"
        message="You have successfully subscribed!"
        isOpen={messageModal.isOpen}
        onClose={closeMessageModal}
        autoCloseDuration={5000}
      />
      <Overlay isOpen={FlyoutMenuOpen} onClose={() => setFlyoutMenuOpen(false)} zIndex={1000} position="left">
        <FlyoutMenu setFlyoutMenuOpen={setFlyoutMenuOpen} cartItem={2} />
      </Overlay>
      <Overlay
        isOpen={flyoutCartOpen}
        onClose={() => setFlyoutCartOpen(false)}
        zIndex={1000}
        position="right"
      >
        <FlyoutCart setFlyoutCartOpen={setFlyoutCartOpen} />
      </Overlay>
      <Position position="relative" zIndex={5}>
        <NotificationBar onClose={() => setNotificationVisible(false)} />
      </Position>
      {/* Make the nav full width by anchoring left/right to 0. NavigationBar handles its inner padding. */}
      <Position position="fixed" top={0} left={0} right={0} zIndex={4}>
        <NavigationBar
          setFlyoutCartOpen={setFlyoutCartOpen}
          setFlyoutMenuOpen={setFlyoutMenuOpen}
          scrolled={scrolled}
          translateY={navTranslate}
          transition="transform 220ms cubic-bezier(.2,.9,.2,1)"
        />
      </Position>

      <Flex width="100%">
        <NewsletterProvider onSignupSuccess={handleNewsletterSuccess}>
          {routes[path] ?? <h1>404 - Not Found</h1>}
        </NewsletterProvider>
      </Flex>
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
