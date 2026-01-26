import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Input } from '@components/Atom/Input';
import type { InputChangeEvent } from '@components/Atom/Input/type';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { usePasswordForm } from '../hooks/usePasswordForm';
import { usePersonalInfoForm } from '../hooks/usePersonalInfoForm';

export interface EditAccountDetailsFormProps {
  isMobile?: boolean;
  onBackToAccountDetails?: () => void;
}

// Editable Personal Information Section
const EditablePersonalInformationSection = ({
  isMobile,
  formData,
  handleInputChange,
}: {
  isMobile: boolean;
  formData: { firstName: string; lastName: string; displayName: string; email: string };
  handleInputChange: (field: keyof typeof formData, event: InputChangeEvent) => void;
}) => {
  return (
    <Position position="relative">
      <Section
        w={isMobile ? '100%' : 768}
        px={isMobile ? 16 : 24}
        py={isMobile ? 16 : 24}
        border="1px solid var(--color-black-300)"
        borderRadius={8}
      >
        <Flex align="start" gap={isMobile ? 0 : 14}>
          <Flex direction="column" width="100%" gap={12}>
            <Section w={isMobile ? '100%' : 652}>
              <Input
                labelColor="black-400"
                size="xlarge"
                placeholder="First name *"
                label="First name *"
                value={formData.firstName}
                onChange={(event) => handleInputChange('firstName', event)}
              />
            </Section>
            <Section w={isMobile ? '100%' : 652}>
              <Input
                labelColor="black-400"
                size="xlarge"
                placeholder="Last name *"
                label="Last name *"
                value={formData.lastName}
                onChange={(event) => handleInputChange('lastName', event)}
              />
            </Section>
            <Section w={isMobile ? '100%' : 652}>
              <Input
                labelColor="black-400"
                size="xlarge"
                placeholder="Display name *"
                label="Display name *"
                value={formData.displayName}
                onChange={(event) => handleInputChange('displayName', event)}
              />
            </Section>
            <Section w={isMobile ? '100%' : 652}>
              <Input
                labelColor="black-400"
                size="xlarge"
                placeholder="Email Address *"
                label="Email Address *"
                value={formData.email}
                onChange={(event) => handleInputChange('email', event)}
              />
            </Section>
          </Flex>
        </Flex>
      </Section>
    </Position>
  );
};

// Editable Password Section Component
const EditablePasswordSection = ({
  isMobile,
  passwordData,
  handlePasswordChange,
}: {
  isMobile: boolean;
  passwordData: { currentPassword: string; newPassword: string; confirmPassword: string };
  handlePasswordChange: (field: keyof typeof passwordData, event: InputChangeEvent) => void;
}) => {
  return (
    <Section
      w={isMobile ? '100%' : 768}
      px={isMobile ? 16 : 24}
      py={isMobile ? 16 : 24}
      border="1px solid var(--color-black-300)"
      borderRadius={8}
    >
      <Flex direction="column" gap={20}>
        <Text font="spaceGrotesk" size={isMobile ? 'medium' : 'large'} weight="semiBold" color="black-900">
          Password change
        </Text>

        <Flex direction="column" gap={12}>
          <Section w={isMobile ? '100%' : 652}>
            <Input
              labelColor="black-400"
              size="xlarge"
              placeholder="Current password"
              label="Current password"
              value={passwordData.currentPassword}
              onChange={(event) => handlePasswordChange('currentPassword', event)}
              type="password"
            />
          </Section>
          <Section w={isMobile ? '100%' : 652}>
            <Input
              labelColor="black-400"
              size="xlarge"
              placeholder="New password"
              label="New password"
              value={passwordData.newPassword}
              onChange={(event) => handlePasswordChange('newPassword', event)}
              type="password"
            />
          </Section>
          <Section w={isMobile ? '100%' : 652}>
            <Input
              labelColor="black-400"
              size="xlarge"
              placeholder="Confirm new password"
              label="Confirm new password"
              value={passwordData.confirmPassword}
              onChange={(event) => handlePasswordChange('confirmPassword', event)}
              type="password"
            />
          </Section>
        </Flex>
      </Flex>
    </Section>
  );
};

export const EditAccountDetailsForm = ({
  isMobile = false,
  onBackToAccountDetails,
}: EditAccountDetailsFormProps) => {
  const { formData, handleInputChange } = usePersonalInfoForm();
  const { passwordData, handlePasswordChange } = usePasswordForm();

  const handleSaveChanges = () => {
    console.log('Saving account details changes...');
    // Here you would typically save the data to your backend
    onBackToAccountDetails?.();
  };

  return (
    <Section w="100%" bgColor="white" borderRadius="medium" p={24}>
      <Flex direction="column" gap={32}>
        <Text size={isMobile ? 'large' : 'xlarge'} weight="semiBold" color="black-900">
          Edit Account Details
        </Text>

        <Flex direction="column" gap={32}>
          <EditablePersonalInformationSection
            isMobile={isMobile}
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <EditablePasswordSection
            isMobile={isMobile}
            passwordData={passwordData}
            handlePasswordChange={handlePasswordChange}
          />
        </Flex>
      </Flex>

      <Section pt={56}>
        <Flex direction={isMobile ? 'column' : 'row'} gap={isMobile ? 24 : 112} justify="center">
          <Section
            w={isMobile ? '100%' : 285}
            h={52}
            borderRadius={6}
            bgColor="#454545"
            onClick={onBackToAccountDetails}
            overflow="hidden"
          >
            <Flex justify="center" height="100%" align="center">
              <Text
                font="spaceGrotesk"
                weight="moderate"
                color="white"
                size={isMobile ? 'small' : 'special2'}
              >
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
              onClick={handleSaveChanges}
            >
              Save Changes
            </Button>
          </Section>
        </Flex>
      </Section>
    </Section>
  );
};
