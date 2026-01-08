import { useCallback, useEffect, useState } from 'react';
import { onSmallScreenChange } from '../../../../../util/mediaQueries';
import { products } from '../../mockData/SampleProduct';
import type { Product } from '../types';

export const useCartItem = (
  product?: Product[],
  onQuantityChange?: (id: number, quantity: number) => void,
) => {
  const [items, setItems] = useState<Product[]>(product?.length ? [...product] : [...products]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const cleanup = onSmallScreenChange(setIsSmallScreen);
    return cleanup;
  }, []);

  const updateQuantity = useCallback(
    (id: number, newQuantity: number) => {
      if (newQuantity < 1) return;
      const updatedItems = items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item));
      setItems(updatedItems);
      if (onQuantityChange) {
        onQuantityChange(id, newQuantity);
      }
    },
    [items, onQuantityChange],
  );

  const handleQuantityChange = useCallback(
    (id: number, value: string) => {
      const numValue = parseInt(value, 10);
      if (!isNaN(numValue) && numValue > 0) {
        updateQuantity(id, numValue);
      } else if (value === '') {
        setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity: 0 } : item)));
      }
    },
    [updateQuantity],
  );

  return {
    items,
    isSmallScreen,
    updateQuantity,
    handleQuantityChange,
  };
};
