export interface PositionProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: 'absolute' | 'relative' | 'fixed' | 'sticky';
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  zIndex?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
