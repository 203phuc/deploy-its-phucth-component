import { useCallback, useState } from 'react';
import { type NotificationBarProps } from '../types';
export const useNotificationBar = ({ onClose, isMobile }: NotificationBarProps) => {
  const [visible, setVisible] = useState(true);

  const handleClose = useCallback(() => {
    setVisible(false);
    onClose?.();
  }, [onClose]);

  const width = isMobile ? 375 : 1440;
  const height = isMobile ? 36 : 40;
  const gap = isMobile ? 51 : 581;
  const iconSize = isMobile ? 18 : 20;

  return { visible, handleClose, width, height, gap, iconSize };
};
