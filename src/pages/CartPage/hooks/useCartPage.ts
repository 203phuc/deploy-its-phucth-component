import { useEffect, useState } from 'react';
import { onSmallScreenChange } from '../../../util/mediaQueries';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
  color?: string;
}

export interface UseCartPageReturn {
  isMobile: boolean;
  cartItems: CartItem[];
  totalItems: number;
  totalPrice: number;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useCartPage = (): UseCartPageReturn => {
  const [isMobile, setIsMobile] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const unsubscribe = onSmallScreenChange((isSmall) => {
      setIsMobile(isSmall);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    // Load cart items from localStorage or use mock data
    const mockCartItems: CartItem[] = [
      {
        id: '1',
        name: 'Classic White Sneakers',
        price: 89.99,
        quantity: 1,
        image: 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766379463/hompage2_pfkexw.png',
        size: 'US 9',
        color: 'White',
      },
      {
        id: '2',
        name: 'Black Leather Jacket',
        price: 249.99,
        quantity: 2,
        image: 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766379463/hompage2_pfkexw.png',
        size: 'L',
        color: 'Black',
      },
    ];
    setCartItems(mockCartItems);
  }, []);

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;

    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return {
    isMobile,
    cartItems,
    totalItems,
    totalPrice,
    updateQuantity,
    removeItem,
    clearCart,
  };
};
