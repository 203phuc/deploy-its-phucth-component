import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import Icons from '@components/Atom/Icons';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';

export interface EditAddressFormProps {
  isMobile?: boolean;
  onBackToAddress?: () => void;
}

// Personal Info Field Component (read-only with edit button)
const PersonalInfoField = ({
  label,
  value,
  isMobile,
  onEdit,
}: {
  label: string;
  value: string;
  isMobile: boolean;
  onEdit?: () => void;
}) => (
  <Section
    px={isMobile ? 16 : 24}
    py={isMobile ? 16 : 24}
    border="1px solid var(--color-black-300)"
    borderRadius={8}
  >
    <Flex justify="space-between" align="center">
      <Flex direction="column" gap={8}>
        <Text font="spaceGrotesk" size={isMobile ? 'small' : 'medium'} weight="regular" color="black-600">
          {label}
        </Text>
        <Text font="spaceGrotesk" size={isMobile ? 'medium' : 'large'} weight="regular" color="black-900">
          {value}
        </Text>
      </Flex>
      <Flex gap={4} align="center" onClick={onEdit}>
        <Icons iconName="EditIcon" />
        <Text size={isMobile ? 'xsmall' : 'special1'} color="black-900">
          Edit
        </Text>
      </Flex>
    </Flex>
  </Section>
);

// Personal Information Section
const PersonalInformationSection = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction="column" gap={16}>
    <Text font="spaceGrotesk" size={isMobile ? 'medium' : '3xlarge'} weight="semiBold" color="black-900">
      Personal Information
    </Text>
    <Flex direction="column" gap={12}>
      <PersonalInfoField
        label="Display Name"
        value="John Doe"
        isMobile={isMobile}
        onEdit={() => console.log('Edit display name')}
      />
      <PersonalInfoField
        label="First Name"
        value="John"
        isMobile={isMobile}
        onEdit={() => console.log('Edit first name')}
      />
      <PersonalInfoField
        label="Last Name"
        value="Doe"
        isMobile={isMobile}
        onEdit={() => console.log('Edit last name')}
      />
      <PersonalInfoField
        label="Email Address"
        value="john.doe@example.com"
        isMobile={isMobile}
        onEdit={() => console.log('Edit email')}
      />
    </Flex>
  </Flex>
);

// Password Section Component
const PasswordSection = ({ isMobile }: { isMobile: boolean }) => (
  <Section
    px={isMobile ? 16 : 24}
    py={isMobile ? 16 : 24}
    border="1px solid var(--color-black-300)"
    borderRadius={8}
  >
    <Flex justify="space-between" align="center">
      <Flex direction="column" gap={8}>
        <Text font="spaceGrotesk" size={isMobile ? 'medium' : '3xlarge'} weight="semiBold" color="black-900">
          Password
        </Text>
        <Text font="spaceGrotesk" size={isMobile ? 'medium' : 'large'} weight="regular" color="black-900">
          ••••••••••••
        </Text>
        <Text font="spaceGrotesk" size={isMobile ? 'small' : 'medium'} weight="regular" color="black-600">
          Last changed 30 days ago
        </Text>
      </Flex>
      <Flex gap={4} align="center" onClick={() => console.log('Edit password')}>
        <Icons iconName="EditIcon" />
        <Text size={isMobile ? 'xsmall' : 'special1'} color="black-900">
          Edit
        </Text>
      </Flex>
    </Flex>
  </Section>
);

export const EditAddressForm = ({ isMobile = false, onBackToAddress }: EditAddressFormProps) => {
  return (
    <Section w="100%" bgColor="white" borderRadius="medium" p={24}>
      <Flex direction="column" gap={32}>
        <Text size={isMobile ? 'large' : 'xlarge'} weight="semiBold" color="black-900">
          Account Details
        </Text>

        <Flex direction="column" gap={32}>
          <PersonalInformationSection isMobile={isMobile} />
          <PasswordSection isMobile={isMobile} />
        </Flex>
      </Flex>
      <Section pt={56}>
        <Flex direction={isMobile ? 'column' : 'row'} gap={isMobile ? 24 : 112} justify="center">
          <Section
            w={isMobile ? '100%' : 285}
            h={52}
            borderRadius={6}
            bgColor="#454545"
            onClick={onBackToAddress}
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
              onClick={() => console.log('Save changes clicked')}
            >
              Submit
            </Button>
          </Section>
        </Flex>
      </Section>
    </Section>
  );
};
