interface Props {
  color?: string;
  size?: number;
}

export const ChevronLeftIcon = ({ color = 'currentColor', size = 24 }: Props) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 6L9 12L15 18"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
