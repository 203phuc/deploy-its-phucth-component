import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import Icons from '@components/Atom/Icons';
import { Input } from '@components/Atom/Input/Input';
import { Logo } from '@components/Atom/Logo';
import { Position } from '@components/Atom/Position';
import { Radio } from '@components/Atom/Radio/Radio';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';

interface BillingShippingSectionProps {
  isMobile?: boolean;
  shippingMethod: string;
  setShippingMethod: (method: string) => void;
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
}

export const BillingShippingSection = ({
  isMobile = false,
  shippingMethod,
  setShippingMethod,
  paymentMethod,
  setPaymentMethod,
}: BillingShippingSectionProps) => {
  return (
    <Section pb={isMobile ? 24 : 52} w={isMobile ? '100%' : 652}>
      <Flex direction="column" gap={24}>
        <Text align="center" size="large" weight="regular" color="black-900">
          Returning customer? <b>Click here to login</b>
        </Text>

        <ExpressCheckout isMobile={isMobile} />
        <ContactInformation isMobile={isMobile} />
        <ShippingInformation isMobile={isMobile} />
        <ShippingMethodSection
          isMobile={isMobile}
          shippingMethod={shippingMethod}
          setShippingMethod={setShippingMethod}
        />
        <PaymentInformationSection
          isMobile={isMobile}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />

        <PrivacyPolicySection />
      </Flex>
    </Section>
  );
};

const ExpressCheckout = ({ isMobile }: { isMobile: boolean }) => (
  <Position position="relative">
    <Section w="100%" p="32px 24px 24px" border="1px solid #CBCBCB" borderRadius={8}>
      <Position position="absolute" top={-22} zIndex={10}>
        <Flex width={isMobile ? 343 : 602} justify="center">
          <Section w={177} h={42} bgColor="white">
            <Flex width="100%" height="100%" align="center" justify="center">
              <Text size="medium" weight="regular">
                Express Checkout
              </Text>
            </Flex>
          </Section>
        </Flex>
      </Position>
      <Flex direction="column" gap={16}>
        <Button variant="text" roundness="round">
          <Section borderRadius={6} w={isMobile ? 330 : 604} bgColor="#F5C658" h={52}>
            <Flex width="100%" height="100%" align="center" justify="center">
              <Logo width={82} height={21} logoName="PaypalLogo" />
            </Flex>
          </Section>
        </Button>
        <Button variant="text" roundness="round">
          <Section borderRadius={6} w={isMobile ? 330 : 604} border="1px solid #CBCBCB" h={52}>
            <Flex width="100%" height="100%" align="center" justify="center">
              <Logo width={82} height={21} logoName="GooglePayLogo" />
            </Flex>
          </Section>
        </Button>
      </Flex>
    </Section>
    <Section mt={12} w="100%" h={58}>
      <Flex height="100%" align="center" justify="center" gap={15}>
        <Section h={1} w="100%" bgColor="#EAEAEA" />
        <Text color="black-500">OR</Text>
        <Section h={1} w="100%" bgColor="#EAEAEA" />
      </Flex>
    </Section>
  </Position>
);

const ContactInformation = ({ isMobile }: { isMobile: boolean }) => (
  <Section w="100%" px={24} py={24} border="1px solid #E5E5E5" borderRadius={8}>
    <Flex direction="column" gap={16}>
      <Text size="3xlarge" weight="moderate" color="black-900" font="spaceGrotesk">
        Contact information
      </Text>
      <Flex direction="column" gap={34}>
        <Flex width="100%" flex={1} direction={isMobile ? 'column' : 'row'} gap={32}>
          <Section w={286}>
            <Input
              label="First name *"
              variant="solid"
              size="xlarge"
              textSize="medium"
              placeholder="Enter first name"
            />
          </Section>
          <Section w={286}>
            <Input label="Last name *" variant="solid" size="xlarge" placeholder="Enter last name" />
          </Section>
        </Flex>
        <Flex width="100%" direction={isMobile ? 'column' : 'row'} gap={32}>
          <Section w={286}>
            <Input label="Email Address *" variant="solid" size="xlarge" placeholder="Enter email address" />
          </Section>
          <Section w={286}>
            <Input label="Phone Number *" variant="solid" size="xlarge" placeholder="Enter phone number" />
          </Section>
        </Flex>
      </Flex>
    </Flex>
  </Section>
);

