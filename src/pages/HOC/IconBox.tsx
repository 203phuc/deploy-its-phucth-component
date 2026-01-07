import { Flex } from '@components/Atom/Flex';
import { IconBaseProps, Icons } from '@components/Atom/Icons';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import React from 'react';
import { useIconBox } from './hooks/useIconBox';

export const IconBox = (props: { isMobile: boolean }) => {
  const { iconBoxItems, isMobile } = useIconBox(props);
  if (isMobile) {
    return (
      <Section px={16} py={32}>
        <Flex direction="column" gap={30} align="center" justify="center">
          {[iconBoxItems.slice(0, 2), iconBoxItems.slice(2, 4)].map((row, rowIndex) => (
            <Flex key={rowIndex} direction="row" gap={31}>
              {row.map((item, index) => (
                <Section key={`${rowIndex}-${index}`} w={156} h={84}>
                  <Flex direction="column" align="center" justify="center">
                    <Section pb={8}>
                      <Icons
                        iconSize={item.iconSize}
                        iconName={item.icon as IconBaseProps['iconName']}
                        strokeWidth={item.strokeWidth}
                      />
                    </Section>
                    <Text size="smedium" font="spaceGrotesk" weight="semiBold">
                      {item.title}
                    </Text>
                    <Text size="xsmall" font="inter" weight="regular">
                      {item.description}
                    </Text>
                  </Flex>
                </Section>
              ))}
            </Flex>
          ))}
        </Flex>
      </Section>
    );
  }

  return (
    <Section px={54.5} py={32}>
      <Flex direction="row" gap={80} align="center" justify="center">
        {iconBoxItems.map((item, index) => (
          <React.Fragment key={index}>
            <Section w={212} h={56}>
              <Flex direction="row" gap={12}>
                <Icons
                  iconSize={item.iconSize}
                  iconName={item.icon as IconBaseProps['iconName']}
                  strokeWidth={item.strokeWidth}
                />
                <Flex direction="column" gap={2} width={168} height={56}>
                  <Text size="special2" font="spaceGrotesk" weight="semiBold">
                    {item.title}
                  </Text>
                  <Text size="small" font="inter" weight="regular">
                    {item.description}
                  </Text>
                </Flex>
              </Flex>
            </Section>
            {index < iconBoxItems.length - 1 && <Section w={1} bgColor="var(--color-black-200)" h={135} />}
          </React.Fragment>
        ))}
      </Flex>
    </Section>
  );
};
