import { Flex } from '@components/Atom/Flex';
import { Input } from '@components/Atom/Input';
import { Radio } from '@components/Atom/Radio';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { Toggle } from '@components/Atom/Toggle';

export interface AccountDetailsSectionProps {
  isMobile?: boolean;
}

// Extract DisplayName Section to reduce complexity
const DisplayNameSection = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction="column" gap={24}>
    <Text font="spaceGrotesk" size={isMobile ? 'medium' : '3xlarge'} weight="semiBold" color="black-900">
      Display name
    </Text>
    <Flex justify="space-between" align="center" gap={16}>
      <Section w={421}>
        <Input
          variant="solid"
          placeholder="Display name"
          size={isMobile ? 'large' : 'xlarge'}
          placeholderSize={isMobile ? 'small' : 'medium'}
          textSize={isMobile ? 'small' : 'medium'}
        />
      </Section>
      <Flex align="center" gap={8}>
        <Text size={isMobile ? 'small' : 'medium'} weight="regular" color="black-900">
          Default
        </Text>
        <Toggle
          defaultChecked={true}
          size="medium"
          shape="rounded"
          onCheckedChange={(checked) => console.log('Toggle changed:', checked)}
        />
      </Flex>
    </Flex>
  </Flex>
);

// Extract Name Fields Row Component
const NameFieldsRow = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction={isMobile ? 'column' : 'row'} gap={16}>
    <Flex direction="column" gap={4} flex={1}>
      <Text size={isMobile ? 'xsmall' : 'small'} weight="regular" color="black-600">
        First Name
      </Text>
      <Section w="100%">
        <Input
          variant="solid"
          placeholder="John"
          size={isMobile ? 'large' : 'xlarge'}
          placeholderSize={isMobile ? 'small' : 'medium'}
          textSize={isMobile ? 'small' : 'medium'}
        />
      </Section>
    </Flex>
    <Flex direction="column" gap={4} flex={1}>
      <Text size={isMobile ? 'xsmall' : 'small'} weight="regular" color="black-600">
        Last Name
      </Text>
      <Section w="100%">
        <Input
          variant="solid"
          placeholder="Doe"
          size={isMobile ? 'large' : 'xlarge'}
          placeholderSize={isMobile ? 'small' : 'medium'}
          textSize={isMobile ? 'small' : 'medium'}
        />
      </Section>
    </Flex>
  </Flex>
);

// Extract Email Phone Row Component
const EmailPhoneRow = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction={isMobile ? 'column' : 'row'} gap={16}>
    <Flex direction="column" gap={4} flex={1}>
      <Text size={isMobile ? 'xsmall' : 'small'} weight="regular" color="black-600">
        Email
      </Text>
      <Section w="100%">
        <Input
          variant="solid"
          placeholder="john.doe@example.com"
          size={isMobile ? 'large' : 'xlarge'}
          placeholderSize={isMobile ? 'small' : 'medium'}
          textSize={isMobile ? 'small' : 'medium'}
        />
      </Section>
    </Flex>
    <Flex direction="column" gap={4} flex={1}>
      <Text size={isMobile ? 'xsmall' : 'small'} weight="regular" color="black-600">
        Phone
      </Text>
      <Section w="100%">
        <Input
          variant="solid"
          placeholder="+1 (555) 123-4567"
          size={isMobile ? 'large' : 'xlarge'}
          placeholderSize={isMobile ? 'small' : 'medium'}
          textSize={isMobile ? 'small' : 'medium'}
        />
      </Section>
    </Flex>
  </Flex>
);

// Extract Contact Information Section to reduce complexity
const ContactInformationSection = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction="column" gap={16}>
    <Text size={isMobile ? 'medium' : 'large'} weight="semiBold" color="black-900">
      Contact information
    </Text>
    <Flex direction="column" gap={12}>
      <NameFieldsRow isMobile={isMobile} />
      <EmailPhoneRow isMobile={isMobile} />
    </Flex>
  </Flex>
);

// Extract Country Field Component
const CountryField = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction="column" gap={4}>
    <Text size={isMobile ? 'xsmall' : 'small'} weight="regular" color="black-600">
      Country
    </Text>
    <Section w="100%">
      <Input
        variant="solid"
        placeholder="United States"
        size={isMobile ? 'large' : 'xlarge'}
        placeholderSize={isMobile ? 'small' : 'medium'}
        textSize={isMobile ? 'small' : 'medium'}
      />
    </Section>
  </Flex>
);

// Extract Street Address Field Component
const StreetAddressField = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction="column" gap={4}>
    <Text size={isMobile ? 'xsmall' : 'small'} weight="regular" color="black-600">
      Street Address
    </Text>
    <Section w="100%">
      <Input
        variant="solid"
        placeholder="123 Main Street"
        size={isMobile ? 'large' : 'xlarge'}
        placeholderSize={isMobile ? 'small' : 'medium'}
        textSize={isMobile ? 'small' : 'medium'}
      />
    </Section>
  </Flex>
);