const ShippingInformation = ({ isMobile }: { isMobile: boolean }) => (
  <Section w="100%" p={24} border="1px solid #E5E5E5" borderRadius={8}>
    <Flex direction="column" gap={16}>
      <Text size="3xlarge" weight="moderate" color="black-900" font="spaceGrotesk">
        Shipping Information
      </Text>
      <Flex direction="column" gap={34}>
        <Flex width="100%" gap={32}>
          <Section w={604}>
            <Input
              label="Street Address *"
              variant="solid"
              size="xlarge"
              placeholder="Enter street address"
            />
          </Section>
        </Flex>
        <Flex width="100%" gap={32}>
          <Section w={604}>
            <Input label="Country *" variant="solid" size="xlarge" placeholder="Enter country" />
          </Section>
        </Flex>
        <Flex width="100%" gap={32}>
          <Section w={604}>
            <Input label="Town/City *" variant="solid" size="xlarge" placeholder="Enter town/city" />
          </Section>
        </Flex>
        <Flex width="100%" gap={isMobile ? 12 : 32}>
          <Section w={286}>
            <Input label="State *" variant="solid" size="xlarge" placeholder="Enter state" />
          </Section>
          <Section w={286}>
            <Input label="ZIP Code *" variant="solid" size="xlarge" placeholder="Enter ZIP code" />
          </Section>
        </Flex>
      </Flex>
    </Flex>
  </Section>
);

const ShippingMethodSection = ({
  isMobile,
  shippingMethod,
  setShippingMethod,
}: {
  isMobile: boolean;
  shippingMethod: string;
  setShippingMethod: (method: string) => void;
}) => (
  <Section w="100%" p={24} border="1px solid #E5E5E5" borderRadius={8}>
    <Flex direction="column" gap={16}>
      <Text size="3xlarge" weight="moderate" color="black-900" font="spaceGrotesk">
        Shipping Method
      </Text>
      <Flex direction="column" gap={24}>
        <ShippingOption
          method="standard"
          label="Free Shipping"
          price="$0.00"
          selected={shippingMethod === 'standard'}
          onSelect={() => setShippingMethod('standard')}
          isMobile={isMobile}
        />
        <ShippingOption
          method="express"
          label="Express Shipping"
          price="$+15.99"
          selected={shippingMethod === 'express'}
          onSelect={() => setShippingMethod('express')}
          isMobile={isMobile}
        />
      </Flex>
    </Flex>
  </Section>
);

const ShippingOption = ({
  method,
  label,
  price,
  selected,
  onSelect,
  isMobile,
}: {
  method: string;
  label: string;
  price: string;
  selected: boolean;
  onSelect: () => void;
  isMobile: boolean;
}) => (
  <Section
    px={isMobile ? 12 : 16}
    py={isMobile ? 10 : 13}
    border={`1px solid var(--color-${selected ? 'black-900' : 'black-300'})`}
    borderRadius={6}
  >
    <Flex justify="space-between">
      <Flex align="center" gap={isMobile ? 8 : 12}>
        <Radio
          checked={selected}
          onChange={(checked: boolean) => {
            console.log(`${method} shipping selected:`, checked);
            if (checked) onSelect();
          }}
          size="sm"
          shape="circle"
        />
        <Text size={isMobile ? 'small' : 'medium'} weight="regular" color="black-900">
          {label}
        </Text>
      </Flex>
      <Text size={isMobile ? 'small' : 'medium'} weight="regular" color="black-900">
        {price}
      </Text>
    </Flex>
  </Section>
);

