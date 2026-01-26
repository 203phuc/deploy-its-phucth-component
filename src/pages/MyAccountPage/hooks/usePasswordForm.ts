import type { InputChangeEvent } from '@components/Atom/Input/type';
import { useState } from 'react';

export interface PasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export const usePasswordForm = () => {
  const [passwordData, setPasswordData] = useState<PasswordFormData>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handlePasswordChange = (field: keyof PasswordFormData, event: InputChangeEvent) => {
    setPasswordData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const resetPasswordForm = () => {
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  return {
    passwordData,
    handlePasswordChange,
    resetPasswordForm,
  };
};
