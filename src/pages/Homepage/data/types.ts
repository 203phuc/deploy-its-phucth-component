export interface ProductItem {
  id: number;
  name: string;
  prices: number;
  imageUrl?: string;
  currency?: string;
  isNew?: boolean;
  salePrice?: number;
  salePercentage?: number;
}

export interface LinkItem {
  label: string;
  url: string;
}

export interface ProductGridProps {
  products?: ProductItem[];
  links?: LinkItem[]; // use the defined LinkItem interface instead of object[]
}
