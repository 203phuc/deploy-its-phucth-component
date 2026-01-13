type noFillColor = 'black-400' | 'black';

export interface RatingProps {
  size?: 20 | 16;
  noFillColor?: noFillColor;
  rating?: 0 | 1 | 2 | 3 | 4 | 5;
  onRatingChange?: (rating: 0 | 1 | 2 | 3 | 4 | 5) => void;
}
