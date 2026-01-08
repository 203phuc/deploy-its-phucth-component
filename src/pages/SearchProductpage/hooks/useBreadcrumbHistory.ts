import { useState } from 'react';

interface BreadCrumbItem {
  label: string;
  href?: string;
}

export const useBreadcrumbHistory = (maxItems = 3) => {
  const [history] = useState<BreadCrumbItem[]>([{ label: 'Home', href: '/' }, { label: 'Search' }]);

  return history.slice(0, maxItems);
};

export type { BreadCrumbItem };
