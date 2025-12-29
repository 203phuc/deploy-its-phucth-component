// useSizeSwatch.ts
import { useState } from 'react';

export interface SizeSwatchProps {
  sizes: string[];
}

export const useSizeSwatch = (initialSizes: string[] = []) => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>(initialSizes);

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]));
  };

  return { selectedSizes, toggleSize };
};
