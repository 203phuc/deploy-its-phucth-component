import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons';
import { Section } from '@components/Atom/Section/Section';
import { Text } from '@components/Atom/Text';
import { useState } from 'react';

interface IconBlockProps {
  cartItem?: number; // or number if it's a count
}

export const IconBlock = ({ cartItem }: IconBlockProps) => {
  const [background, setBackground] = useState('transparent');
  return (
    <Flex align="center" gap={20}>
      <Icons iconSize={28} iconName="SearchIcon" />
      <Icons iconSize={28} iconName="UserIcon" />
      <Icons iconSize={28} iconName="HeartIcon" />
      <Section
        bgColor={background}
        onClick={() => console.log('your mom')}
        onMouseEnter={() => setBackground('gray')}
        onMouseLeave={() => setBackground('transparent')}
      >
        <Flex align="center" gap={4}>
          <Icons iconSize={28} iconName="BagIcon" />
          {cartItem ? (
            <Section w={20} bgColor="black" h={20} borderRadius="100%">
              <Flex width="100%" direction="row" height="100%" align="center" justify="center">
                <Text font="inter" color="white" weight="bold" size="xsmall">
                  {cartItem}
                </Text>
              </Flex>
            </Section>
          ) : null}
        </Flex>
      </Section>
    </Flex>
  );
};
