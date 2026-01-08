import { useEffect, useState } from 'react';
import type { MessageModalProps } from '../types';

export const useMessageModal = ({
  type,
  isOpen,
  onClose,
  autoCloseDuration = 5000,
}: Pick<MessageModalProps, 'type' | 'isOpen' | 'onClose' | 'autoCloseDuration'>) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [isMobile, setIsMobile] = useState<boolean>(() => window.innerWidth <= 400);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 400);
    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    setIsVisible(isOpen);

    if (isOpen && autoCloseDuration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, autoCloseDuration);

      return () => clearTimeout(timer);
    }
  }, [isOpen, autoCloseDuration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  const isSuccess = type === 'success';

  return {
    // state
    isVisible,
    isMobile,

    // derived
    isSuccess,
    bgColor: 'var(--color-black-200)',
    borderColor: isSuccess ? '1px solid var(--color-black-900)' : '1px solid var(--color-red-500)',
    textColor: 'black-900',
    iconName: isSuccess ? 'CheckIcon' : 'CloseIcon',
    iconColor: 'black',
    boxColor: isSuccess ? 'green' : 'red',

    positionProps: isMobile
      ? { position: 'fixed' as const, top: 0, left: 0, right: 0, zIndex: 9999 }
      : { position: 'fixed' as const, top: 20, right: 20, zIndex: 9999 },

    outerWidth: isMobile ? '100%' : 450,
    outerHeight: isMobile ? undefined : 70,
    innerWidth: isMobile ? '100%' : 330,
    innerPx: isMobile ? 12 : 5,

    // handlers
    handleClose,
  };
};
