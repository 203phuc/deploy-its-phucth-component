import { useRef, useState } from 'react';
import { useNewsletter } from '../../../../context/NewsletterContext';

export const useNewsletterSection = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { onSignupSuccess } = useNewsletter();
  const [error, setError] = useState<string>('');

  const isValidEmail = (email: string): boolean =>
    email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.');

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const email = inputRef.current?.value ?? '';

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Email is incorrect');
      return;
    }

    setError('');
    onSignupSuccess();

    if (inputRef.current) inputRef.current.value = '';
  };

  const clearError = () => error && setError('');

  return {
    inputRef,
    error,
    handleSubmit,
    clearError,
    setError,
  };
};
