import { useEffect, useState } from 'react';
import { onSmallScreenChange } from 'src/util/mediaQueries';

export const useAboutUsPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    return onSmallScreenChange(setIsMobile);
  }, []);

  return {
    isMobile,
  };
};
