import { Flex } from '@components/Atom/Flex';
import Heading from '@components/Atom/Heading/Heading.tsx';
import { Section } from '@components/Atom/Section';
import { useState } from 'react';
import { BillingShippingSection } from './components/BillingShippingSection';
import { OrderSummarySection } from './components/OrderSummarySection';
import { useCheckoutPage } from './hooks/useCheckoutPage';

const CheckoutPageContent = () => {
  const [shippingMethod, setShippingMethod] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const { isMobile } = useCheckoutPage();

  return (
    <Section w={isMobile ? 343 : 1108}>
      <Flex direction="column" gap={24} justify="center" align="center" width="100%">
        {/* Header */}
        <Section py={52}>
          <Flex justify="center" align="center" width="100%">
            <Heading font="spaceGrotesk" size="h3" weight="moderate" color="black-900">
              Checkout
            </Heading>
          </Flex>
        </Section>

        {/* Checkout Content */}
        <Flex
          direction={isMobile ? 'column' : 'row'}
          justify={isMobile ? 'center' : 'space-between'}
          align="start"
          gap={isMobile ? 16 : 24}
        >
          {/* Order Summary - Mobile First */}

          {/* Billing & Shipping */}
          <BillingShippingSection
            isMobile={isMobile}
            shippingMethod={shippingMethod}
            setShippingMethod={setShippingMethod}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />

          {/* Order Summary - Desktop */}
          {!isMobile && <OrderSummarySection isMobile={false} />}
        </Flex>
      </Flex>
    </Section>
  );
};

export const CheckoutPage = () => {
  return <CheckoutPageContent />;
};
