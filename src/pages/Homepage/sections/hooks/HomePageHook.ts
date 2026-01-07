import { useEffect, useState } from 'react';
import { useSliderData } from '../../../../context/SliderContext';
import { onSmallScreenChange } from '../../../../util/mediaQueries';

export const useHomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const { desktopSlides, mobileImageSlides, mobileTextSlides } = useSliderData();

  // Resize & initial screen width
  useEffect(() => {
    return onSmallScreenChange(setIsMobileScreen);
  }, []);

  const handleIndexChange = (index: number) => setCurrentIndex(index);

  return {
    currentIndex,
    setCurrentIndex,
    handleIndexChange,
    isMobileScreen,
    desktopSlides,
    mobileImageSlides,
    mobileTextSlides,
  };
};
