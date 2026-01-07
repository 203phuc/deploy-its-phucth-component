import { Button } from '@components/Atom/Button/Button';
import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons/Icons';
import { Input } from '@components/Atom/Input/Input';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section/Section';
import { Text } from '@components/Atom/Text/Text';
import { useEffect, useState } from 'react';
import { onSmallScreenChange } from '../../../../../src/util/mediaQueries';
import { products } from '../mockData/SampleProduct';
import { CartContent } from './CartContent';
import { Product } from './CartItem';
interface FlyoutCartProps {
  setFlyoutCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const FlyoutCart = ({ setFlyoutCartOpen }: FlyoutCartProps) => {
  const [cartItems, setCartItems] = useState<Product[]>(products);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const cleanup = onSmallScreenChange(setIsSmallScreen);
    return cleanup;
  }, []);

  const handleQuantityChange = (id: number, quantity: number) => {
    setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  if (isSmallScreen) {
    return (
      <Section bgColor="white" w={343} h="100vh" pt={24} px={24} pb={24}>
        <Flex direction="column" justify="space-between" height="100%">
          <CartContent
            cartItems={cartItems}
            onClose={() => setFlyoutCartOpen(false)}
            onQuantityChange={handleQuantityChange}
          />
          <Section>
            <Flex direction="column" gap={16}>
              <Input placeholder="Enter your coupon code" size="large" buttonEnd={<Button>Apply</Button>} />
              <Section px={16} py={16} border="1px solid var(--color-black-300)" borderRadius={8}>
                <Section mb={16}>
                  <Position position="relative">
                    <Flex gap={16} justify="center" width="100%" height={52} direction="column">
                      <Flex justify="space-between">
                        <Flex align="center" gap={3}>
                          <Icons iconName="CouponIcon" iconSize={20} color="black" />{' '}
                          <Text size="medium" color="black-900">
                            Label
                          </Text>
                        </Flex>
                        <Flex>
                          <Text color="teal-600">$0.00</Text>
                          <Button variant="text" font="inter">
                            <Text color="teal-600">[Remove]</Text>
                          </Button>
                        </Flex>
                      </Flex>
                      <Position position="absolute" zIndex={1000} bottom={0}>
                        <Section bgColor="var(--color-black-200)" w={376} h={1}></Section>
                      </Position>
                    </Flex>
                  </Position>
                </Section>
                <Position position="relative">
                  <Flex gap={16} justify="center" width={376} height={52} direction="column">
                    <Flex justify="space-between">
                      <Text size="medium" color="black-900">
                        Subtotal
                      </Text>
                      <Text size="medium" color="black-900" weight="semiBold">
                        ${subtotal.toFixed(2)}
                      </Text>
                    </Flex>
                    <Position position="absolute" zIndex={1000} bottom={0}>
                      <Section bgColor="var(--color-black-200)" w={376} h={1}></Section>
                    </Position>
                  </Flex>
                </Position>
                <Section mb={24}>
                  <Position position="relative">
                    <Flex gap={16} justify="center" width={376} height={52} direction="column">
                      <Flex justify="space-between">
                        <Text size="large" weight="semiBold" color="black-900">
                          Total
                        </Text>
                        <Text size="large" color="black-900" weight="bold">
                          ${subtotal.toFixed(2)}
                        </Text>
                      </Flex>
                    </Flex>
                  </Position>
                </Section>
                <Button size="medium" roundness="round" font="spaceGrotesk" fullWidth={true}>
                  Checkout
                </Button>
              </Section>
            </Flex>
          </Section>
        </Flex>
      </Section>
    );
  }
};
