import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { Dropdown } from '@components/Molecule/Dropdown';
import { useState } from 'react';
import { DropdownSelectorProps } from './types';

export const DropdownSelector = ({ options, value, onSelect, width = 95 }: DropdownSelectorProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Position position="relative">
      <Position position="absolute" left={-22}>
        <Dropdown
          direction="up"
          variant="xs"
          isOpen={open}
          options={options}
          textSize="smedium"
          // only provide the value when this dropdown is the selected one
          value={value}
          onSelect={onSelect}
          // let dropdown request closing (e.g. click outside)
        />
      </Position>
      <Section w={width} onClick={() => setOpen(!open)}>
        <Flex direction="row" align="center" justify="center" gap={2}>
          {options.find((opt) => opt.value === value)?.icon && (
            <Section pr={6}>
              <Icons iconName={options.find((opt) => opt.value === value)!.icon!} />
            </Section>
          )}
          <Text size="smedium" font="spaceGrotesk" color="black-900" weight="moderate">
            {value}
          </Text>
          <Icons iconSize={18} iconName={open ? 'ChevronUpIcon' : 'ChevronDownIcon'} />
        </Flex>
      </Section>
    </Position>
  );
};
