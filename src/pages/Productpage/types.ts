export interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  author: string;
  date: string;
  avatar?: string;
}

export interface Question {
  id: string;
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  isNew?: boolean;
  isOnSale?: boolean;
  salePercentage?: number;
  rating: number;
  reviewCount: number;
  peopleViewing: number;
  colors: string[];
  sizes: string[];
  images: ProductImage[];
  specifications?: Record<string, string>;
  reviews: Review[];
  questions: Question[];
}
