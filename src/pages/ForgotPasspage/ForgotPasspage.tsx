import { Overlay } from '@components/Atom/Overlay';
import { Section } from '@components/Atom/Section';
import { useEffect, useState } from 'react';
import { EmailForm } from './components/EmailForm';
import { OtpVerification } from './components/OtpVerification';
import { useForgotPassForm } from './hooks/ForgotPassForm';
import { ForgotPassProps, useForgotPassLogic } from './hooks/ForgotPassHook';
import { useResendTimer } from './hooks/useResendTimer';

export const ForgotPassPage = ({ isOpen, onClose }: ForgotPassProps) => {
  const { mobile } = useForgotPassLogic({ isOpen, onClose });
  const { emailRef, errors, clearError, handleSubmit } = useForgotPassForm();
  const [showOTP, setShowOTP] = useState(false);
  const [contactInfo, setContactInfo] = useState('');
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '']);
  const { resendTimer, isResendDisabled, startResendTimer } = useResendTimer(30);
  useEffect(() => {
    console.log('contact info', contactInfo);
  }, [contactInfo]);
  // Wrapper function to handle the clearError type
  const handleClearError = (field: string) => {
    clearError(field as 'email');
  };

  const handleOtpChange = (otpValue: string) => {
    if (otpValue && !/^\d*$/.test(otpValue)) return;
    setOtp(otpValue.split(''));

    if (otpValue.length === 5) {
      handleOtpSubmit();
    }
  };

  const handleResendCode = () => {
    if (isResendDisabled) return;
    startResendTimer();
  };

  const handleOtpSubmit = () => {
    const code = otp.join('');
    return code;
  };

  if (!isOpen) return null;

  return (
    <Overlay isOpen={isOpen}>
      <Section w={mobile ? 343 : 652} bgColor="white" px={mobile ? 16 : 32} py={mobile ? 24 : 32}>
        {showOTP ? (
          <OtpVerification
            contactInfo={contactInfo}
            otp={otp}
            isResendDisabled={isResendDisabled}
            resendTimer={resendTimer}
            onOtpChange={handleOtpChange}
            onResendCode={handleResendCode}
            onOtpSubmit={handleOtpSubmit}
            onClose={onClose}
            isMobile={mobile}
          />
        ) : (
          <EmailForm
            emailRef={emailRef}
            handleSubmit={handleSubmit}
            errors={errors}
            clearError={handleClearError}
            onClose={onClose}
            isMobile={mobile}
            setContactInfo={setContactInfo}
            setShowOTP={setShowOTP}
          />
        )}
      </Section>
    </Overlay>
  );
};

export default ForgotPassPage;
