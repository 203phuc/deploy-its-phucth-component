// useFlyoutMenu.ts
import { useEffect, useState } from 'react';
import { onSmallScreenChange } from '../../../../../../src/util/mediaQueries';

export const useFlyoutMenu = () => {
  const [currency, setCurrency] = useState<string | number>('USD');
  const [lang, setLang] = useState<string | number>('English');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const cleanup = onSmallScreenChange(setIsSmallScreen);
    return cleanup;
  }, []);

  return {
    currency,
    lang,
    isSmallScreen,
    setCurrency,
    setLang,
  };
};
