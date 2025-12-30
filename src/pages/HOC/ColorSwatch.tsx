import { Button } from '@components/Atom/Button/Button';
import { Flex } from '@components/Atom/Flex';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section/Section';
import { ColorSwatchProps, useColorSwatch } from './hooks/useColorSwatch';

export const ColorSwatch = ({ colors }: ColorSwatchProps) => {
  const { selectedColors, toggleColor } = useColorSwatch();

  return (
    <Section mt={16}>
      <Flex width={254} gap={8} wrap="wrap">
        {colors.map((color) => {
          const isSelected = selectedColors.includes(color);

          return (
            <Button key={color} variant="text" onClick={() => toggleColor(color)}>
              <Position position="relative">
                <Section w={38} h={38}>
                  <Section
                    w="100%"
                    h="100%"
                    border={`${isSelected ? '1px solid var(--color-black-500)' : ''}`}
                    borderRadius="100%"
                  >
                    <Position position="absolute" top={0} left={0}>
                      <Section
                        w={isSelected ? 30 : 38}
                        h={isSelected ? 30 : 38}
                        mx={isSelected ? 4 : 0}
                        my={isSelected ? 4 : 0}
                        bgColor={color}
                        borderRadius="100%"
                      />
                    </Position>
                  </Section>
                </Section>
              </Position>
            </Button>
          );
        })}
      </Flex>
    </Section>
  );
};
