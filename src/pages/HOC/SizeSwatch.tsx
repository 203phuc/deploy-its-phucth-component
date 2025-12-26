import Flex from '@components/Atom/Flex/Flex';
import { Section } from '@components/Atom/Section/Section';
import { Text } from '@components/Atom/Text/Text';
import { useState } from 'react';

interface SizeSwatchProps {
  sizes: string[];
}

const SizeSwatch = ({ sizes }: SizeSwatchProps) => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const toggleSize = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]));
  };
  return (
    <Section mt={16}>
      <Flex gap={16} wrap="wrap">
        {sizes?.map((size) => {
          const isSelected = selectedSizes.includes(size);
          return (
            <Section
              onClick={() => toggleSize(size)}
              key={size}
              h={38}
              px={14}
              border={`1px solid ${isSelected ? 'var(--color-black-900)' : 'var(--color-black-300)'}`}
            >
              <Flex height={36} key={size} align="center" justify="center">
                <Text size="small" color="black-900">
                  {size}
                </Text>
              </Flex>
            </Section>
          );
        })}
      </Flex>
    </Section>
  );
};

export default SizeSwatch;
