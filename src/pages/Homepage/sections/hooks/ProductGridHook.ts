import { useState, useMemo } from 'react';
import { defaultProducts, productsByCategory } from '../../mockData/products';

export const useProductGrid = (links: { url: string; label: string }[] = []) => {
  const [selectedLink, setSelectedLink] = useState<string | null>(links?.[0]?.url || null);

  const displayProducts = useMemo(() => {
    if (!selectedLink) return defaultProducts;
    return productsByCategory[selectedLink as keyof typeof productsByCategory] || defaultProducts;
  }, [selectedLink]);

  const handleLinkClick = (url: string) => {
    setSelectedLink(url);
    globalThis.history.pushState({}, '', globalThis.location.pathname + '/' + url);
  };

  return { selectedLink, handleLinkClick, displayProducts };
};
