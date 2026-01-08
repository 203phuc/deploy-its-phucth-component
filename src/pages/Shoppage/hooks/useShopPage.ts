import { ColumnType } from '@pages/HOC/hooks/type';
import { useEffect, useState } from 'react';
import { onSmallScreenChange } from 'src/util/mediaQueries';

export const useShopPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [columns, setColumns] = useState<ColumnType>('5column');
  const [filter, setFilter] = useState(false);

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
  };
};
