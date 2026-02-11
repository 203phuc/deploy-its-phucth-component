import { useEffect, useState } from 'react';
import { onSmallScreenChange } from 'src/util/mediaQueries';

export interface SignInProps {
  isOpen: boolean;
  onSwitchToSignup?: () => void;
  onSwitchToForgotPassword?: () => void;
}

export const useSignInLogic = ({ isOpen }: SignInProps) => {
  const [open, setOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    return onSmallScreenChange(setIsMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setOpen(isOpen);
    }
  }, [isOpen]);

  return { mobile: isMobile, open, setOpen, showPassword, setShowPassword };
};
