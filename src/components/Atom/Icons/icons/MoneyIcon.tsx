import { IconProps } from './types';

export const MoneyIcon = ({ size = 24, color = 'currentColor' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25.3333 11.8613H12C10.5272 11.8613 9.33331 13.0552 9.33331 14.528V22.528C9.33331 24.0008 10.5272 25.1947 12 25.1947H25.3333C26.8061 25.1947 28 24.0008 28 22.528V14.528C28 13.0552 26.8061 11.8613 25.3333 11.8613Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.6667 21.1947C20.1394 21.1947 21.3333 20.0008 21.3333 18.528C21.3333 17.0552 20.1394 15.8613 18.6667 15.8613C17.1939 15.8613 16 17.0552 16 18.528C16 20.0008 17.1939 21.1947 18.6667 21.1947Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.6667 11.8612V9.1945C22.6667 8.48725 22.3857 7.80898 21.8856 7.30888C21.3855 6.80878 20.7072 6.52783 20 6.52783H6.66667C5.95942 6.52783 5.28115 6.80878 4.78105 7.30888C4.28095 7.80898 4 8.48725 4 9.1945V17.1945C4 17.9017 4.28095 18.58 4.78105 19.0801C5.28115 19.5802 5.95942 19.8612 6.66667 19.8612H9.33333"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
