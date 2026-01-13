import { useSharedRouter } from '@context/RouterContext';
import { useEffect, useMemo, useState } from 'react';
import { onSmallScreenChange } from '../../../../../util/mediaQueries';

export const useNavigationBar = (translateY: number) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { path } = useSharedRouter();

  useEffect(() => {
    const cleanup = onSmallScreenChange(setIsSmallScreen);
    return cleanup;
  }, []);

  const transparentPages = useMemo(() => ['/home', '/about-us', '/contact'], []);

  const isTransparent = transparentPages.includes(path);
  const transformValue = `translateY(${translateY}px)`;

  return {
    isSmallScreen,
    path,
    transparentPages,
    isTransparent,
    transformValue,
  };
};
