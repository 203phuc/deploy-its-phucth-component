import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons';
import { Input } from '@components/Atom/Input';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useState } from 'react';
import { EditAccountDetail } from './EditAccountDetail';

export interface AccountDetailsSectionProps {
  isMobile?: boolean;
}

// Personal Info Field Component
const PersonalInfoField = ({
  label,
  value,
  isMobile,
}: {
  label: string;
  value: string;
  isMobile: boolean;
}) => (
  <Flex direction="column" gap={8} flex={1}>
    <Input
      disabled
      labelColor="black-400"
      label={label}
      variant="solid"
      placeholder={value}
      size={isMobile ? 'large' : 'xlarge'}
      placeholderSize={isMobile ? 'small' : 'medium'}
      textSize={isMobile ? 'small' : 'medium'}
    />
  </Flex>
);

// Extract Personal Information Component
const PersonalInformationSection = ({ isMobile, onEdit }: { isMobile: boolean; onEdit: () => void }) => (
  <Section
    w={isMobile ? '100%' : 768}
    px={isMobile ? 16 : 24}
    py={isMobile ? 16 : 24}
    border="1px solid var(--color-black-300)"
    borderRadius={8}
  >
    <Flex justify="space-between" align="start">
      <Section w={isMobile ? '100%' : 652}>
        <Flex direction="column" gap={12}>
          {isMobile ? (
            <Position position="relative">
              <Flex justify="space-between" align="start">
                <PersonalInfoField label="First name *" value="John" isMobile={isMobile} />
                <Position right={0}>
                  <Button variant="text" onClick={onEdit}>
                    <Flex gap={4} align="center" justify="center">
                      <Icons iconName="EditIcon" />
                      <Text size={isMobile ? 'xsmall' : 'special1'} color="black-900">
                        Edit
                      </Text>
                    </Flex>
                  </Button>
                </Position>
              </Flex>
            </Position>
          ) : (
            <PersonalInfoField label="First name *" value="John" isMobile={isMobile} />
          )}

          <PersonalInfoField label="Last name *" value="Doe" isMobile={isMobile} />
          <PersonalInfoField label="Display name *" value="Display names" isMobile={isMobile} />
          <PersonalInfoField label="Email Address *" value="john.doe@example.com" isMobile={isMobile} />
        </Flex>
      </Section>
      {!isMobile && (
        <Button variant="text" onClick={onEdit}>
          <Flex gap={4} align="center" justify="center">
            <Icons iconName="EditIcon" />
            <Text size={isMobile ? 'xsmall' : 'special1'} color="black-900">
              Edit
            </Text>
          </Flex>
        </Button>
      )}
    </Flex>
  </Section>
);

// Extract Password Change Component
const PasswordChangeSection = ({ isMobile }: { isMobile: boolean }) => (
  <Section
    w={isMobile ? '100%' : 768}
    px={isMobile ? 16 : 24}
    py={isMobile ? 16 : 24}
    border="1px solid var(--color-black-300)"
    borderRadius={8}
  >
    <Flex justify="space-between" align="center">
      <Text size={isMobile ? 'medium' : 'large'} weight="semiBold" color="black-900">
        Password Change
      </Text>
      <Button variant="text">
        <Flex align="center" gap={4}>
          <Icons iconName="EditIcon" />
          <Text size={isMobile ? 'xsmall' : 'special1'} weight="regular" color="black-900">
            Edit
          </Text>
        </Flex>
      </Button>
    </Flex>
  </Section>
);

export const AccountDetailsSection = ({ isMobile = false }: AccountDetailsSectionProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  if (isEditing) {
    return <EditAccountDetail isMobile={isMobile} onSave={handleSave} onCancel={handleCancel} />;
  }

  return (
    <Section w="100%" bgColor="white" borderRadius="medium" p={24}>
      <Flex direction="column" gap={32}>
        <Text size={isMobile ? 'large' : 'xlarge'} weight="semiBold" color="black-900">
          Account Details
        </Text>

        <Flex direction="column" gap={24}>
          <PersonalInformationSection isMobile={isMobile} onEdit={handleEdit} />
          <PasswordChangeSection isMobile={isMobile} />
        </Flex>
      </Flex>
    </Section>
  );
};
