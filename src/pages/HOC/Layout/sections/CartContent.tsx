import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading/Heading';
import { Icons } from '@components/Atom/Icons/Icons';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section/Section';
import { CartItem } from './CartItem';
import type { CartContentProps } from './types';

export const CartContent = ({ cartItems, onClose, onQuantityChange }: CartContentProps) => {
  return (
    <Section>
      <Section py={12} w="100%">
        <Flex align="center" justify="space-between" width="100%">
          <Heading font="spaceGrotesk" weight="moderate" size="h5" color="black-900">
            Cart
          </Heading>

          <button onClick={onClose} aria-label="Close cart">
            <Icons iconName="CloseIcon" iconSize={24} />
          </button>
        </Flex>
      </Section>

      {/* Items */}
      <Position position="relative">
        <Section w={420} h={402} overflow="hidden auto">
          {cartItems.map((item) => (
            <CartItem key={item.id} product={[item]} onQuantityChange={onQuantityChange} />
          ))}
        </Section>
      </Position>
    </Section>
  );
};
