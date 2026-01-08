import { ColumnType } from '@pages/HOC/hooks/type';
import { useEffect, useState } from 'react';
import { onSmallScreenChange } from 'src/util/mediaQueries';
import { useSharedRouter } from '../../CustomHook/navigateHook';
import { useHomePage } from '../../Homepage/sections/hooks/HomePageHook';

export const useSearchPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [columns, setColumns] = useState<ColumnType>('5column');
  const [filter, setFilter] = useState(false);
  const { query } = useSharedRouter();
  const initialQuery = query.q || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const { notificationHeight, scrolled } = useHomePage();

  useEffect(() => {
    return onSmallScreenChange(setIsMobile);
  }, []); // ✅ run once

  // Sync search query with URL query parameter
  useEffect(() => {
    if (query.q) {
      setSearchQuery(query.q);
    }
  }, [query.q]);

  return {
    isMobile,
    setIsMobile,
    columns,
    setColumns,
    filter,
    setFilter,
    notificationHeight,
    scrolled,
    searchQuery,
    setSearchQuery,
  };
};
