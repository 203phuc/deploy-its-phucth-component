import { Flex } from '@components/Atom/Flex';
import { Section } from '@components/Atom/Section/Section';
import { CartContent } from './CartContent';
import { CartSummary } from './CartSummary';
import { useFlyoutCart } from './hooks/useFlyoutCart';
import type { FlyoutCartProps } from './types';

export const FlyoutCart = ({ setFlyoutCartOpen, isMobile }: FlyoutCartProps) => {
  const { cartItems, subtotal, handleQuantityChange } = useFlyoutCart();

  return (
    <Section bgColor="white" w={isMobile ? 343 : 460} h="100vh" pt={24} px={24} pb={24}>
      <Flex direction="column" justify="space-between" height="100%">
        <CartContent
          cartItems={cartItems}
          onClose={() => setFlyoutCartOpen(false)}
          onQuantityChange={handleQuantityChange}
        />

        <CartSummary subtotal={subtotal} />
      </Flex>
    </Section>
  );
};
