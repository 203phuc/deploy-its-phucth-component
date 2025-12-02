import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import { Icons } from '@components/Atom/Icons';
import { Input } from '@components/Atom/Input';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { SuccessPopup } from '@components/Molecule/StatusPopup/StatusPopup';
import { PasswordResetProps, usePasswordReset } from '../hooks/PasswordResetHooks';

export const PasswordReset = ({ onClose, isMobile, onSubmit }: PasswordResetProps) => {
  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    errors,
    clearFieldError,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    handleSubmit,
    handleKeyDown,
    isSuccessOpen,
    setIsSuccessOpen,
  } = usePasswordReset({ onSubmit, isMobile });

  const renderDesktopUI = () => (
    <Flex direction="column">
      <Section>
        <Flex direction="column" gap={31}>
          <Flex direction="column" gap={23}>
            <Flex justify="space-between" align="center" gap={16}>
              <Heading color="black-900" size="h4">
                Password Reset
              </Heading>
              <Icons iconName="CloseIcon" box onClick={onClose} iconSize={40} />
            </Flex>
            <Text size="special1" color="blue-700">
              Your identity has been verified. Please enter a new password!
            </Text>
          </Flex>
          <form onSubmit={handleSubmit}>
            <Flex direction="column" gap={31}>
              <Input
                size="xlarge"
                type={showPassword ? 'text' : 'password'}
                placeholder="New Password*"
                value={password}
                variant="line"
                required
                textSize="medium"
                onChange={(e) => {
                  setPassword(e.target.value);
                  clearFieldError('password');
                }}
                onKeyDown={() => handleKeyDown}
                error={errors.password}
                iconEnd={
                  <Icons
                    iconName={showPassword ? 'ViewIcon' : 'EyeCloseIcon'}
                    box
                    onClick={() => setShowPassword(!showPassword)}
                    iconSize={24}
                  />
                }
              />

              <Flex direction="column" gap={13.08}>
                <Input
                  size="xlarge"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm Password*"
                  value={confirmPassword}
                  textSize="medium"
                  variant="line"
                  required
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    clearFieldError('confirmPassword');
                  }}
                  onKeyDown={handleKeyDown}
                  error={errors.confirmPassword}
                  iconEnd={
                    <Icons
                      iconName={showConfirmPassword ? 'ViewIcon' : 'EyeCloseIcon'}
                      box
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      iconSize={24}
                    />
                  }
                />

                <Text color="black-900" size="small">
                  Password must be 8-128 characters long and contain at least one uppercase letter, one
                  lowercase letter, one number, and one special character.
                </Text>
              </Flex>

              <Flex gap={12} direction="row">
                <Button type="submit" roundness="round" variant="solid" size="large" fullWidth>
                  Submit
                </Button>
              </Flex>
            </Flex>
          </form>
        </Flex>
      </Section>
    </Flex>
  );

  const renderMobileUI = () => (
    <Flex direction="column">
      <Section>
        <Flex direction="column" gap={16}>
          <Flex direction="column" gap={8}>
            <Flex justify="space-between" align="center" gap={8}>
              <Heading color="black-900" size="hSpecial">
                Password Reset
              </Heading>
              <Icons iconName="CloseIcon" box onClick={onClose} iconSize={32} />
            </Flex>
            <Text size="small" color="blue-700">
              Your identity has been verified. Please enter a new password!
            </Text>
          </Flex>
          <form onSubmit={handleSubmit}>
            <Flex direction="column" gap={14}>
              <Input
                size="large"
                type={showPassword ? 'text' : 'password'}
                placeholder="New Password*"
                value={password}
                variant="line"
                required
                textSize="small"
                onChange={(e) => {
                  setPassword(e.target.value);
                  clearFieldError('password');
                }}
                onKeyDown={handleKeyDown}
                error={errors.password}
                iconEnd={
                  <Icons
                    iconName={showPassword ? 'ViewIcon' : 'EyeCloseIcon'}
                    box
                    onClick={() => setShowPassword(!showPassword)}
                    iconSize={24}
                  />
                }
              />

              <Flex direction="column" gap={14}>
                <Input
                  size="large"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm Password*"
                  value={confirmPassword}
                  textSize="small"
                  variant="line"
                  required
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    clearFieldError('confirmPassword');
                  }}
                  onKeyDown={handleKeyDown}
                  error={errors.confirmPassword}
                  iconEnd={
                    <Icons
                      iconName={showConfirmPassword ? 'ViewIcon' : 'EyeCloseIcon'}
                      box
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      iconSize={24}
                    />
                  }
                />

                <Text color="black-900" size="xsmall">
                  Password must be 8-128 characters long and contain at least one uppercase letter, one
                  lowercase letter, one number, and one special character.
                </Text>

                <Section mt={12}>
                  <Button type="submit" roundness="round" variant="solid" size="medium" fullWidth>
                    Submit
                  </Button>
                </Section>
              </Flex>
            </Flex>
          </form>
        </Flex>
      </Section>
    </Flex>
  );

  return (
    <>
      {isMobile ? renderMobileUI() : renderDesktopUI()}
      <SuccessPopup
        isOpen={isSuccessOpen}
        onClose={() => {
          setIsSuccessOpen(false);
          onClose?.();
        }}
        title="Password Reset Successful!"
        message="Your password has been reset. Sign in now!"
        buttonLabel="Sign In"
        onButtonClick={() => {
          setIsSuccessOpen(false);
          onClose?.();
          // Add navigation to login page if needed
          // navigate('/login');
        }}
      />
    </>
  );
};
