export interface BreadCrumbItem {
  id: string;
  label: string;
  path?: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadCrumbProps {
  items: BreadCrumbItem[];
  separator?: React.ReactNode;
  gap?: number | string;
  maxItems?: number;
  showHomeItem?: boolean;
}
