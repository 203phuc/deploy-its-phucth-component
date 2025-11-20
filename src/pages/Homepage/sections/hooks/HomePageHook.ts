import { useIsMobile } from '@pages/CustomHook/breakpoint';
import { useScreenSize } from '@pages/CustomHook/getScreenSizeHook';
import { useEffect, useState } from 'react';
import { useSliderData } from '../../../../context/SliderContext';

export const useHomePage = () => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [notificationVisible, setNotificationVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const { width } = useScreenSize();
  const mobile: boolean = useIsMobile(); // safe
  const { desktopSlides, mobileImageSlides, mobileTextSlides } = useSliderData();

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Resize & initial screen width
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    setIsMobileScreen(mobile);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobile]);

  const handleIndexChange = (index: number) => setCurrentIndex(index);

  // Compute notification bar height for nav offset
  let notificationHeight = 0;

  if (notificationVisible && !scrolled) {
    notificationHeight = width && width > 375 ? 40 : 36;
  }

  return {
    screenWidth,
    currentIndex,
    setCurrentIndex,
    handleIndexChange,
    notificationVisible,
    setNotificationVisible,
    scrolled,
    isMobileScreen,
    notificationHeight,
    desktopSlides,
    mobileImageSlides,
    mobileTextSlides,
  };
};
