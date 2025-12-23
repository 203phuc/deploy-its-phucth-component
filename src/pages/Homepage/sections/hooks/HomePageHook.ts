import { useEffect, useState } from 'react';
import { useSliderData } from '../../../../context/SliderContext';
import { onSmallScreenChange } from '../../../../util/mediaQueries';

export const useHomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [notificationVisible, setNotificationVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
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
    return onSmallScreenChange(setIsMobileScreen);
  }, []);

  const handleIndexChange = (index: number) => setCurrentIndex(index);

  // Compute notification bar height for nav offset
  let notificationHeight = 0;

  if (notificationVisible) {
    notificationHeight = isMobileScreen ? 36 : 40;
  }

  return {
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
