import { cn } from '../../../util/tailwindClass';
import { badgeCva } from './style';
import type { BadgeProps } from './type';

export const Badge = ({ size, color, roundness, variant, className, theme, ...props }: BadgeProps) => {
  const finalColor = variant === 'outline' ? 'none' : color;

  return (
    <span
      className={cn(badgeCva({ size, theme, color: finalColor, roundness, variant }), className)}
      {...props}
    />
  );
};
