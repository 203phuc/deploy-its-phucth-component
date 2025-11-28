import { useState } from 'react';
import { passwordsMatch, validatePassword } from '../../../util/passwordUtils';

interface UsePasswordResetProps {
  onSubmit: (newPassword: string) => void;
  isMobile: boolean;
}

export const usePasswordReset = ({ onSubmit, isMobile }: UsePasswordResetProps) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const submitForm = () => {
    const passwordError = validatePassword(password);
    const confirmPasswordError = passwordsMatch(password, confirmPassword) ? '' : 'Passwords do not match';

    setErrors({ password: passwordError, confirmPassword: confirmPasswordError });

    if (!passwordError && !confirmPasswordError) {
      onSubmit(password);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitForm();
    }
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
