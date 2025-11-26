import { useRef, useState } from 'react';
import { isValidEmail } from 'src/util/emailValidation';

export const useSignUpForm = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [errors, setErrors] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const REQUIRED_MSG = 'Password is required';
    const name = nameRef.current?.value ?? '';
    const username = usernameRef.current?.value ?? '';
    const email = emailRef.current?.value ?? '';
    const password = passwordRef.current?.value ?? '';

    const newErrors = { name: '', username: '', email: '', password: '' };
    let hasError = false;

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      hasError = true;
    }
    if (!username.trim()) {
      newErrors.username = 'Username is required';
      hasError = true;
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      hasError = true;
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Email is invalid';
      hasError = true;
    }
    if (!password.trim()) {
      newErrors.password = REQUIRED_MSG;
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      console.log('Form submitted successfully', { name, username, email, password });
      // clear form
      nameRef.current!.value = '';
      usernameRef.current!.value = '';
      emailRef.current!.value = '';
      passwordRef.current!.value = '';
    }
  };

  const clearError = (field: keyof typeof errors) => {
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  return {
    nameRef,
    usernameRef,
    emailRef,
    passwordRef,
    errors,
    handleSubmit,
    clearError,
  };
};
