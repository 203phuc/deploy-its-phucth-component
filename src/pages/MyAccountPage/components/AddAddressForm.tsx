import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Input } from '@components/Atom/Input';
import { Radio } from '@components/Atom/Radio';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { Toggle } from '@components/Atom/Toggle';
import { useState } from 'react';

export interface AddAddressFormProps {
  isMobile?: boolean;
}

// Extract DisplayName Section to reduce complexity
const DisplayNameSection = ({ isMobile }: { isMobile: boolean }) => (
  <Section borderRadius={6} border="1px solid var(--color-black-300)" px={24} py={24}>
    <Flex direction="column" gap={24}>
      <Flex width="100%" justify="space-between">
        <Text font="spaceGrotesk" size={isMobile ? 'large' : '3xlarge'} weight="semiBold" color="black-900">
          Display name
        </Text>
        {isMobile && (
          <Flex align="center" gap={8}>
            <Text
              color="black-900"
              font="spaceGrotesk"
              size={isMobile ? 'large' : '3xlarge'}
              weight="moderate"
            >
              Default
            </Text>
            <Toggle
              defaultChecked={true}
              size="medium"
              shape="rounded"
              onCheckedChange={(checked) => console.log('Toggle changed:', checked)}
            />
          </Flex>
        )}
      </Flex>

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
        {isMobile ? (
          <></>
        ) : (
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
        )}
      </Flex>
    </Flex>
  </Section>
);

// Extract Name Fields Row Component
const NameFieldsRow = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction={isMobile ? 'column' : 'row'} gap={16}>
    <Flex direction="column" gap={4} flex={1}>
      <Section w="100%">
        <Input
          label="First name *"
          variant="solid"
          placeholder="First name"
          size={isMobile ? 'large' : 'xlarge'}
          placeholderSize={isMobile ? 'small' : 'medium'}
          textSize={isMobile ? 'small' : 'medium'}
        />
      </Section>
    </Flex>
    <Flex direction="column" gap={4} flex={1}>
      <Section w="100%">
        <Input
          label="Last name *"
          variant="solid"
          placeholder="Last name"
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
      <Section w="100%">
        <Input
          label="Email *"
          variant="solid"
          placeholder="Email"
          size={isMobile ? 'large' : 'xlarge'}
          placeholderSize={isMobile ? 'small' : 'medium'}
          textSize={isMobile ? 'small' : 'medium'}
        />
      </Section>
    </Flex>
    <Flex direction="column" gap={4} flex={1}>
      <Section w="100%">
        <Input
          label="Phone *"
          variant="solid"
          placeholder="Phone"
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
  <Section borderRadius={6} border="1px solid var(--color-black-300)" px={24} py={24}>
    <Flex direction="column" gap={16}>
      <Text font="spaceGrotesk" size={isMobile ? 'medium' : '3xlarge'} weight="semiBold" color="black-900">
        Contact information
      </Text>
      <Flex direction="column" gap={12}>
        <NameFieldsRow isMobile={isMobile} />
        <EmailPhoneRow isMobile={isMobile} />
      </Flex>
    </Flex>
  </Section>
);

// Extract Country Field Component
const CountryField = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction="column" gap={4}>
    <Section w="100%">
      <Input
        label="Country *"
        variant="solid"
        placeholder="Country"
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
    <Section w="100%">
      <Input
        label="Street Address *"
        variant="solid"
        placeholder="Street Address"
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
    <Section w="100%">
      <Input
        label="City *"
        variant="solid"
        placeholder="City"
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
      <Section w="100%">
        <Input
          label="State *"
          variant="solid"
          placeholder="State"
          size={isMobile ? 'large' : 'xlarge'}
          placeholderSize={isMobile ? 'small' : 'medium'}
          textSize={isMobile ? 'small' : 'medium'}
        />
      </Section>
    </Flex>
    <Flex direction="column" gap={4} flex={1}>
      <Section w="100%">
        <Input
          label="ZIP Code *"
          variant="solid"
          placeholder="ZIP Code"
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
  <Section borderRadius={6} border="1px solid var(--color-black-300)" px={24} py={24}>
    <Flex direction="column" gap={24}>
      <Text font="spaceGrotesk" size={isMobile ? 'medium' : '3xlarge'} weight="semiBold" color="black-900">
        Shipping address
      </Text>
      <Flex direction="column" gap={12}>
        <CountryField isMobile={isMobile} />
        <StreetAddressField isMobile={isMobile} />
        <CityField isMobile={isMobile} />
        <StateZipRow isMobile={isMobile} />
      </Flex>
    </Flex>
  </Section>
);

