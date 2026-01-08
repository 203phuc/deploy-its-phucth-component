// CartSummary.tsx
import { Button } from '@components/Atom/Button/Button';
import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons/Icons';
import { Input } from '@components/Atom/Input/Input';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section/Section';
import { Text } from '@components/Atom/Text/Text';

export const CartSummary = ({ subtotal }: { subtotal: number }) => {
  return (
    <Flex direction="column" gap={16}>
      <Input placeholder="Enter your coupon code" size="large" buttonEnd={<Button>Apply</Button>} />

      <Section px={16} py={16} border="1px solid var(--color-black-300)" borderRadius={8}>
        <Section mb={16}>
          <Position position="relative">
            <Flex gap={16} height={52} direction="column">
              <Flex justify="space-between">
                <Flex align="center" gap={3}>
                  <Icons iconName="CouponIcon" iconSize={20} color="black" />
                  <Text size="medium">Label</Text>
                </Flex>
                <Flex>
                  <Text color="teal-600">$0.00</Text>
                  <Button variant="text">
                    <Text color="teal-600">[Remove]</Text>
                  </Button>
                </Flex>
              </Flex>
              <Position position="absolute" bottom={0}>
                <Section bgColor="var(--color-black-200)" h={1} />
              </Position>
            </Flex>
          </Position>
        </Section>

        <Section mb={16}>
          <Flex justify="space-between">
            <Text>Subtotal</Text>
            <Text weight="semiBold">${subtotal.toFixed(2)}</Text>
          </Flex>
        </Section>

        <Section mb={24}>
          <Flex justify="space-between">
            <Text size="large" weight="semiBold">
              Total
            </Text>
            <Text size="large" weight="bold">
              ${subtotal.toFixed(2)}
            </Text>
          </Flex>
        </Section>

        <Button size="medium" roundness="round" fullWidth>
          Checkout
        </Button>
      </Section>
    </Flex>
  );
};
