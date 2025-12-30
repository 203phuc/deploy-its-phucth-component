import { IconProps } from './types';

export const ChevronUpIcon = ({ color = 'currentColor', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 15L12 9L18 15"
      stroke="currentColor"
      className={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
