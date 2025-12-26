import { Button } from '@components/Atom/Button/Button';
import { Flex } from '@components/Atom/Flex';
import { Section } from '@components/Atom/Section/Section';
import { Text } from '@components/Atom/Text/Text';
import { categories } from '@pages/Shoppage/mockData/select';
import { useState } from 'react';

interface SelectProps {
  items?: string[];
  setOption?: React.Dispatch<React.SetStateAction<string[] | undefined>>;
}

export const Select = ({ items = categories, setOption }: SelectProps) => {
  const [selected, setSelected] = useState<string | null>(null);
  const handleSelect = (category: string) => {
    setSelected(category);
    setOption?.([category]);
  };
  return (
    <Section w={262} h={192} mt={16} overflow="auto">
      <Flex direction="column" gap={12} align="start">
        {items?.map((category) => (
          <Button
            onClick={() => handleSelect(category)}
            key={category}
            color="black-700"
            font="inter"
            size="small"
            variant={selected === category ? 'underline' : 'text'}
          >
            <Text
              font="inter"
              color={selected === category ? 'black-900' : 'black-600'}
              weight="semiBold"
              size="small"
            >
              {category}
            </Text>
          </Button>
        ))}
      </Flex>
    </Section>
  );
};
