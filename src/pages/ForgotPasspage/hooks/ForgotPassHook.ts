import { useEffect, useState } from 'react';
import { useForgotPassForm } from '../hooks/ForgotPassForm';
import { useResendTimer } from '../hooks/useResendTimer';

export interface ForgotPassPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export const useForgotPassPage = () => {
  // Mobile detection
  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Form logic
  const { emailRef, errors, clearError, handleSubmit } = useForgotPassForm();
  const [currentStep, setCurrentStep] = useState<'email' | 'otp' | 'reset'>('email');
  const [errorOTP, setErrorOTP] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);

  const { resendTimer, isResendDisabled, startResendTimer } = useResendTimer(30);

  useEffect(() => {
    console.log('contact info', contactInfo);
  }, [contactInfo]);

  const handleClearError = (field: string) => clearError(field as 'email');
  const handleEmailSubmit = () => setCurrentStep('otp');

  const handleOtpChange = (otpValue: string) => {
    if (otpValue && !/^\d*$/.test(otpValue)) return;
    setOtp(otpValue.split(''));
  };

  const handleResendCode = () => {
    if (isResendDisabled) return;
    startResendTimer();
    setCurrentStep('otp');
  };

  const handleOtpSubmit = () => {
    const code = otp.join('');
    if (code.length === 6) {
      setCurrentStep('reset');
      setErrorOTP('');
    } else {
      setErrorOTP('Verification failed! Please click on "Resend code"');
    }
    return code;
  };

  const handlePasswordReset = async (newPassword: string) => {
    console.log('New password:', newPassword);
    const timeTest = 1000;
    await new Promise((resolve) => setTimeout(resolve, timeTest)); // waits 1 second
  };

  return {
    mobile,
    emailRef,
    errors,
    handleClearError,
    handleSubmit,
    currentStep,
    contactInfo,
    setContactInfo,
    otp,
    handleOtpChange,
    handleResendCode,
    resendTimer,
    isResendDisabled,
    handleOtpSubmit,
    errorOTP,
    handleEmailSubmit,
    handlePasswordReset,
  };
};
