import { useState } from 'react';
import { Product } from '../types';

interface UseProductCarouselProps {
  products: Product[];
  isMobile?: boolean;
}

export interface UseProductCarouselReturn {
  currentSlide: number;
  totalSlides: number;
  productsPerSlide: number;
  handlePrevious: () => void;
  handleNext: () => void;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}

export const useProductCarousel = ({
  products,
  isMobile = false,
}: UseProductCarouselProps): UseProductCarouselReturn => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const productsPerSlide = isMobile ? 2 : 4;
  const totalSlides = Math.ceil(products.length / productsPerSlide);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return {
    currentSlide,
    totalSlides,
    productsPerSlide,
    handlePrevious,
    handleNext,
    setCurrentSlide,
  };
};