// Extract Payment Method Selector Component
const PaymentMethodSelector = ({ isMobile }: { isMobile: boolean }) => {
  const [isCardSelected, setIsCardSelected] = useState(true);

  return (
    <Flex direction="column" gap={8}>
      <Section
        px={16}
        py={13}
        border={`1px solid var(--color-${isCardSelected ? 'black-900' : 'black-300'})`}
        borderRadius={6}
      >
        <Flex align="center" gap={12}>
          <Radio
            checked={isCardSelected}
            onChange={(checked: boolean) => {
              console.log('Card payment selected:', checked);
              setIsCardSelected(checked);
            }}
            size="sm"
            shape="circle"
          />
          <Text size={isMobile ? 'small' : 'medium'} weight="regular" color="black-900">
            Pay by Card
          </Text>
        </Flex>
      </Section>
    </Flex>
  );
};

// Extract Card Number Field Component
const CardNumberField = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction="column" gap={4}>
    <Section w="100%">
      <Input
        label="Card Number *"
        variant="solid"
        placeholder="Card Number"
        size={isMobile ? 'large' : 'xlarge'}
        placeholderSize={isMobile ? 'small' : 'medium'}
        textSize={isMobile ? 'small' : 'medium'}
      />
    </Section>
  </Flex>
);

// Extract Expiry CVC Row Component
const ExpiryCVCRow = ({ isMobile }: { isMobile: boolean }) => (
  <Flex direction={isMobile ? 'column' : 'row'} gap={16}>
    <Flex direction="column" gap={4} flex={1}>
      <Section w="100%">
        <Input
          label="Expiry Date *"
          variant="solid"
          placeholder="MM/YY"
          size={isMobile ? 'large' : 'xlarge'}
          placeholderSize={isMobile ? 'small' : 'medium'}
          textSize={isMobile ? 'small' : 'medium'}
        />
      </Section>
    </Flex>
    <Flex direction="column" gap={4} flex={1}>
      <Section w="100%">
        <Input
          label="CVC Code *"
          variant="solid"
          placeholder="123"
          size={isMobile ? 'large' : 'xlarge'}
          placeholderSize={isMobile ? 'small' : 'medium'}
          textSize={isMobile ? 'small' : 'medium'}
        />
      </Section>
    </Flex>
  </Flex>
);

// Extract Payment Information Section to reduce complexity
const PaymentInformationSection = ({ isMobile }: { isMobile: boolean }) => (
  <Section borderRadius={6} border="1px solid var(--color-black-300)" px={24} py={24}>
    <Flex direction="column" gap={24}>
      <Text font="spaceGrotesk" size={isMobile ? 'medium' : '3xlarge'} weight="semiBold" color="black-900">
        Payment information
      </Text>
      <Flex direction="column" gap={12}>
        <PaymentMethodSelector isMobile={isMobile} />
        <CardNumberField isMobile={isMobile} />
        <ExpiryCVCRow isMobile={isMobile} />
      </Flex>
    </Flex>
  </Section>
);

export const AddAddressForm = ({ isMobile = false }: AddAddressFormProps) => {
  const cancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <Section w="100%" bgColor="white" borderRadius="medium" p={24}>
      <Flex direction="column" gap={32}>
        <Flex direction="column" gap={32}>
          <DisplayNameSection isMobile={isMobile} />
          <ContactInformationSection isMobile={isMobile} />
          <ShippingAddressSection isMobile={isMobile} />
          <PaymentInformationSection isMobile={isMobile} />
        </Flex>
        <Section pt={56} pb={118}>
          <Flex
            justify="center"
            align="center"
            direction={isMobile ? 'column' : 'row'}
            gap={isMobile ? 16 : 112}
          >
            <Section onClick={cancel} borderRadius={6} bgColor="#454545" w={285} h={52}>
              <Flex width="100%" height="100%" align="center" justify="center">
                <Text font="spaceGrotesk" size="special2" weight="moderate" color="white">
                  Cancel
                </Text>
              </Flex>
            </Section>
            <Section w={285}>
              <Button variant="solidBlack" roundness="round" fullWidth size="medium">
                Submit
              </Button>
            </Section>
          </Flex>
        </Section>
      </Flex>
    </Section>
  );
};
