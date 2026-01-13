import { useState } from 'react';

export const useProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return {
    quantity,
    setQuantity,
    updateQuantity,
  };
};
