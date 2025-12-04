import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import Icons from '@components/Atom/Icons';
import { Input } from '@components/Atom/Input';
import { Text } from '@components/Atom/Text';
import { EmailFormProps, useEmailForm } from '../hooks/useEmailForm';

export const EmailForm = (props: EmailFormProps) => {
  const { handleFormSubmit, isMobile, errors, clearError, emailRef, onClose } = useEmailForm(props);

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
