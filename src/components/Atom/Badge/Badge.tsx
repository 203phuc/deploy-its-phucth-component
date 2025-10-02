import { cn } from '../../../util/tailwindClass';
import { badgeCva } from './style';
import type { BadgeProps } from './type';

export const Badge = ({ size, color = 'none', roundness, variant, className, ...props }: BadgeProps) => {
  return <span className={cn(badgeCva({ size, color, roundness, variant }), className)} {...props} />;
};
