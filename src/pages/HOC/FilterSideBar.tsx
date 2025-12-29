import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { SliderBar } from '@components/Molecule/SliderBar/SliderBar';
import { ColorSwatch } from './ColorSwatch';
import { Select } from './Select';
import SizeSwatch from './SizeSwatch';

interface FilterSideBarProps {
  items?: string[];
  setOption?: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  setFilter?: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile?: boolean;
}

const colors = [
  'var(--color-teal-500)',
  'var(--color-indigo-200)',
  'var(--color-red-500)',
  'var(--color-black-900)',
];
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const FilterSideBar = ({ items, setOption, setFilter, isMobile }: FilterSideBarProps) => {
  return (
    <Section bgColor="white" w={310} h={1024} px={24} py={24}>
      <Flex direction="column" gap={32} width={262} height={976}>
        <Flex align="center" width="100%" justify="space-between">
          <Text color="black-900" font="inter" weight="semiBold" size="3xlarge">
            Filter
          </Text>
          <Icons iconName="CloseIcon" iconSize={24} box boxSize={24} onClick={() => setFilter?.(false)} />
        </Flex>
        <Flex direction="column" gap={40}>
          <Section>
            <Text color="black-900" font="inter" weight="semiBold" size="small">
              CATEGORIES
            </Text>
            <Select items={items} setOption={setOption} />
          </Section>
          <Section>
            <Text color="black-900" font="inter" weight="semiBold" size="small">
              COLOR
            </Text>
            <ColorSwatch colors={colors} />
          </Section>
          <Section>
            <Text color="black-900" font="inter" weight="semiBold" size="small">
              SIZE
            </Text>
            <SizeSwatch sizes={sizes} />
          </Section>
          <Section>
            <Text color="black-900" font="inter" weight="semiBold" size="small">
              PRICE
            </Text>
            <Section mt={16}>
              <SliderBar size="special" min={25} max={3000} />
            </Section>
          </Section>
          {!isMobile && (
            <Section>
              <Text color="black-900" font="inter" weight="semiBold" size="small">
                STYLE
              </Text>
              <Select items={items} setOption={setOption} />
            </Section>
          )}
        </Flex>
      </Flex>
    </Section>
  );
};
