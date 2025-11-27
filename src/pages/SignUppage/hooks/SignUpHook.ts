import { useIsMobile } from '@pages/CustomHook/breakpoint';
import { useEffect, useState } from 'react';

export interface SignUpProps {
  isOpen: boolean;
}

export const useSignUpLogic = ({ isOpen }: SignUpProps) => {
  const [open, setOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const mobile = useIsMobile();

  useEffect(() => {
    if (isOpen) {
      setOpen(isOpen);
    }
  }, [isOpen]);

  return { mobile, open, setOpen, showPassword, setShowPassword };
};
