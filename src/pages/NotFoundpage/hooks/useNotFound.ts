import { useEffect, useState } from 'react';
import { onSmallScreenChange } from 'src/util/mediaQueries';

export const useNotFound = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    return onSmallScreenChange(setIsMobile);
  }, []); // ✅ run once

  return {
    isMobile,
  };
};
