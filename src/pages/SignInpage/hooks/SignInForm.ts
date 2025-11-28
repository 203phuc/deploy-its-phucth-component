import { useRef, useState } from 'react';
import { isValidEmail } from 'src/util/emailValidation';

export const useSignInForm = () => {
  const emailOrUsernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const REQUIRED_MSG = 'Password is required';
  const [errors, setErrors] = useState({
    emailOrUsername: '',
    password: '',
  });

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const emailOrUsername = emailOrUsernameRef.current?.value ?? '';
    const password = passwordRef.current?.value ?? '';

    const newErrors = { emailOrUsername: '', password: '' };
    let hasError = false;

    if (!emailOrUsername.trim()) {
      newErrors.emailOrUsername = 'Username or email is required';
      hasError = true;
    } else if (emailOrUsername.includes('@') && !isValidEmail(emailOrUsername)) {
      newErrors.emailOrUsername = 'Email is invalid';
      hasError = true;
    }

    if (!password.trim()) {
      newErrors.password = REQUIRED_MSG;
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      // clear form
      emailOrUsernameRef.current!.value = '';
      passwordRef.current!.value = '';
    }
  };

  const clearError = (field: keyof typeof errors) => {
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  return {
    emailOrUsernameRef,
    passwordRef,
    errors,
    handleSubmit,
    clearError,
  };
};
