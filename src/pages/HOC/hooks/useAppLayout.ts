import { useSharedRouter } from '@context/RouterContext';
import { useEffect, useState } from 'react';

export const useAppLayout = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [notificationHeight, setNotificationHeight] = useState(0);
  const { path } = useSharedRouter();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      const notificationBarHeight = mobile ? 40 : 36;
      setNotificationHeight(notificationBarHeight);
      setIsMobile(mobile);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initial setup
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrolled]);

  return {
    isMobile,
    notificationHeight,
    scrolled,
    path,
  };
};
