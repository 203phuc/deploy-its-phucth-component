import { useRef, useState } from 'react';
import { isValidEmail } from 'src/util/emailValidation';

export interface FormErrors {
  email: string;
  [key: string]: string; // Index signature
}

interface UseForgotPassFormReturn {
  emailRef: React.RefObject<HTMLInputElement | null>;
  errors: FormErrors;
  handleSubmit: (e?: React.FormEvent) => FormErrors | null;
  clearError: (field: keyof FormErrors) => void;
  handleClose: (onClose?: () => void) => () => void;
}

export const useForgotPassForm = (): UseForgotPassFormReturn => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [errors, setErrors] = useState<FormErrors>({
    email: '',
  });

  const clearError = (field: keyof FormErrors) => {
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = (e?: React.FormEvent): FormErrors | null => {
    if (e) e.preventDefault();

    const email = emailRef.current?.value ?? '';
    const newErrors: FormErrors = { email: '' };
    let hasError = false;

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      hasError = true;
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
      hasError = true;
    }

    setErrors(newErrors);
    return hasError ? newErrors : null;
  };

  const handleClose = (onClose?: () => void) => (): void => {
    // Clear any existing errors when closing
    setErrors({ email: '' });
    // Call the provided onClose callback if it exists
    onClose?.();
  };

  return {
    emailRef,
    errors,
    handleSubmit,
    clearError,
    handleClose,
  };
};
