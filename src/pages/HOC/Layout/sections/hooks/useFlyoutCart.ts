// useFlyoutCart.ts
import { useEffect, useState } from 'react';
import { onSmallScreenChange } from '../../../../../../src/util/mediaQueries';
import { products } from '../../mockData/SampleProduct';
import type { Product } from '../types';

export const useFlyoutCart = () => {
  const [cartItems, setCartItems] = useState<Product[]>(products);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const cleanup = onSmallScreenChange(setIsSmallScreen);
    return cleanup;
  }, []);

  const handleQuantityChange = (id: number, quantity: number) => {
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return {
    cartItems,
    isSmallScreen,
    subtotal,
    handleQuantityChange,
  };
};
