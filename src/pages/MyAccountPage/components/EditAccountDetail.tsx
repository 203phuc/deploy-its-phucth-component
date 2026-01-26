import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Input } from '@components/Atom/Input';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useEditAccountDetail } from '../hooks/useEditAccountDetail';
import { InputChangeEvent } from '@components/Atom/Input/type';

export interface EditAccountDetailProps {
  isMobile?: boolean;
  onSave?: () => void;
  onCancel?: () => void;
}

// Edit Personal Information Section
const EditPersonalInformationSection = ({
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
          <Flex direction="column" width="100%" gap={24}>
            <Section w="100%">
              <Input
                size="xlarge"
                placeholder="First name *"
                label="First name *"
                value={formData.firstName}
                onChange={(event) => handleInputChange('firstName', event)}
              />
            </Section>
            <Section w="100%">
              <Input
                size="xlarge"
                placeholder="Last name *"
                label="Last name *"
                value={formData.lastName}
                onChange={(event) => handleInputChange('lastName', event)}
              />
            </Section>
            <Section w="100%">
              <Input
                size="xlarge"
                placeholder="Display name *"
                label="Display name *"
                value={formData.displayName}
                onChange={(event) => handleInputChange('displayName', event)}
              />
              <Section pt={8}>
                <Text size="xsmall" color="black-600">
                  This will be how your name will be displayed in the account section and in reviews
                </Text>
              </Section>
            </Section>
            <Section w="100%">
              <Input
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

export const EditAccountDetail = ({ isMobile = false, onSave, onCancel }: EditAccountDetailProps) => {
  const { formData, handleInputChange } = useEditAccountDetail();

  return (
    <Section w={isMobile ? '100%' : 768} bgColor="white" borderRadius="medium" p={24}>
      <Flex direction="column" gap={32}>
        <Text size={isMobile ? 'large' : 'xlarge'} weight="semiBold" color="black-900">
          Edit Account Details
        </Text>

        <Flex direction="column" gap={32}>
          <EditPersonalInformationSection
            isMobile={isMobile}
            formData={formData}
            handleInputChange={handleInputChange}
          />
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
        </Section>
      </Flex>
    </Section>
  );
};