// Extract City Field Component
const CityField = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction="column" gap={4}>
    <Text size={isMobile ? 'xsmall' : 'small'} weight="regular" color="black-600">
      City
    </Text>
    <Section w="100%">
      <Input
        variant="solid"
        placeholder="New York"
        size={isMobile ? 'large' : 'xlarge'}
        placeholderSize={isMobile ? 'small' : 'medium'}
        textSize={isMobile ? 'small' : 'medium'}
      />
    </Section>
  </Flex>
);

// Extract State and ZIP Row Component
const StateZipRow = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction={isMobile ? 'column' : 'row'} gap={16}>
    <Flex direction="column" gap={4} flex={1}>
      <Text size={isMobile ? 'xsmall' : 'small'} weight="regular" color="black-600">
        State
      </Text>
      <Section w="100%">
        <Input
          variant="solid"
          placeholder="NY"
          size={isMobile ? 'large' : 'xlarge'}
          placeholderSize={isMobile ? 'small' : 'medium'}
          textSize={isMobile ? 'small' : 'medium'}
        />
      </Section>
    </Flex>
    <Flex direction="column" gap={4} flex={1}>
      <Text size={isMobile ? 'xsmall' : 'small'} weight="regular" color="black-600">
        ZIP Code
      </Text>
      <Section w="100%">
        <Input
          variant="solid"
          placeholder="10001"
          size={isMobile ? 'large' : 'xlarge'}
          placeholderSize={isMobile ? 'small' : 'medium'}
          textSize={isMobile ? 'small' : 'medium'}
        />
      </Section>
    </Flex>
  </Flex>
);

// Extract Shipping Address Section to reduce complexity
const ShippingAddressSection = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction="column" gap={16}>
    <Text size={isMobile ? 'medium' : 'large'} weight="semiBold" color="black-900">
      Shipping address
    </Text>
    <Flex direction="column" gap={12}>
      <CountryField isMobile={isMobile} />
      <StreetAddressField isMobile={isMobile} />
      <CityField isMobile={isMobile} />
      <StateZipRow isMobile={isMobile} />
    </Flex>
  </Flex>
);

// Extract Payment Method Selector Component
const PaymentMethodSelector = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction="column" gap={8}>
    <Text size={isMobile ? 'xsmall' : 'small'} weight="regular" color="black-600">
      Payment Method
    </Text>
    <Flex direction="column" gap={12}>
      <Flex align="center" gap={12}>
        <Radio
          onChange={(checked: boolean) => console.log('Card payment selected:', checked)}
          size="md"
          shape="circle"
        />
        <Text size={isMobile ? 'small' : 'medium'} weight="regular" color="black-900">
          Pay by Card
        </Text>
      </Flex>
      <Flex align="center" gap={12}>
        <Radio
          onChange={(checked: boolean) => console.log('Other payment selected:', checked)}
          size="md"
          shape="circle"
        />
        <Text size={isMobile ? 'small' : 'medium'} weight="regular" color="black-900">
          Other Payment Method
        </Text>
      </Flex>
    </Flex>
  </Flex>
);

// Extract Card Number Field Component
const CardNumberField = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction="column" gap={4}>
    <Text size={isMobile ? 'xsmall' : 'small'} weight="regular" color="black-600">
      Card Number
    </Text>
    <Section w="100%">
      <Input
        variant="solid"
        placeholder="**** **** **** 1234"
        size={isMobile ? 'large' : 'xlarge'}
        placeholderSize={isMobile ? 'small' : 'medium'}
        textSize={isMobile ? 'small' : 'medium'}
      />
    </Section>
  </Flex>
);

// Extract Cardholder Name Field Component
const CardholderNameField = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction="column" gap={4}>
    <Text size={isMobile ? 'xsmall' : 'small'} weight="regular" color="black-600">
      Cardholder Name
    </Text>
    <Section w="100%">
      <Input
        variant="solid"
        placeholder="John Doe"
        size={isMobile ? 'large' : 'xlarge'}
        placeholderSize={isMobile ? 'small' : 'medium'}
        textSize={isMobile ? 'small' : 'medium'}
      />
    </Section>
  </Flex>
);

// Extract Payment Information Section to reduce complexity
const PaymentInformationSection = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction="column" gap={16}>
    <Text size={isMobile ? 'medium' : 'large'} weight="semiBold" color="black-900">
      Payment information
    </Text>
    <Flex direction="column" gap={12}>
      <PaymentMethodSelector isMobile={isMobile} />
      <CardNumberField isMobile={isMobile} />
      <CardholderNameField isMobile={isMobile} />
    </Flex>
  </Flex>
);

export const AccountDetailsSection = ({ isMobile = false }: AccountDetailsSectionProps) => {
  return (
    <Section w="100%" bgColor="white" borderRadius="medium" p={24}>
      <Flex direction="column" gap={32}>
        <Text size={isMobile ? 'large' : 'xlarge'} weight="semiBold" color="black-900">
          Account Details
        </Text>

        <Flex direction="column" gap={32}>
          <DisplayNameSection isMobile={isMobile} />
          <ContactInformationSection isMobile={isMobile} />
          <ShippingAddressSection isMobile={isMobile} />
          <PaymentInformationSection isMobile={isMobile} />
        </Flex>
      </Flex>
    </Section>
  );
};
