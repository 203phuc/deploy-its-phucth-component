import { HTMLAttributes } from 'react';
import { type OverlayCvaProps } from './style';

// Extract the variant types from OverlayCvaProps

export interface OverlayProps
  extends Omit<HTMLAttributes<HTMLDialogElement>, 'onClick' | 'className'>,
    OverlayCvaProps {
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
  zIndex?: number;
}
