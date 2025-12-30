import { useEffect, useState } from 'react';
import { createIdGenerator } from 'src/util/uniqueId';
import { useSharedRouter } from '../../../context/RouterContext'; // Updated import path

export interface BreadCrumbItem {
  id: string;
  label: string;
  path: string;
}

export const useBreadcrumbHistory = (maxItems = 3) => {
  const { path } = useSharedRouter();
  const [history, setHistory] = useState<BreadCrumbItem[]>([]);
  const genId = createIdGenerator('breadcrumb');
  useEffect(() => {
    const pathParts = path.split('/').filter(Boolean);
    const currentPage = pathParts[pathParts.length - 1] || 'home';

    setHistory((prev) => {
      // Don't add the same page multiple times
      if (prev.length > 0 && prev[prev.length - 1].path === path) {
        return prev;
      }

      const DASH_REGEX = /-/g;

      const newItem = {
        id: genId(),
        label: currentPage.charAt(0).toUpperCase() + currentPage.slice(1).replace(DASH_REGEX, ' '),
        path: path,
      };
      // Keep only the last N items
      return [...prev, newItem].slice(-maxItems);
    });
  }, [path, maxItems, genId]);

  return history;
};
