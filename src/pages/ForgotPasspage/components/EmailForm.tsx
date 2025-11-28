import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import Icons from '@components/Atom/Icons';
import { Input } from '@components/Atom/Input';
import { Text } from '@components/Atom/Text';
import { useEffect } from 'react';

interface EmailFormProps {
  emailRef: React.RefObject<HTMLInputElement | null>;
  errors: Record<string, string>;
  clearError: (field: string) => void;
  handleSubmit: (e?: React.FormEvent) => Record<string, string> | null;
  onClose: () => void;
  isMobile: boolean;
  setContactInfo: React.Dispatch<React.SetStateAction<string>>;
  setShowOTP: (show: boolean) => void;
}

export const EmailForm = ({
  emailRef,
  errors,
  clearError,
  handleSubmit,
  onClose,
  isMobile,
  setContactInfo,
  setShowOTP,
}: EmailFormProps) => {
  useEffect(() => {
    console.log(errors);
  }, [errors, clearError]);
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = handleSubmit(e);
    const email = emailRef.current?.value ?? '';
    console.log(emailRef.current?.value);
    if (!newErrors?.email && email) {
      setContactInfo(email);
      setShowOTP(true);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Flex direction="column" gap={isMobile ? 24 : 32}>
        <Flex width="100%" direction="column" gap={isMobile ? 12 : 24}>
          <Flex justify="space-between" align="center" width="100%">
            <Heading
              color="black-900"
              size={isMobile ? 'hSpecial' : 'h4'}
              font="spaceGrotesk"
              weight="moderate"
            >
              Forgot Password ?
            </Heading>
            <Icons iconName="CloseIcon" box onClick={onClose} iconSize={isMobile ? 32 : 40} />
          </Flex>

          <Text color="black-900" size={isMobile ? 'small' : 'medium'} weight="regular">
            Already have an account?{' '}
            <Button variant="text" onClick={onClose}>
              <Text color="black-900" size={isMobile ? 'small' : 'medium'} weight="semiBold">
                Sign in
              </Text>
            </Button>
          </Text>
        </Flex>

        <Flex direction="column" gap={24} width={isMobile ? 311 : '100%'}>
          <Input
            ref={emailRef}
            variant="line"
            placeholder="Email / Phone number*"
            placeholderColor="gray"
            size={isMobile ? 'large' : 'xlarge'}
            placeholderSize={isMobile ? 'small' : 'medium'}
            textSize={isMobile ? 'small' : 'medium'}
            required
            error={errors.email}
            onChange={() => clearError('email')}
          />
        </Flex>

        <Button roundness="round" size={isMobile ? 'small' : 'large'} type="submit" fullWidth>
          Continue
        </Button>
      </Flex>
    </form>
  );
};
