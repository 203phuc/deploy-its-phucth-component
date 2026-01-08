import { useEffect, useState } from 'react';
import { onSmallScreenChange } from '../../../../../../src/util/mediaQueries';

export const useFooter = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [lang, setLang] = useState<string | number>('English');
  const [currency, setCurrency] = useState<string | number>('USD');

  useEffect(() => {
    const cleanup = onSmallScreenChange(setIsSmallScreen);
    return cleanup;
  }, []);

  return {
    isSmallScreen,
    lang,
    setLang,
    currency,
    setCurrency,
  };
};
