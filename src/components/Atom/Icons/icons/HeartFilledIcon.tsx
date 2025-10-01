import { IconProps } from './types';

export const HeartFilledIcon = ({ color = '#E25563', size = 20, className = '' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9.99999 18.35L8.79166 17.25C4.5 13.3 1.66666 10.6 1.66666 7.41667C1.66666 4.85 3.73333 2.91667 6.25 2.91667C7.7 2.91667 9.09166 3.65833 9.99999 4.74167C10.9083 3.65833 12.3 2.91667 13.75 2.91667C16.2667 2.91667 18.3333 4.85 18.3333 7.41667C18.3333 10.6 15.5 13.3 11.2083 17.25L9.99999 18.35Z"
      fill={color}
    />
  </svg>
);
