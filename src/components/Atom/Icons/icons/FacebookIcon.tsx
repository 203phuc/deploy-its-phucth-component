import { IconProps } from './types';

export const FacebookIcon = ({ color = 'currentColor', size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.93817 7.46143V10.4614H7.18817V15.7114H10.1882V10.4614H12.4382L13.1882 7.46143H10.1882V5.96143C10.1882 5.76251 10.2672 5.57175 10.4078 5.4311C10.5485 5.29044 10.7393 5.21143 10.9382 5.21143H13.1882V2.21143H10.9382C9.94361 2.21143 8.98978 2.60651 8.28652 3.30978C7.58326 4.01304 7.18817 4.96686 7.18817 5.96143V7.46143H4.93817Z"
      stroke={color}
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
