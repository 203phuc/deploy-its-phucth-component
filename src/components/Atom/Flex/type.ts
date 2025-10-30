export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  /** set the height of flex box */
  height?: string | number;
  /** Sets the width of flex box */
  width?: string | number;
  /** Sets the flex direction */
  direction?: 'row' | 'column';
  /** Controls justify-content */
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  /** Controls align-items */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  /** Controls flex wrapping */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /** Adds spacing between flex items */
  gap?: number | string;
  /** Shortcut for flex property on the container */
  flex?: string | number;
  /** Content inside the flex container */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Optional inline style overrides */
  style?: React.CSSProperties;
}
