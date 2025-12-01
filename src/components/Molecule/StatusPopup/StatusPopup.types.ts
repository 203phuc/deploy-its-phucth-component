import type { ReactNode } from 'react';

export type StatusType = 'success' | 'error';

export interface StatusPopupProps {
  /**
   * Controls whether the popup is open or closed
   */
  isOpen: boolean;

  /**
   * Callback function to handle popup close
   */
  onClose?: () => void;

  /**
   * Title text to display in the popup
   */
  title: string;

  /**
   * Message content to display in the popup
   */
  message: string | ReactNode;

  /**
   * Text to display on the action button
   */
  buttonLabel: string;

  /**
   * Status type (affects icon and colors)
   * @default 'success'
   */
  status: StatusType;

  /**
   * Callback function when the action button is clicked
   */
  onButtonClick?: () => void;
}

export interface CommonPopupProps extends Omit<StatusPopupProps, 'status' | 'onClose'> {
  /**
   * Callback function to handle popup close
   */
  onClose?: () => void;
}
