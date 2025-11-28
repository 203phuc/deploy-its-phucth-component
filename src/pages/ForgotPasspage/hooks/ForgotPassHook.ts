import { useEffect, useState } from 'react';

export interface ForgotPassProps {
  isOpen: boolean;
  onClose: () => void;
}

export const useForgotPassLogic = ({ isOpen }: ForgotPassProps) => {
  const [open, setOpen] = useState(isOpen);
  const [mobile, setMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    open,
    setOpen,
    mobile,
  };
};
