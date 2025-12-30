// useColorSwatch.ts
import { useState } from 'react';

export interface ColorSwatchProps {
  colors: string[];
}
export const useColorSwatch = (initialColors: string[] = []) => {
  const [selectedColors, setSelectedColors] = useState<string[]>(initialColors);

  const toggleColor = (color: string) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]));
  };

  return { selectedColors, toggleColor };
};
