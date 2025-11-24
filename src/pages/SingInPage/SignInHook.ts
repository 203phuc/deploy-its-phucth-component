import { useIsMobile } from '@pages/CustomHook/breakpoint';
import { useEffect, useState } from 'react';

export interface SignInProps {
  isOpen: boolean;
}

export const useSignInLogic = ({ isOpen }: SignInProps) => {
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
