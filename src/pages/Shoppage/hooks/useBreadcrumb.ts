export interface BreadCrumbItem {
  id: string;
  label: string;
  path: string;
  onClick?: () => void;
}

export interface BreadCrumbProps {
  items: BreadCrumbItem[];
  separator?: React.ReactNode;
  gap?: number;
}
export const useBreadcrumb = ({ items }: BreadCrumbProps) => {
  const handleClick = (item: BreadCrumbItem, index: number, e: React.MouseEvent) => {
    if (item.onClick) {
      item.onClick();
    } else if (index < items.length - 1) {
      e.preventDefault();
      window.history.pushState({}, '', item.path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };
  return handleClick;
};
