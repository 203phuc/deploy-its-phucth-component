// useDropDownHover.ts
import { useRef, useState } from 'react';
import { useSharedRouter } from '@pages/CustomHook/navigateHook';

export const useDropDownHover = () => {
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
    timeoutRef.current = setTimeout(() => {
      setHoveredId(null);
    }, 200);
  };

  const handleSelect = (dropdownId: string, value: string | number, path?: string) => {
    setSelectedState({ id: dropdownId, value });
    setHoveredId(null);
    if (path) navigate(path);
  };

  const isActivePath = (itemPath?: string) => path === itemPath;

  return {
    path,
    hoveredId,
    selectedState,
    handleMouseEnter,
    handleMouseLeave,
    handleSelect,
    isActivePath,
    navigate,
  };
};
