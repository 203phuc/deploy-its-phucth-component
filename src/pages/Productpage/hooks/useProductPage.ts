import { useEffect, useState } from 'react';
import { onSmallScreenChange } from '../../../../src/util/mediaQueries';

export const useProductPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    return onSmallScreenChange(setIsMobile);
  }, []);

  return {
    isMobile,
  };
};
