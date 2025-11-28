import { useEffect, useState } from 'react';

export const useResendTimer = (initialTime = 30) => {
  const [resendTimer, setResendTimer] = useState(initialTime);
  const [isResendDisabled, setIsResendDisabled] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isResendDisabled && resendTimer > 0) {
      timer = setTimeout(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setIsResendDisabled(false);
      setResendTimer(initialTime);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [resendTimer, isResendDisabled, initialTime]);

  const startResendTimer = () => {
    setIsResendDisabled(true);
    setResendTimer(initialTime);
  };

  return {
    resendTimer,
    isResendDisabled,
    startResendTimer,
  };
};
