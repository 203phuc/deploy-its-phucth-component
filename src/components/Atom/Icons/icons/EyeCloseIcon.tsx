import { IconProps } from './types';

export const EyeCloseIcon = ({ color = '#2C2C2C', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 6C10.1366 12.8239 14.6849 12.5075 22 6"
      stroke="currentColor"
      className={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.33314 9.00066L2.55204 13.0605"
      stroke="currentColor"
      className={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      y1="-0.75"
      x2="4.99336"
      y2="-0.75"
      transform="matrix(-0.161094 0.986939 -0.984191 -0.177111 9.4834 11)"
      stroke="currentColor"
      className={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M14.3795 10.999L15.3386 16.0162"
      stroke="currentColor"
      className={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M18.6738 8.99609L20.9769 13.3761"
      stroke="currentColor"
      className={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
