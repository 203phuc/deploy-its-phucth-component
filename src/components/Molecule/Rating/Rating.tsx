import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons';
import { Position } from '@components/Atom/Position';
import { useEffect, useState } from 'react';
import { RatingProps } from './type';

export const Rating = ({ size, noFillColor, rating = 0, onRatingChange, ...props }: RatingProps) => {
  const [hover, setHover] = useState(0);
  const [selected, setSelected] = useState<number>(rating);

  useEffect(() => setSelected(rating), [rating]);

  const handleRatingClick = (newRating: number) => {
    setSelected(newRating);
    onRatingChange?.(newRating as 0 | 1 | 2 | 3 | 4 | 5);
  };
  return (
    <Position position="relative">
      <Flex onMouseLeave={() => setHover(0)} {...props} style={{ cursor: 'pointer' }} gap={2}>
        {Array.from({ length: 5 }).map((_, i) => {
          const index = i + 1;
          // priority: hover > selected
          const filled = hover >= index || selected >= index;

          return (
            <Icons
              iconSize={size}
              key={index}
              box
              color={noFillColor}
              iconName={filled ? 'StarFilledIcon' : 'StarRateIcon'}
              onMouseEnter={() => setHover(index)}
              onClick={() => handleRatingClick(index)}
            />
          );
        })}
      </Flex>
    </Position>
  );
};

export default Rating;
