import { IconProps } from './types';

export const ListIcon = ({ color = '#121212', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.75 13C20.1642 13 20.5 13.3358 20.5 13.75C20.5 14.1642 20.1642 14.5 19.75 14.5H3.75C3.33579 14.5 3 14.1642 3 13.75C3 13.3358 3.33579 13 3.75 13H19.75ZM19.75 9C20.1642 9 20.5 9.33579 20.5 9.75C20.5 10.1642 20.1642 10.5 19.75 10.5H3.75C3.33579 10.5 3 10.1642 3 9.75C3 9.33579 3.33579 9 3.75 9H19.75Z"
      fill={color}
    />
  </svg>
);
