import { useMemo } from 'react';

export interface OtpVerificationProps {
  contactInfo: string;
  isResendDisabled: boolean;
  resendTimer: number;
  onOtpChange: (otpValue: string) => void;
  onResendCode: () => void;
  onOtpSubmit: () => void;
  onClose: () => void;
  isMobile: boolean;
  error?: string;
}

export const useOtpVerification = (props: OtpVerificationProps) => {
  const { error, isMobile } = props;

  // Calculate margin based on error state and mobile view
  const marginBottom = useMemo(() => {
    if (error) {
      return isMobile ? 15 : 29;
    }
    return 51;
  }, [error, isMobile]);

  // Split error message for mobile view
  const errorParts = useMemo(() => error?.split('!'), [error]);

  return {
    ...props,
    marginBottom,
    errorParts,
  };
};
