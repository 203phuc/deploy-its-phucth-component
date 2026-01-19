import { Flex } from '@components/Atom/Flex';
import Icons from '@components/Atom/Icons';
import { Input } from '@components/Atom/Input';
import type { InputChangeEvent } from '@components/Atom/Input/type';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useState } from 'react';

export interface EditAccountDetailProps {
  isMobile?: boolean;
  onSave?: () => void;
  onCancel?: () => void;
}

// Edit Personal Information Section
const EditPersonalInformationSection = ({ isMobile, onSave }: { isMobile: boolean; onSave?: () => void }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
  });

  const handleInputChange = (field: keyof typeof formData, event: InputChangeEvent) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  return (
    <Position position="relative">
      <Section
        w={isMobile ? '100%' : 768}
        px={isMobile ? 16 : 24}
        py={isMobile ? 16 : 24}
        border="1px solid var(--color-black-300)"
        borderRadius={8}
      >
        {isMobile && (
          <Position position="absolute" top={16} right={16}>
            <Flex gap={4} align="center" onClick={onSave}>
              <Icons iconName="EditIcon" />
              <Text size="special1" weight="semiBold" color="black-900">
                Save
              </Text>
            </Flex>
          </Position>
        )}

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
          {isMobile ? null : (
            <Flex gap={4} align="center" onClick={onSave}>
              <Icons iconName="EditIcon" />
              <Text size="special1" weight="semiBold" color="black-900">
                Save
              </Text>
            </Flex>
          )}
        </Flex>
      </Section>
    </Position>
  );
};

export const EditAccountDetail = ({ isMobile = false, onSave, onCancel }: EditAccountDetailProps) => {
  return (
    <Section w="100%" bgColor="white" borderRadius="medium" p={24}>
      <Flex direction="column" gap={32}>
        <Text size={isMobile ? 'large' : 'xlarge'} weight="semiBold" color="black-900">
          Edit Account Details
        </Text>

        <Flex direction="column" gap={32}>
          <EditPersonalInformationSection isMobile={isMobile} onSave={onSave} />
        </Flex>

        <Section pt={56}>
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
              <Flex justify="center" height="100%" align="center" onClick={onSave}>
                <Text
                  font="spaceGrotesk"
                  weight="moderate"
                  color="white"
                  size={isMobile ? 'small' : 'special2'}
                >
                  Save Changes
                </Text>
              </Flex>
            </Section>
          </Flex>
        </Section>
      </Flex>
    </Section>
  );
};
