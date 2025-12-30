import { useState } from 'react';

export interface SelectProps {
  items?: string[];
  setOption?: React.Dispatch<React.SetStateAction<string[] | undefined>>;
}
export interface FilterSideBarProps {
  items?: string[];
  setOption?: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  setFilter?: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile?: boolean;
}

export const colors = [
  'var(--color-teal-500)',
  'var(--color-indigo-200)',
  'var(--color-red-500)',
  'var(--color-black-900)',
];
export const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
export const useSelect = ({ setOption }: SelectProps) => {
  const [selected, setSelected] = useState<string | null>(null);
  const handleSelect = (category: string) => {
    setSelected(category);
    setOption?.([category]);
  };

  return { handleSelect, selected };
};
