// hooks/useDropDownHover.ts
import { useSharedRouter } from '@pages/CustomHook/navigateHook';
import { useRef, useState } from 'react';
import { DropDownHoverProps } from '../types';

const HIDE_DELAY_MS = 200; // delay before closing dropdown

export const useDropDownHover = (navLinks: DropDownHoverProps['navLinks']) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<{
    id: string | null;
    value?: string | number | null;
  }>({ id: null, value: undefined });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { path, navigate } = useSharedRouter();

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setHoveredId(null), HIDE_DELAY_MS);
  };

  const handleSelect = (dropdownId: string, value: string | number) => {
    setSelectedState({ id: dropdownId, value });
    setHoveredId(null);
  };

  return {
    hoveredId,
    selectedState,
    path,
    navigate,
    handleMouseEnter,
    handleMouseLeave,
    handleSelect,
    setHoveredId,
    navLinks,
  };
};
