import { useState } from 'react';

export interface BreadCrumbItem {
  label: string;
  href?: string;
}

export interface BreadCrumbProps {
  items: BreadCrumbItem[];
  gap?: number;
}

export const useBreadcrumbHistory = (maxItems = 3) => {
  const [history] = useState<BreadCrumbItem[]>([{ label: 'Home', href: '/' }, { label: 'Search' }]);

  return history.slice(0, maxItems);
};
