import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import Icons from '@components/Atom/Icons';
import { Input } from '@components/Atom/Input';
import { Overlay } from '@components/Atom/Overlay';
import { Radio } from '@components/Atom/Radio';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useSignUpLogic } from '@pages/SignUppage/hooks/SignUpHook';
import { useSignUpForm } from './hooks/SignUpForm';
import { SignUpProps } from './type';

export const SignUpPage = ({ isOpen, onSwitchToLogin }: SignUpProps) => {
  const { open, setOpen, showPassword, setShowPassword, mobile } = useSignUpLogic({ isOpen });
  const { nameRef, usernameRef, emailRef, passwordRef, errors, handleSubmit, clearError } = useSignUpForm();

  const renderForm = (gap: number, placeholderSize: 'small' | 'medium', inputSize: 'large' | 'xlarge') => (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={gap}>
        <Input
          ref={nameRef}
          placeholder="Your name*"
          variant="line"
          size={inputSize}
          placeholderSize={placeholderSize}
          textSize={placeholderSize}
          error={errors.name}
          onChange={() => clearError('name')}
        />
        <Input
          ref={usernameRef}
          placeholder="Username*"
          variant="line"
          size={inputSize}
          placeholderSize={placeholderSize}
          textSize={placeholderSize}
          error={errors.username}
          onChange={() => clearError('username')}
        />
        <Input
          ref={emailRef}
          placeholder="Email address*"
          variant="line"
          size={inputSize}
          placeholderSize={placeholderSize}
          textSize={placeholderSize}
          error={errors.email}
          onChange={() => clearError('email')}
        />
        <Input
          ref={passwordRef}
          placeholder="Password*"
          variant="line"
          size={inputSize}
          placeholderSize={placeholderSize}
          textSize={placeholderSize}
          error={errors.password}
          type={showPassword ? 'text' : 'password'}
          iconEnd={
            <Icons
              box
              onClick={() => setShowPassword((prev) => !prev)}
              iconSize={24}
              iconName={showPassword ? 'ViewIcon' : 'EyeCloseIcon'}
            />
          }
          onChange={() => clearError('password')}
        />
        <Flex width="100%">
          <Flex height={26} gap={12} align="center">
            <Radio size="sm" shape="rounded" />
            <Text size="xsmall">
              I agree with{' '}
              <Button variant="text">
                <Text size="xsmall" font="inter" color="black-900" weight="semiBold">
                  Privacy Policy
                </Text>
              </Button>
              &nbsp;and&nbsp;
              <Button variant="text">
                <Text size="xsmall" font="inter" color="black-900" weight="semiBold">
                  Terms of Use
                </Text>
              </Button>
            </Text>
          </Flex>
        </Flex>
        <Button roundness="round" size={mobile ? 'small' : 'large'} type="submit">
          Sign up
        </Button>
      </Flex>
    </form>
  );

  return (
    <Overlay isOpen={open}>
      <Section w={mobile ? 343 : 652} bgColor="white" px={mobile ? 16 : 32} py={mobile ? 24 : 32}>
        <Flex direction="column" gap={mobile ? 24 : 32}>
          <Flex width="100%" direction="column" gap={mobile ? 12 : 24}>
            <Flex justify="space-between" align="center" width="100%">
              <Heading
                color="black-900"
                size={mobile ? 'hSpecial' : 'h4'}
                font="spaceGrotesk"
                weight="moderate"
              >
                Sign up
              </Heading>
              <Icons iconName="CloseIcon" box onClick={() => setOpen(false)} iconSize={mobile ? 32 : 40} />
            </Flex>
            <Text color="black-900" size={mobile ? 'small' : 'medium'} weight="regular">
              Already have an account?{' '}
              <Button variant="text" onClick={onSwitchToLogin}>
                <Text color="black-900" size={mobile ? 'small' : 'medium'} weight="semiBold">
                  Sign in
                </Text>
              </Button>
            </Text>
          </Flex>
          {renderForm(mobile ? 24 : 32, mobile ? 'small' : 'medium', mobile ? 'large' : 'xlarge')}
        </Flex>
      </Section>
    </Overlay>
  );
};
