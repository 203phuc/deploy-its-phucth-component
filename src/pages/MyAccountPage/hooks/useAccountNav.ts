import { useState } from 'react';

export const useAccountNav = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleMouseEnter = (itemId: string) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return {
    hoveredItem,
    handleMouseEnter,
    handleMouseLeave,
  };
};
