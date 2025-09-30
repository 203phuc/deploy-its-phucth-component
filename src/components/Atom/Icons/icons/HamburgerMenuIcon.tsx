import { IconProps } from './types';

export const HamburgerMenuIcon = ({ color = '#121212', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.896 8H19.896" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M3.896 16H19.896"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
