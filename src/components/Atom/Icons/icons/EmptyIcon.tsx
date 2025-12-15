import { type IconProps } from './types';

export const EmptyIcon = ({ size = 24 }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="12.0062"
        cy="12.0063"
        r="9.00472"
        stroke="#121212"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
