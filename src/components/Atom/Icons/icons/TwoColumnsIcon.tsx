import { IconProps } from './types';

export const TwoColumnsIcon = ({ color = 'currentColor', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.75 3C10.1642 3 10.5 3.33579 10.5 3.75V19.75C10.5 20.1642 10.1642 20.5 9.75 20.5C9.33579 20.5 9 20.1642 9 19.75V3.75C9 3.33579 9.33579 3 9.75 3ZM13.75 3C14.1642 3 14.5 3.33579 14.5 3.75V19.75C14.5 20.1642 14.1642 20.5 13.75 20.5C13.3358 20.5 13 20.1642 13 19.75V3.75C13 3.33579 13.3358 3 13.75 3Z"
      className={color}
      fill="currentColor"
    />
  </svg>
);
