import { PaginationProps } from './types';

export const usePagination = ({
  currentPage,
  totalPages,
  maxVisiblePages = 6,
}: Omit<PaginationProps, 'onPageChange' | 'isMobile'>) => {
  const getVisiblePages = () => {
    const pages: number[] = [];

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than or equal to max visible pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first 3 pages
      for (let i = 1; i <= 3; i++) {
        pages.push(i);
      }

      // Always show dots when there are more pages than maxVisiblePages
      pages.push(-1); // -1 represents dots

      // Show current page if it's not in the first 3 or last 3
      if (currentPage > 3 && currentPage < totalPages - 2) {
        pages.push(currentPage);
        pages.push(-1); // -1 represents dots
      }

      // Always show last 3 pages
      for (let i = totalPages - 2; i <= totalPages; i++) {
        if (i > 3) {
          pages.push(i);
        }
      }
    }

    return pages;
  };

  return {
    visiblePages: getVisiblePages(),
  };
};
