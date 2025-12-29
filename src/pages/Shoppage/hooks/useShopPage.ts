import { useEffect, useState } from 'react';
import { useHomePage } from '../..//Homepage/sections/hooks/HomePageHook';
import { onSmallScreenChange } from 'src/util/mediaQueries';
import { ColumnType } from '@pages/HOC/hooks/type';

export const useShopPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [columns, setColumns] = useState<ColumnType>('5column');
  const [filter, setFilter] = useState(false);

  const { notificationHeight, scrolled } = useHomePage();

  useEffect(() => {
    return onSmallScreenChange(setIsMobile);
  }, []); // ✅ run once

  return {
    isMobile,
    setIsMobile,
    columns,
    setColumns,
    filter,
    setFilter,
    notificationHeight,
    scrolled,
  };
};
