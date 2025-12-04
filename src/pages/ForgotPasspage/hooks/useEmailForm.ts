export interface EmailFormProps {
  emailRef: React.RefObject<HTMLInputElement | null>;
  errors: Record<string, string>;
  clearError: (field: string) => void;
  handleSubmit: (e?: React.FormEvent) => Record<string, string> | null;
  onClose: () => void;
  isMobile: boolean;
  setContactInfo: React.Dispatch<React.SetStateAction<string>>;
  setShowOTP: (show: boolean) => void;
}

export const useEmailForm = ({
  emailRef,
  errors,
  clearError,
  handleSubmit,
  onClose,
  isMobile,
  setContactInfo,
  setShowOTP,
}: EmailFormProps) => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = handleSubmit(e);
    const email = emailRef.current?.value ?? '';
    if (!newErrors?.email && email) {
      setContactInfo(email);
      setShowOTP(true);
    }
  };

  return {
    handleFormSubmit,
    onClose,
    isMobile,
    errors,
    clearError,
    emailRef,
  };
};
