import { useState } from 'react';
import { passwordsMatch, validatePassword } from '../functions/passwordUtils';

export interface PasswordResetProps {
  onClose?: () => void;
  isMobile: boolean;
  onSubmit: (newPassword: string) => Promise<string>; // <-- returns a promise
}

export const usePasswordReset = ({ onSubmit, isMobile }: PasswordResetProps) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  // Precompute mobile vs desktop values
  const mb = isMobile ? 15 : 32;
  const mainGap = isMobile ? 16 : 24;
  const headerGap = isMobile ? 8 : 16;
  const inputSize = isMobile ? 'large' : 'xlarge';
  const textSize = isMobile ? 'small' : 'medium';
  const buttonSize = isMobile ? 'medium' : 'large';
  const headingSize = isMobile ? 'hSpecial' : 'h4';
  const iconSize = isMobile ? 32 : 40;
  const formGap = 16;
  const buttonFlexGap = 12;
  const buttonDirection = isMobile ? 'column' : 'row';

  const clearFieldError = (field: 'password' | 'confirmPassword') => {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const submitForm = async (): Promise<void> => {
    const passwordError = validatePassword(password);
    const confirmPasswordError = passwordsMatch(password, confirmPassword) ? '' : 'Passwords do not match';

    setErrors({
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });

    if (!passwordError && !confirmPasswordError) {
      try {
        await onSubmit(password);
        setIsSuccessOpen(true);
      } catch (error) {
        setErrors((prev) => ({
          ...prev,
          form: error ?? 'Failed to reset password. Please try again.',
        }));
      }
    }
  };

  // React form handler — returns void, but internally awaits submitForm
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    void submitForm(); // run async but return void immediately
  };

  // React keydown handler — returns void, but internally awaits submitForm
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      e.preventDefault();
      void submitForm(); // run async but return void immediately
    }
  };
  const handleButtonClick = (onClose?: () => void) => {
    setIsSuccessOpen(false);
    onClose?.();
    // Note: Navigation should be handled in the component
    // as it's a routing concern
  };

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    errors,
    clearFieldError,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    handleSubmit,
    handleKeyDown,
    isSuccessOpen,
    setIsSuccessOpen,
    handleButtonClick,
    // expose precomputed layout values
    mb,
    mainGap,
    headerGap,
    inputSize,
    textSize,
    buttonSize,
    headingSize,
    iconSize,
    formGap,
    buttonFlexGap,
    buttonDirection,
  };
};