const PaymentInformationSection = ({
  isMobile,
  paymentMethod,
  setPaymentMethod,
}: {
  isMobile: boolean;
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
}) => (
  <Section w="100%" p={24} border="1px solid #E5E5E5" borderRadius={8}>
    <Flex direction="column" gap={24}>
      <Text size="3xlarge" weight="moderate" color="black-900" font="spaceGrotesk">
        Payment Information
      </Text>
      <Flex direction="column" gap={12}>
        <PaymentOption
          method="card"
          label="Pay by Card"
          selected={paymentMethod === 'card'}
          onSelect={() => setPaymentMethod('card')}
        />
        <CardDetailsSection isMobile={isMobile} />
        <PaymentOption
          method="installment"
          label="$10 monthly installment"
          selected={paymentMethod === 'installment'}
          onSelect={() => setPaymentMethod('installment')}
          showAfterPay={true}
        />
        <PaymentOption
          method="paypal"
          label="Paypal"
          selected={paymentMethod === 'paypal'}
          onSelect={() => setPaymentMethod('paypal')}
        />
      </Flex>
    </Flex>
  </Section>
);

const PaymentOption = ({
  method,
  label,
  selected,
  onSelect,
  showAfterPay = false,
}: {
  method: string;
  label: string;
  selected: boolean;
  onSelect: () => void;
  showAfterPay?: boolean;
}) => (
  <>
    <Section
      px={16}
      py={13}
      border={`1px solid var(--color-${selected ? 'black-900' : 'black-300'})`}
      borderRadius={6}
    >
      <Flex justify="space-between">
        <Flex align="center" gap={12}>
          <Radio
            checked={selected}
            onChange={(checked: boolean) => {
              console.log(`${method} payment selected:`, checked);
              if (checked) onSelect();
            }}
            size="sm"
            shape="circle"
          />
          <Text size="medium" weight="regular" color="black-900">
            {label}
          </Text>
        </Flex>
        {showAfterPay && (
          <Section bgColor="#B2FCE4" borderRadius={50} w={86} h={30}>
            <Flex align="center" justify="center" width="100%" height="100%">
              <Icons iconSize={63} iconName="AfterPayIcon" />
            </Flex>
          </Section>
        )}
      </Flex>
    </Section>
    {method === 'card' && <Section m="20px 0px 12px" w="100%" h={1} bgColor="#CBCBCB" />}
  </>
);

const CardDetailsSection = ({ isMobile }: { isMobile: boolean }) => (
  <>
    <Flex direction="column" gap={4}>
      <Section w="100%">
        <Input
          label="Card Number *"
          variant="solid"
          placeholder="Card Number"
          size="xlarge"
          placeholderSize="medium"
          textSize="medium"
        />
      </Section>
    </Flex>
    <Flex direction={isMobile ? 'column' : 'row'} gap={isMobile ? 12 : 16}>
      <Flex direction="column" gap={4} flex={1}>
        <Section w="100%">
          <Input
            label="Expiry Date *"
            variant="solid"
            placeholder="MM/YY"
            size="xlarge"
            placeholderSize="medium"
            textSize="medium"
          />
        </Section>
      </Flex>
      <Flex direction="column" gap={4} flex={1}>
        <Section w="100%">
          <Input
            label="CVC Code *"
            variant="solid"
            placeholder="123"
            size="xlarge"
            placeholderSize="medium"
            textSize="medium"
          />
        </Section>
      </Flex>
    </Flex>
  </>
);

const PrivacyPolicySection = () => (
  <Section mt={24}>
    <Flex direction="column" gap={16}>
      <Text size="small" color="black-600" align="center">
        Your personal data will be used to process your order, support your experience throughout this
        website, and for other purposes described in our privacy policy.
      </Text>
      <Button variant="solidBlack" roundness="round" size="large" fullWidth>
        Place Order
      </Button>
      <Text size="xsmall" color="black-600" align="center">
        By placing your order, you agree to our Terms of Service and Privacy Policy
      </Text>
    </Flex>
  </Section>
);
