interface Props {
  color?: string;
  size?: 'large' | 'medium';
  width?: number;
  height?: number;
}

export const ArrowDownIcon = ({ color = '#121212', size = 'large', width, height }: Props) => {
  // predefined map
  const dimensions = {
    large: { width: 160, height: 80 },
    medium: { width: 140, height: 70 },
  };

  // fallback to predefined if custom not provided
  const { width: defaultWidth, height: defaultHeight } = dimensions[size];

  const finalWidth = width ?? defaultWidth;
  const finalHeight = height ?? defaultHeight;

  return (
    <svg
      width={finalWidth}
      height={finalHeight}
      viewBox="0 0 140 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.2391 20.824C31.5069 27.4299 26.0108 35.6218 25.9556 41.7449C25.9342 44.0487 26.6837 46.06 28.4815 47.5834C31.0689 49.7774 33.9196 50.551 36.7564 50.5555C40.902 50.5612 45.0185 48.92 48.2417 47.6545C53.6699 45.5243 113.674 19.9542 113.674 19.9542C114.253 19.6695 114.144 19.3149 113.42 19.4919C113.127 19.5637 48.0961 36.8577 48.0961 36.8577C46.8643 37.1995 45.5914 37.3783 44.3113 37.3894C39.3136 37.4184 34.8664 34.6961 34.9023 28.9595C34.9162 26.7149 35.6165 24.008 37.2391 20.824Z"
        fill={color}
      />
    </svg>
  );
};
