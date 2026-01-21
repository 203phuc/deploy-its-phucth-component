import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons';
import { Input } from '@components/Atom/Input';
import type { InputChangeEvent } from '@components/Atom/Input/type';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useState } from 'react';

export interface EditPasswordFormProps {
  isMobile?: boolean;
  onSave?: () => void;
  onCancel?: () => void;
}

// Password Input Field Component
const PasswordInputField = ({
  label,
  placeholder,
  value,
  showPassword,
  onTogglePassword,
  onChange,
  isMobile,
}: {
  label?: string;
  placeholder: string;
  value: string;
  showPassword: boolean;
  onTogglePassword: () => void;
  onChange: (e: InputChangeEvent) => void;
  isMobile: boolean;
}) => (
  <Input
    label={label}
    size={isMobile ? 'large' : 'xlarge'}
    type={showPassword ? 'text' : 'password'}
    placeholder={placeholder}
    value={value}
    variant="solid"
    textSize={isMobile ? 'small' : 'medium'}
    onChange={onChange}
    iconEnd={
      <Icons
        iconName={showPassword ? 'ViewIcon' : 'EyeCloseIcon'}
        box
        onClick={onTogglePassword}
        iconSize={24}
      />
    }
  />
);

// Password Form Content Component
const PasswordFormContent = ({
  passwordData,
  showOldPassword,
  showNewPassword,
  showConfirmPassword,
  onPasswordChange,
  onToggleOldPassword,
  onToggleNewPassword,
  onToggleConfirmPassword,
  isMobile,
}: {
  passwordData: { oldPassword: string; newPassword: string; confirmPassword: string };
  showOldPassword: boolean;
  showNewPassword: boolean;
  showConfirmPassword: boolean;
  onPasswordChange: (field: keyof typeof passwordData, e: InputChangeEvent) => void;
  onToggleOldPassword: () => void;
  onToggleNewPassword: () => void;
  onToggleConfirmPassword: () => void;
  isMobile: boolean;
}) => (
  <Flex direction="column" gap={24}>
    <PasswordInputField
      label="Old Password*"
      placeholder="Old Password*"
      value={passwordData.oldPassword}
      showPassword={showOldPassword}
      onTogglePassword={onToggleOldPassword}
      onChange={(e) => onPasswordChange('oldPassword', e)}
      isMobile={isMobile}
    />

    <PasswordInputField
      label="New Password*"
      placeholder="New Password*"
      value={passwordData.newPassword}
      showPassword={showNewPassword}
      onTogglePassword={onToggleNewPassword}
      onChange={(e) => onPasswordChange('newPassword', e)}
      isMobile={isMobile}
    />

    <PasswordInputField
      label="Confirm New Password*"
      placeholder="Confirm New Password*"
      value={passwordData.confirmPassword}
      showPassword={showConfirmPassword}
      onTogglePassword={onToggleConfirmPassword}
      onChange={(e) => onPasswordChange('confirmPassword', e)}
      isMobile={isMobile}
    />
  </Flex>
);

// Form Actions Component
const FormActions = ({
  isMobile,
  onCancel,
  onSave,
}: {
  isMobile: boolean;
  onCancel?: () => void;
  onSave?: () => void;
}) => (
  <Flex direction={isMobile ? 'column' : 'row'} gap={isMobile ? 24 : 112} justify="center">
    <Section
      w={isMobile ? '100%' : 285}
      h={52}
      borderRadius={6}
      bgColor="#454545"
      onClick={onCancel}
      overflow="hidden"
    >
      <Flex justify="center" height="100%" align="center">
        <Text font="spaceGrotesk" weight="moderate" color="white" size={isMobile ? 'small' : 'special2'}>
          Cancel
        </Text>
      </Flex>
    </Section>
    <Section w={isMobile ? '100%' : 285}>
      <Button
        font="spaceGrotesk"
        variant="solidBlack"
        size={isMobile ? 'small' : 'medium'}
        roundness="round"
        fullWidth
        onClick={onSave}
      >
        Submit
      </Button>
    </Section>
  </Flex>
);

export const EditPasswordForm = ({ isMobile = false, onSave, onCancel }: EditPasswordFormProps) => {
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordChange = (field: keyof typeof passwordData, event: InputChangeEvent) => {
    setPasswordData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  return (
    <Section w={isMobile ? '100%' : 768} bgColor="white" borderRadius="medium" p={24}>
      <Flex direction="column" gap={32}>
        <Flex direction="column" gap={32}>
          <Section
            w={isMobile ? '100%' : 768}
            px={isMobile ? 16 : 24}
            py={isMobile ? 16 : 24}
            border="1px solid var(--color-black-300)"
            borderRadius={8}
          >
            <Flex direction="column" gap={24}>
              <Text size={isMobile ? 'large' : 'xlarge'} weight="semiBold" color="black-900">
                Change Password
              </Text>
              <PasswordFormContent
                passwordData={passwordData}
                showOldPassword={showOldPassword}
                showNewPassword={showNewPassword}
                showConfirmPassword={showConfirmPassword}
                onPasswordChange={handlePasswordChange}
                onToggleOldPassword={() => setShowOldPassword(!showOldPassword)}
                onToggleNewPassword={() => setShowNewPassword(!showNewPassword)}
                onToggleConfirmPassword={() => setShowConfirmPassword(!showConfirmPassword)}
                isMobile={isMobile}
              />
            </Flex>
          </Section>
        </Flex>

        <Section pt={56}>
          <FormActions isMobile={isMobile} onCancel={onCancel} onSave={onSave} />
        </Section>
      </Flex>
    </Section>
  );
};
