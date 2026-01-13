import { useCallback, useState } from 'react';

export const useTabState = () => {
  const [activeTab, setActiveTab] = useState<'description' | 'additional-info' | 'reviews' | 'questions'>(
    'description',
  );
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());

  const handleTabClick = useCallback((id: typeof activeTab) => {
    setActiveTab(id);
  }, []);

  const handleDropdownToggle = useCallback((tabId: string) => {
    setOpenDropdowns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(tabId)) {
        newSet.delete(tabId);
      } else {
        newSet.add(tabId);
      }
      return newSet;
    });
  }, []);

  return {
    activeTab,
    openDropdowns,
    handleTabClick,
    handleDropdownToggle,
  };
};
