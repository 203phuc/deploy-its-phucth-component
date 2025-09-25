import { HTMLAttributes } from 'react';
import { OverlayCvaProps } from './style';

// Extract the variant types from OverlayCvaProps
type OverlayVariants = Pick<OverlayCvaProps, 'isOpen'>;

export interface OverlayProps
  extends Omit<HTMLAttributes<HTMLDialogElement>, 'onClick' | 'className'>,
    OverlayVariants {
  /**
   * Whether to render the overlay in a portal
   * @default true
   */
  usePortal?: boolean;
  /**
   * Additional class name for the overlay
   */
  className?: string;
  /**
   * Z-index level for the overlay (1-10)
   * @default 5
   */
  zIndex?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}
