import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';

export interface AccountDetailsSectionProps {
  isMobile?: boolean;
}

// Extract Personal Information Component
const PersonalInformationSection = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction="column" gap={16}>
    <Text size={isMobile ? 'medium' : 'large'} weight="semiBold" color="black-900">
      Personal Information
    </Text>
    <Flex direction="column" gap={12}>
      <InfoRow label="Full Name" value="John Doe" isMobile={isMobile} />
      <InfoRow label="Email" value="john.doe@example.com" isMobile={isMobile} />
      <InfoRow label="Phone" value="+1 (555) 123-4567" isMobile={isMobile} />
      <InfoRow label="Date of Birth" value="January 1, 1990" isMobile={isMobile} />
    </Flex>
  </Flex>
);

// Extract Account Preferences Component
const AccountPreferencesSection = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction="column" gap={16}>
    <Text size={isMobile ? 'medium' : 'large'} weight="semiBold" color="black-900">
      Account Preferences
    </Text>
    <Flex direction="column" gap={12}>
      <InfoRow label="Language" value="English" isMobile={isMobile} />
      <InfoRow label="Currency" value="USD ($)" isMobile={isMobile} />
      <InfoRow label="Email Notifications" value="Enabled" isMobile={isMobile} />
    </Flex>
  </Flex>
);

// Extract Security Component
const SecuritySection = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction="column" gap={16}>
    <Text size={isMobile ? 'medium' : 'large'} weight="semiBold" color="black-900">
      Security
    </Text>
    <Flex direction="column" gap={12}>
      <Flex justify="space-between" align="center">
        <Text size={isMobile ? 'small' : 'medium'} weight="regular" color="black-600">
          Password
        </Text>
        <Flex align="center" gap={8}>
          <Text size={isMobile ? 'small' : 'medium'} weight="regular" color="black-900">
            ********
          </Text>
          <Flex align="center" gap={4} style={{ cursor: 'pointer' }}>
            <Icons iconName="EditIcon" />
            <Text size={isMobile ? 'xsmall' : 'small'} weight="regular" color="black-900">
              Change
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <InfoRow label="Two-Factor Authentication" value="Disabled" isMobile={isMobile} />
    </Flex>
  </Flex>
);

// Extract Action Buttons Component
const ActionButtonsSection = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction={isMobile ? 'column' : 'row'} gap={16} justify="start">
    <Section px={24} py={12} borderRadius="medium" bgColor="black-900" style={{ cursor: 'pointer' }}>
      <Flex align="center" gap={8}>
        <Icons iconName="EditIcon" color="white" />
        <Text size={isMobile ? 'small' : 'medium'} weight="regular" color="white">
          Edit Profile
        </Text>
      </Flex>
    </Section>
    <Section
      px={24}
      py={12}
      borderRadius="medium"
      border="1px solid var(--color-black-300)"
      style={{ cursor: 'pointer' }}
    >
      <Flex align="center" gap={8}>
        <Icons iconName="LogoutIcon" />
        <Text size={isMobile ? 'small' : 'medium'} weight="regular" color="black-900">
          Sign Out
        </Text>
      </Flex>
    </Section>
  </Flex>
);

// Extract Info Row Component
const InfoRow = ({ label, value, isMobile }: { label: string; value: string; isMobile: boolean }) => (
  <Flex justify="space-between" align="center">
    <Text size={isMobile ? 'small' : 'medium'} weight="regular" color="black-600">
      {label}
    </Text>
    <Text size={isMobile ? 'small' : 'medium'} weight="regular" color="black-900">
      {value}
    </Text>
  </Flex>
);

export const AccountDetailsSection = ({ isMobile = false }: AccountDetailsSectionProps) => {
  return (
    <Section w="100%" bgColor="white" borderRadius="medium" p={24}>
      <Flex direction="column" gap={32}>
        <Text size={isMobile ? 'large' : 'xlarge'} weight="semiBold" color="black-900">
          Account Details
        </Text>

        <Flex direction="column" gap={24}>
          <PersonalInformationSection isMobile={isMobile} />
          <AccountPreferencesSection isMobile={isMobile} />
          <SecuritySection isMobile={isMobile} />
          <ActionButtonsSection isMobile={isMobile} />
        </Flex>
      </Flex>
    </Section>
  );
};
