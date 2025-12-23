import { IconProps } from './types';

export const HamburgerMenuIcon = ({ color = '#121212', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.2207 8.66675H21.554"
      stroke="#121212"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={color}
    />
    <path
      d="M4.2207 17.3333H21.554"
      stroke="#121212"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={color}
    />
  </svg>
);
