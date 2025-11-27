import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import Icons from '@components/Atom/Icons';
import { Input } from '@components/Atom/Input';
import { Overlay } from '@components/Atom/Overlay';
import { Radio } from '@components/Atom/Radio';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useSignInForm } from './hooks/SignInForm';
import { SignInProps, useSignInLogic } from './hooks/SignInHook';

export const SignInPage = ({ isOpen }: SignInProps) => {
  const { open, setOpen, showPassword, setShowPassword, mobile } = useSignInLogic({ isOpen });
  const { emailOrUsernameRef, passwordRef, errors, handleSubmit, clearError } = useSignInForm();

  const renderFormInputs = () => (
    <Flex direction="column" gap={24} width={mobile ? 311 : '100%'}>
      <Input
        ref={emailOrUsernameRef}
        variant="line"
        placeholder="Your username or email*"
        size={mobile ? 'large' : 'xlarge'}
        placeholderSize={mobile ? 'small' : 'medium'}
        textSize={mobile ? 'small' : 'medium'}
        required
        error={errors.emailOrUsername}
        onChange={() => clearError('emailOrUsername')}
      />
      <Input
        ref={passwordRef}
        variant="line"
        placeholder="Password*"
        size={mobile ? 'large' : 'xlarge'}
        placeholderSize={mobile ? 'small' : 'medium'}
        textSize={mobile ? 'small' : 'medium'}
        required
        type={showPassword ? 'text' : 'password'}
        error={errors.password}
        onChange={() => clearError('password')}
        iconEnd={
          <Icons
            box
            onClick={() => setShowPassword((prev) => !prev)}
            iconSize={24}
            iconName={showPassword ? 'ViewIcon' : 'EyeCloseIcon'}
          />
        }
      />
      <Flex width="100%" justify="space-between">
        <Flex width={140} height={26} gap={mobile ? 8 : 12} align="center">
          <Radio size="sm" shape="rounded" />
          <Text size={mobile ? 'small' : 'medium'} color="black-900">
            Remember me
          </Text>
        </Flex>
        <Button onClick={() => console.log('Forgot Password clicked')} variant="text">
          <Text size={mobile ? 'small' : 'medium'} font="inter" color="black-900" weight="semiBold">
            Forgot Password?
          </Text>
        </Button>
      </Flex>
    </Flex>
  );

  return (
    <Overlay isOpen={open}>
      <Section w={mobile ? 343 : 652} bgColor="white" px={mobile ? 16 : 32} py={mobile ? 24 : 32}>
        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap={mobile ? 24 : 32}>
            {/* Header */}
            <Flex width="100%" direction="column" gap={mobile ? 12 : 24}>
              <Flex justify="space-between" align="center" width="100%">
                <Heading
                  color="black-900"
                  size={mobile ? 'hSpecial' : 'h4'}
                  font="spaceGrotesk"
                  weight="moderate"
                >
                  Sign in
                </Heading>
                <Icons iconName="CloseIcon" box onClick={() => setOpen(false)} iconSize={mobile ? 32 : 40} />
              </Flex>
              <Text color="black-900" size={mobile ? 'small' : 'medium'} weight="regular">
                Don’t have an account yet?
                <Button variant="text">
                  <Text color="black-900" size={mobile ? 'small' : 'medium'} weight="semiBold">
                    Sign up
                  </Text>
                </Button>
              </Text>
            </Flex>

            {/* Form Inputs */}
            {renderFormInputs()}

            {/* Submit */}
            <Button roundness="round" size={mobile ? 'small' : 'large'} type="submit">
              Sign in
            </Button>
          </Flex>
        </form>
      </Section>
    </Overlay>
  );
};
