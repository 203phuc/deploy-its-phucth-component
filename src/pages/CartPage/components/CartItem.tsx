import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Input } from '@components/Atom/Input';
import type { InputChangeEvent } from '@components/Atom/Input/type';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { CartItem as CartItemType } from '../hooks/useCartPage';

interface CartItemProps {
  item: CartItemType;
  isMobile: boolean;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

export const CartItem = ({ item, isMobile, onUpdateQuantity, onRemove }: CartItemProps) => {
  return (
    <Section h={150} w={1108}>
      <Flex justify="space-between" align="center" className="w-full">
        {/* Column 1: Image and Product Info */}
        <Flex align="center" gap={24} flex={2}>
          <Section w={77} h={102} borderRadius="medium" overflow="hidden">
            <ImagePlaceholder src={item.image} alt={item.name} size="full" />
          </Section>
          <Flex justify="center" align="start" direction="column" gap={8} width={224}>
            <Text size={isMobile ? 'small' : 'medium'} weight="semiBold" color="black-900">
              {item.name}
            </Text>
            {(item.size ?? item.color) && (
              <Text size={isMobile ? 'xsmall' : 'small'} color="black-600">
                {item.size && `Size: ${item.size}`}
                {item.size && item.color && ', '}
                {item.color && `Color: ${item.color}`}
              </Text>
            )}
            <Button variant="text" size="xsmall" onClick={onRemove}>
              <Flex gap={4} align="center">
                <Text size="smedium" color="black-600">
                  Remove
                </Text>
              </Flex>
            </Button>
          </Flex>
        </Flex>

        {/* Column 2: Quantity Controls */}
        <Flex justify="center" flex={1}>
          <Section w={80} h={34} border="1px solid #E5E5E5" borderRadius={6} overflow="hidden">
            <Input
              textAlign="center"
              size="special1"
              textSize="small"
              variant="noBorder"
              iconEnd={
                <Icons
                  box
                  iconName="PlusIcon"
                  iconSize={16}
                  color="black"
                  className="cursor-pointer"
                  onClick={() => onUpdateQuantity(item.quantity + 1)}
                />
              }
              iconStart={
                <Icons
                  box
                  iconName="MinusIcon"
                  iconSize={16}
                  color="black"
                  className="cursor-pointer"
                  onClick={() => onUpdateQuantity(item.quantity - 1)}
                />
              }
              type="text"
              value={item.quantity}
              onChange={(e: InputChangeEvent) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value) && value >= 1) {
                  onUpdateQuantity(value);
                }
              }}
              min={1}
            />
          </Section>
        </Flex>

        {/* Column 3: Price */}
        <Flex justify="center" flex={1}>
          <Text size={isMobile ? 'medium' : 'large'} weight="moderate" color="black-900">
            ${item.price.toFixed(2)}
          </Text>
        </Flex>

        {/* Column 4: Subtotal */}
        <Flex justify="end" flex={1}>
          <Text size={isMobile ? 'medium' : 'large'} weight="moderate" color="black-900">
            ${(item.price * item.quantity).toFixed(2)}
          </Text>
        </Flex>
      </Flex>
      <Section mt={24} w="100%" h={1} bgColor="#E5E5E5"></Section>
    </Section>
  );
};
