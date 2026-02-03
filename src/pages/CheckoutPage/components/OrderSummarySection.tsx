import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import Icons from '@components/Atom/Icons';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Input } from '@components/Atom/Input/Input';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';

interface OrderSummarySectionProps {
  isMobile?: boolean;
}

export const OrderSummarySection = ({ isMobile = false }: OrderSummarySectionProps) => {
  return (
    <Section border="1px solid #CBCBCB" borderRadius={6} py={16} px={24} w={isMobile ? 343 : 424} h={516}>
      <Flex direction="column" gap={24} height="100%">
        <Text size="xlarge" font="spaceGrotesk" weight="semiBold" color="black-900">
          Order Summary
        </Text>

        {/* Order Items */}
        <Flex direction="column" gap={12}>
          <Section w="100%" h={134}>
            <Flex align="start" justify="center" height="100%" gap={12}>
              <Flex height="100%" align="center">
                <Section w={77} h={102}>
                  <ImagePlaceholder
                    size="full"
                    src="https://images.unsplash.com/photo-1580902394836-21e0d429b7f4?q=80&w=762&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={''}
                  />
                </Section>
              </Flex>
              <Flex flex={1} height="100%" direction="column" justify="center" gap={8}>
                <Text size="small" weight="semiBold" color="black-900">
                  Product Name
                </Text>
                <Text size="xsmall" color="black-600">
                  Size: M, Color: Blue
                </Text>
                <Section w={82} h={32}>
                  <Input
                    textAlign="center"
                    size="small"
                    iconEnd={
                      <Icons
                        box
                        iconName="PlusIcon"
                        iconSize={16}
                        color="black"
                        className="cursor-pointer"
                        onClick={() => console.log('increment quantity')}
                      />
                    }
                    iconStart={
                      <Icons
                        box
                        iconName="MinusIcon"
                        iconSize={16}
                        color="black"
                        className="cursor-pointer"
                        onClick={() => console.log('decrement quantity')}
                      />
                    }
                    type="text"
                    value={1}
                    onChange={(e) => console.log('quantity change:', e.target.value)}
                    min={1}
                  />
                </Section>
              </Flex>
              <Flex height="100%" align="center">
                <Section h={100}>
                  <Text size="small" weight="semiBold" color="black-900">
                    $99.99
                  </Text>
                </Section>
              </Flex>
            </Flex>
            <Section w="100%" h={1} bgColor="#CBCBCB" />
          </Section>
        </Flex>
        <Flex gap={12}>
          <Section w={263}>
            <Input placeholder="Input" size="xlarge" />
          </Section>
          <Section>
            <Button size="medium" roundness="round">
              Apply
            </Button>
          </Section>
        </Flex>

        {/* Price Summary */}
        <PriceSummary />
      </Flex>
    </Section>
  );
};

const PriceSummary = () => (
  <Flex direction="column" gap={13}>
    <Section>
      <Flex justify="space-between">
        <Flex align="center" gap={3}>
          <Icons iconName="CouponIcon" iconSize={20} color="black" />
          <Text size="medium">Label</Text>
        </Flex>
        <Flex gap={8}>
          <Text weight="semiBold" color="teal-600">
            -$0.00
          </Text>
          <Button variant="text">
            <Text weight="semiBold" color="teal-600">
              [Remove]
            </Text>
          </Button>
        </Flex>
      </Flex>
    </Section>
    <Section w="100%" h={1} bgColor="#EAEAEA" />
    <Flex justify="space-between" align="center">
      <Text size="medium" color="black-600">
        Shipping
      </Text>
      <Text size="medium" weight="semiBold" color="black-900">
        $9.99
      </Text>
    </Flex>
    <Section w="100%" h={1} bgColor="#EAEAEA" />
    <Flex justify="space-between" align="center">
      <Text size="medium" color="black-600">
        Subtotal
      </Text>
      <Text size="medium" weight="semiBold" color="black-900">
        $99.99
      </Text>
    </Flex>
    <Flex justify="space-between" align="center" className="border-t border-gray-200 pt-4">
      <Text size="medium" weight="semiBold" color="black-900">
        Total
      </Text>
      <Text size="large" weight="bold" color="black-900">
        $118.78
      </Text>
    </Flex>
  </Flex>
);
