import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading/Heading';
import { Icons } from '@components/Atom/Icons/Icons';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section/Section';
import { CartItem } from './CartItem';

export const FlyoutCart = () => {
  return (
    <Section bgColor="white" w={460} h="100%" pt={24} px={24}>
      <Section py={12} w="100%">
        <Flex align="center" justify="space-between" width="100%">
          <Heading font="spaceGrotesk" weight="moderate" size="h5">
            Cart
          </Heading>
          <Icons iconName="CloseIcon" iconSize={32} />
        </Flex>
      </Section>
      <Position position="relative">
        <Section w="100%" h={1236}>
          {/* Cart items will go here */}
          <CartItem />
        </Section>
      </Position>
    </Section>
  );
};
