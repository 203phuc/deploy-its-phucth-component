import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Radio } from '@components/Atom/Radio';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useState } from 'react';
import { useRouter } from '../../CustomHook/navigateHook';

interface CartSummaryProps {
  totalPrice: number;
  totalItems: number;
  isMobile: boolean;
}

export const CartSummary = ({ totalPrice, totalItems, isMobile }: CartSummaryProps) => {
  const [shippingMethod, setShippingMethod] = useState('standard');
  const { navigate } = useRouter();

  return (
    <Flex
      direction="column"
      width="100%"
      gap={24}
      className={`rounded-lg border border-gray-200 bg-white p-6 ${isMobile ? 'w-full' : 'w-96'}`}
    >
      <Text size="large" weight="semiBold" color="black-900">
        Cart Summary
      </Text>

      {/* Shipping Method Selector */}
      <Flex direction="column" gap={8}>
        <Section
          px={16}
          py={13}
          border={`1px solid var(--color-${shippingMethod === 'standard' ? 'black-900' : 'black-300'})`}
          borderRadius={6}
        >
          <Flex align="center" gap={12}>
            <Radio
              checked={shippingMethod === 'standard'}
              onChange={(checked: boolean) => {
                console.log('Standard shipping selected:', checked);
                if (checked) setShippingMethod('standard');
              }}
              size="sm"
              shape="circle"
            />
            <Text size={isMobile ? 'small' : 'medium'} weight="regular" color="black-900">
              Standard Shipping {totalPrice > 100 ? '(FREE)' : '($9.99)'}
            </Text>
          </Flex>
        </Section>

        <Section
          px={16}
          py={13}
          border={`1px solid var(--color-${shippingMethod === 'express' ? 'black-900' : 'black-300'})`}
          borderRadius={6}
        >
          <Flex align="center" gap={12}>
            <Radio
              checked={shippingMethod === 'express'}
              onChange={(checked: boolean) => {
                console.log('Express shipping selected:', checked);
                if (checked) setShippingMethod('express');
              }}
              size="sm"
              shape="circle"
            />
            <Text size={isMobile ? 'small' : 'medium'} weight="regular" color="black-900">
              Express Shipping ($19.99)
            </Text>
          </Flex>
        </Section>
      </Flex>

      <Flex direction="column" gap={12}>
        <Flex justify="space-between" align="center">
          <Text size="small" color="black-600">
            Subtotal ({totalItems} items)
          </Text>
          <Text size="small" weight="semiBold" color="black-900">
            ${totalPrice.toFixed(2)}
          </Text>
        </Flex>

        <Flex justify="space-between" align="center" className="border-t border-gray-200 pt-4">
          <Text size="medium" weight="semiBold" color="black-900">
            Total
          </Text>
          <Text size="large" weight="bold" color="black-900">
            ${totalPrice.toFixed(2)}
          </Text>
        </Flex>
      </Flex>

      <Flex direction="column" gap={12}>
        <Button
          variant="solidBlack"
          size="medium"
          fullWidth
          roundness="round"
          onClick={() => navigate('/checkout')}
        >
          Checkout
        </Button>
      </Flex>
    </Flex>
  );
};
