interface Props {
  color?: string;
  size?: number;
  strokeWidth?: number;
}

export const ArrowDownIcon = ({ color = '#121212', size = 24, strokeWidth = 1.5 }: Props) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 19V5M12 19L6 13M12 19L18 13"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={color}
    />
  </svg>
);
