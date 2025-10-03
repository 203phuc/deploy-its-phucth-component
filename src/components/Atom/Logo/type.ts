import * as logos from './logos';
import type { LogoCvaProps } from './style';

export type LogoName = keyof typeof logos;

export interface LogoProps extends Partial<LogoCvaProps>, React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether to wrap the icon in a box
   */
  readonly color?: 'black' | 'white' | 'grey';
  /**
   * whether for size to change
   */
  readonly size?: 'large' | 'medium';
  /**
   * Change specific unit of size width
   */
  readonly width?: number;
  /**
   * Change specific unit of size height
   */
  readonly height?: number;
  /**
   * Selecting logo
   */
  readonly logoName: LogoName;
  /**
   * class custom
   */
  readonly className?: string;
}
