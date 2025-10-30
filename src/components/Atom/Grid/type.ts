export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Sets the number of columns (repeat() shorthand) */
  width?: number | string;
  /** Sets the number of columns (repeat() shorthand) */
  height?: number | string;
  /** Sets the number of columns (repeat() shorthand) */
  columns?: number | string;
  /** Sets the number of rows or custom sizing */
  rows?: number | string;
  /** Gap between grid items (applies to both row & column) */
  gap?: number | string;
  /** Row gap only */
  rowGap?: number | string;
  /** Column gap only */
  columnGap?: number | string;
  /** Controls align-items */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /** Controls justify-items */
  justify?: 'start' | 'center' | 'end' | 'stretch' | 'space-between';
  /** Grid items to display */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Optional inline style overrides */
  style?: React.CSSProperties;
}
