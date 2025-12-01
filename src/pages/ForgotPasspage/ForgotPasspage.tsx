import { Overlay } from '@components/Atom/Overlay';
import { Section } from '@components/Atom/Section';
import { EmailForm } from './components/EmailForm';
import { OtpVerification } from './components/OtpVerification';
import { PasswordReset } from './components/PasswordReset';
import { useForgotPassPage, UseForgotPassPageProps } from './hooks/ForgotPassHook';

export const ForgotPassPage = ({ isOpen, onClose }: UseForgotPassPageProps) => {
  const {
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
  } = useForgotPassPage();

  if (!isOpen) return null;

  const stepsMap = {
    email: (
      <EmailForm
        emailRef={emailRef}
        handleSubmit={handleSubmit}
        errors={errors}
        clearError={handleClearError}
        onClose={onClose}
        isMobile={mobile}
        setContactInfo={setContactInfo}
        setShowOTP={handleEmailSubmit}
      />
    ),
    otp: (
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
        error={errorOTP}
      />
    ),
    reset: <PasswordReset onClose={onClose} isMobile={mobile} onSubmit={handlePasswordReset} />,
  };

  return (
    <Overlay isOpen={isOpen}>
      <Section w={mobile ? 343 : 652} bgColor="white" px={mobile ? 16 : 32} py={mobile ? 24 : 32}>
        {stepsMap[currentStep]}
      </Section>
    </Overlay>
  );
};

export default ForgotPassPage;
