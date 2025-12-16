import { IconProps } from './types';

export const FacebookIcon = ({ color = 'currentColor', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.58398 9.948V13.948H9.58398V20.948H13.584V13.948H16.584L17.584 9.948H13.584V7.948C13.584 7.68278 13.6893 7.42843 13.8769 7.24089C14.0644 7.05336 14.3188 6.948 14.584 6.948H17.584V2.948H14.584C13.2579 2.948 11.9861 3.47478 11.0485 4.41246C10.1108 5.35015 9.58398 6.62192 9.58398 7.948V9.948H6.58398Z"
      stroke="currentColor"
      className={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
