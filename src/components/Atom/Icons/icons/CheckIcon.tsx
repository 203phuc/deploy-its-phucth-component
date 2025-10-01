interface Props {
  color?: string;
  size?: number;
  strokeWidth?: number;
}

export const CheckIcon = ({ color = '#121212', size = 24, strokeWidth = 1.5 }: Props) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.94824 12L9.94824 17L19.9482 7"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
