import { useCallback, useState } from 'react';
import { BreadCrumbItem, BreadCrumbProps } from './types';

export const useBreadcrumb = ({ items, maxItems = 5, showHomeItem = true }: BreadCrumbProps) => {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadCrumbItem[]>(() => {
    const initialItems = [...items];
    if (showHomeItem && !items.some((item) => item.id === 'home')) {
      initialItems.unshift({ id: 'home', label: 'Home', path: '/' });
    }
    return maxItems ? initialItems.slice(-maxItems) : initialItems;
  });

  const handleClick = useCallback((item: BreadCrumbItem, e: React.MouseEvent) => {
    if (item.onClick) {
      item.onClick();
    } else if (item.path) {
      e.preventDefault();
      window.history.pushState({}, '', item.path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    } else if (item.href) {
      window.location.href = item.href;
    }
  }, []);

  const updateBreadcrumbs = useCallback(
    (newItems: BreadCrumbItem[]) => {
      setBreadcrumbs((prev) => {
        const updated = [...prev, ...newItems];
        return maxItems ? updated.slice(-maxItems) : updated;
      });
    },
    [maxItems],
  );

  return {
    breadcrumbs,
    handleClick,
    updateBreadcrumbs,
  };
};
