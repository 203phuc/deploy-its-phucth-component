interface IconProps {
  size?: number | string;
  color?: string;
}

export const PlusIcon = ({ size = 16, color = '#121212' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.75 1C8.75 0.585786 8.41421 0.25 8 0.25C7.58579 0.25 7.25 0.585786 7.25 1V7.25H1C0.585786 7.25 0.25 7.58579 0.25 8C0.25 8.41421 0.585786 8.75 1 8.75H7.25V15C7.25 15.4142 7.58579 15.75 8 15.75C8.41421 15.75 8.75 15.4142 8.75 15V8.75H15C15.4142 8.75 15.75 8.41421 15.75 8C15.75 7.58579 15.4142 7.25 15 7.25H8.75V1Z"
      fill={color}
    />
  </svg>
);
export const ArrowIcon = ({ size = 17, color = '#121212' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.947998 6L5.948 11L15.948 1"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const LineIcon = ({ size = 18, color = '#121212' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.895996 1H16.896"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M0.895996 9H16.896"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
