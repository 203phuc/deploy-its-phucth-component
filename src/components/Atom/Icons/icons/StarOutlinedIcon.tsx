import { IconProps } from './types';

export const StarOutlinedIcon = ({ color, size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.3245 17.6461L6.15254 20.8911L7.33154 14.0181L2.33154 9.15107L9.23154 8.15107L12.3175 1.89807L15.4035 8.15107L22.3035 9.15107L17.3035 14.0181L18.4825 20.8911L12.3245 17.6461Z"
      className={color}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
