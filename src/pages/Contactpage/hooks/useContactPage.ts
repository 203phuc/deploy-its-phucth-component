import { useCallback, useEffect, useState } from 'react';
import { onSmallScreenChange } from 'src/util/mediaQueries';

export const useContactPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    return onSmallScreenChange(setIsMobile);
  }, []);

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields');
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Contact form submitted:', {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    });

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    alert('Message sent successfully! We will get back to you soon.');
  }, [formData]);

  return {
    isMobile,
    formData,
    handleInputChange,
    handleSubmit,
  };
};
