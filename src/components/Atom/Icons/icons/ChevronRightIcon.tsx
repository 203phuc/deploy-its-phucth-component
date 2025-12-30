import { IconProps } from './types';

export const ChevronRightIcon = ({ color = 'currentColor', size = 24, strokeWidth = 1.5 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 6L15 12L9 18"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={color}
    />
  </svg>
);
