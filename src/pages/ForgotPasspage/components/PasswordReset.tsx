import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import { Icons } from '@components/Atom/Icons';
import { Input } from '@components/Atom/Input';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useState } from 'react';
import { passwordsMatch, validatePassword } from '../../../util/passwordUtils';

interface PasswordResetProps {
  onClose: () => void;
  isMobile: boolean;
  onSubmit: (newPassword: string) => void;
}

export const PasswordReset = ({ onClose, isMobile, onSubmit }: PasswordResetProps) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const clearFieldError = (field: 'password' | 'confirmPassword') => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitForm();
    }
  };

  const submitForm = () => {
    const passwordError = validatePassword(password);
    const confirmPasswordError = passwordsMatch(password, confirmPassword) ? '' : 'Passwords do not match';

    setErrors({
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });

    if (!passwordError && !confirmPasswordError) {
      onSubmit(password);
    }
  };

  return (
    <Flex direction="column">
      <Section mb={isMobile ? 15 : 32}>
        <Flex direction="column" gap={isMobile ? 16 : 24}>
          <Flex justify="space-between" align="center" gap={isMobile ? 8 : 16}>
            <Heading color="black-900" size={isMobile ? 'hSpecial' : 'h4'}>
              Password Reset
            </Heading>
            <Icons iconName="CloseIcon" box onClick={onClose} iconSize={isMobile ? 32 : 40} />
          </Flex>

          <form onSubmit={handleSubmit}>
            <Flex direction="column" gap={16}>
              <Input
                size={isMobile ? 'large' : 'xlarge'}
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter new password"
                value={password}
                variant="line"
                required
                textSize={isMobile ? 'small' : 'medium'}
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
                    iconSize={20}
                  />
                }
              />

              <Input
                size={isMobile ? 'large' : 'xlarge'}
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm new password"
                value={confirmPassword}
                textSize={isMobile ? 'small' : 'medium'}
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
                    iconSize={20}
                  />
                }
              />

              <Text color="black-600" size="small">
                Password must be 8-128 characters long and contain at least one uppercase letter, one
                lowercase letter, one number, and one special character.
              </Text>

              <Flex gap={12} direction={isMobile ? 'column' : 'row'}>
                <Button type="submit" variant="solid" size={isMobile ? 'medium' : 'large'} fullWidth>
                  Reset Password
                </Button>
              </Flex>
            </Flex>
          </form>
        </Flex>
      </Section>
    </Flex>
  );
};
