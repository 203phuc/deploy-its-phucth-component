import { useEffect, useState } from 'react';
import { onSmallScreenChange } from '../../../../../../src/util/mediaQueries';
import type { NotificationBarProps } from '../types';

export const useNotificationBar = (onClose?: NotificationBarProps['onClose']) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cleanup = onSmallScreenChange(setIsSmallScreen);
    return cleanup;
  }, []);

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  return {
    isSmallScreen,
    visible,
    handleClose,
  };
};
