import { useRef, useState } from 'react';
import { isValidEmail } from 'src/util/emailValidation';

export const useForgotPassForm = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [errors, setErrors] = useState({
    email: '',
  });

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const email = emailRef.current?.value ?? '';
    const newErrors = { email: '' };
    let hasError = false;

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      hasError = true;
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
      hasError = true;
    }
    console.log('newErrors in forgot:', newErrors); // ✅ log immediately
    setErrors(newErrors);
    return hasError ? newErrors : null; // return errors if any, else null
  };

  const clearError = (field: keyof typeof errors) => {
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  return {
    emailRef,
    errors,
    handleSubmit,
    clearError,
  };
};
