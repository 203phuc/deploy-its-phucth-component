import { ColumnType } from '@pages/HOC/hooks/type';
import { useEffect, useState } from 'react';
import { onSmallScreenChange } from '../../../../src/util/mediaQueries';

export const useBlogPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [columns, setColumns] = useState<ColumnType>('3column');

  useEffect(() => {
    const cleanup = onSmallScreenChange(setIsMobile);
    return cleanup;
  }, []);

  return {
    isMobile,
    columns,
    setColumns,
  };
};
