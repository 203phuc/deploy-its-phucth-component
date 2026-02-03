import { useEffect, useState } from 'react';
import { onSmallScreenChange } from 'src/util/mediaQueries';

export const useCheckoutPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    return onSmallScreenChange(setIsMobile);
  }, []);

  return {
    isMobile,
  };
};
