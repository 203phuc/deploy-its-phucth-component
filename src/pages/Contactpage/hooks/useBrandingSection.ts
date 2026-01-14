import { useCallback, useState } from 'react';

export interface LocationData {
  heading: string;
  text: string;
}

export const useBrandingSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = useCallback((id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  }, []);

  return {
    openItems,
    toggleItem,
  };
};
