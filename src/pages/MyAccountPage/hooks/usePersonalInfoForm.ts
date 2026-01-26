import type { InputChangeEvent } from '@components/Atom/Input/type';
import { useState } from 'react';

export interface PersonalInfoFormData {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
}

export const usePersonalInfoForm = () => {
  const [formData, setFormData] = useState<PersonalInfoFormData>({
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
  });

  const handleInputChange = (field: keyof PersonalInfoFormData, event: InputChangeEvent) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      displayName: '',
      email: '',
    });
  };

  return {
    formData,
    handleInputChange,
    resetForm,
  };
};
