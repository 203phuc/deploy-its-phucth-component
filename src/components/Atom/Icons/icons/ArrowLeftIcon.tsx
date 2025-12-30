interface Props {
  color?: string;
  size?: number;
  strokeWidth?: number;
}

export const ArrowLeftIcon = ({ color = '#121212', size = 24, strokeWidth = 1.5 }: Props) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19 12H5M5 12L11 6M5 12L11 18"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={color}
    />
  </svg>
);
