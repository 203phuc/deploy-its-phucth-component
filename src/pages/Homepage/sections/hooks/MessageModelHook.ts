// hooks/useMessageModal.ts
import { useEffect, useState } from 'react';
import { onSmallScreenChange } from 'src/util/mediaQueries';
import { MessageModalProps } from '../types';

export const useMessageModal = ({
  isOpen,
  onClose,
  autoCloseDuration = 5000,
}: Pick<MessageModalProps, 'isOpen' | 'onClose' | 'autoCloseDuration'>) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen size changes
  useEffect(() => {
    return onSmallScreenChange(setIsMobile);
  }, []);

  // Track visibility and auto-close
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

  return { isVisible, isMobile, handleClose };
};
