import { Badge } from '@components/Atom/Badge/Badge';
import { Button } from '@components/Atom/Button/Button';
import { Flex } from '@components/Atom/Flex';
import Grid from '@components/Atom/Grid/Grid';
import { Icons } from '@components/Atom/Icons/Icons';
import { Position } from '@components/Atom/Position/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text/Text';
import { Dropdown } from '@components/Molecule/Dropdown';
import { sortItem } from '@pages/Shoppage/mockData/dropdown';
import { useEffect, useRef, useState } from 'react';
import { type ColumnType } from './ProductGrid';

interface ToolBarProps {
  productCount: number;
  isMobile?: boolean;
  setColumns: React.Dispatch<React.SetStateAction<ColumnType>>;
  setFilter?: React.Dispatch<React.SetStateAction<boolean>>;
  filter?: boolean;
}
type ColumnIcon = 'ListIcon' | 'FiveColumnsIcon' | 'FourColumnsIcon' | 'ThreeColumnsIcon' | 'TwoColumnsIcon';
const columnMap: Record<ColumnIcon, ColumnType> = {
  ListIcon: 'list',
  FiveColumnsIcon: '5column',
  FourColumnsIcon: '4column',
  ThreeColumnsIcon: '3column',
  TwoColumnsIcon: '2column',
};
const columnFilterMap: Record<ColumnIcon, ColumnType> = {
  ListIcon: 'listColumnFilter',
  FourColumnsIcon: '4columnFilter',
  ThreeColumnsIcon: '3columnFilter',
  TwoColumnsIcon: '2columnFilter',
  FiveColumnsIcon: '4columnFilter',
};

const columnMapMobile: Record<ColumnIcon, ColumnType> = {
  ListIcon: 'listMobile',
  TwoColumnsIcon: '2columnMobile',
  FourColumnsIcon: '2columnMobile',
  ThreeColumnsIcon: '2columnMobile',
  FiveColumnsIcon: '2columnMobile',
};

const normalColumnMap: Record<ColumnType, ColumnType> = {
  '4columnFilter': '4column',
  '3columnFilter': '3column',
  '2columnFilter': '2column',
  listColumnFilter: 'list',
  '2columnMobile': '2column',
  listMobile: 'list',
  '5column': '5column',
  '4column': '4column',
  '3column': '3column',
  '2column': '2column',
  list: 'list',
};

export const ToolBar = ({ productCount, isMobile, setColumns, setFilter, filter }: ToolBarProps) => {
  const filterColumnMap = useRef<Record<ColumnType, ColumnType>>({
    '5column': '4columnFilter',
    '4column': '4columnFilter',
    '3column': '3columnFilter',
    '2column': '2columnFilter',
    list: isMobile ? 'listMobile' : 'listColumnFilter',
    listMobile: filter ? 'listColumnFilter' : 'list',
    '2columnMobile': '2columnMobile', // stays same
    '4columnFilter': '4columnFilter',
    '3columnFilter': '3columnFilter',
    '2columnFilter': '2columnFilter',
    listColumnFilter: 'listColumnFilter',
  }).current;
  const handleSelect = (item: ColumnIcon) => {
    if (filter && item === 'FiveColumnsIcon') return; //block on filter selected

    setSelected(item);
    if (isMobile) {
      setColumns(columnMapMobile[item]);
      return;
    }

    if (filter) {
      setColumns(columnFilterMap[item]);
      return;
    }

    setColumns(columnMap[item]);
  };
  const [selected, setSelected] = useState<ColumnIcon>('FiveColumnsIcon');
  const [openSort, setOpenSort] = useState<boolean>(false);
  useEffect(() => {
    if (isMobile) {
      setColumns('2columnMobile');
      setSelected('TwoColumnsIcon');
      return;
    }
    if (filter) {
      setColumns((prev) => {
        const newColumn = filterColumnMap[prev] || prev;
        setSelected(() => {
          // Map the new column to the correct icon
          switch (newColumn) {
            case '4columnFilter':
              return 'FourColumnsIcon';
            case '3columnFilter':
              return 'ThreeColumnsIcon';
            case '2columnFilter':
              return 'TwoColumnsIcon';
            case 'listColumnFilter':
              return 'ListIcon';
            default:
              return 'FiveColumnsIcon'; // fallback
          }
        });
        return newColumn;
      });
    } else {
      setColumns((prev) => normalColumnMap[prev]);
    }
  }, [filter, setColumns, isMobile, filterColumnMap]);
  const icons = (
    filter
      ? ['FourColumnsIcon', 'ThreeColumnsIcon', 'TwoColumnsIcon', 'ListIcon']
      : ['FiveColumnsIcon', 'FourColumnsIcon', 'ThreeColumnsIcon', 'TwoColumnsIcon', 'ListIcon']
  ) as ColumnIcon[];
  const iconsMobile = ['TwoColumnsIcon', 'ListIcon'] as ColumnIcon[];
  if (isMobile) {
    return (
      <Section w="100%" h={129} my={16}>
        <Flex direction="column" gap={16}>
          <Flex justify="space-between" align="center" width="100%">
            <Text color="black-600" size="small" align="center">
              {productCount} products
            </Text>
            <Button
              onClick={() => setOpenSort((prev) => !prev)}
              font="spaceGrotesk"
              size="xsmall"
              variant="underline"
            >
              Sort by
              <Dropdown isOpen={openSort} disabled={false} options={sortItem} />
            </Button>
          </Flex>
          <Section w="100%" h={1} bgColor="var(--color-black-200)" />
          <Flex justify="space-between" align="center" width="100%">
            <Button
              onClick={() => setFilter?.((prev) => !prev)}
              font="spaceGrotesk"
              size="small"
              variant="text"
            >
              Filter <Icons iconName="SettingIcon" />
            </Button>
            <Section
              borderRadius={4}
              bgColor="var(--color-black-200)"
              border="1px solid var(--color-black-200)"
              overflow="hidden"
              w={72}
              h={32}
            >
              <Grid
                columns={2}
                gap={1} // fake inner borders
                width="100%"
                height="100%"
              >
                {iconsMobile.map((icon) => (
                  <Position key={icon} position="relative" zIndex={5}>
                    <Section
                      key={icon}
                      bgColor={selected === icon ? 'var(--color-black-100)' : 'white'}
                      onClick={() => handleSelect(icon)}
                      w={35}
                      h={32}
                    >
                      <Flex align="center" justify="center" width="100%" height="100%">
                        <Icons
                          iconName={icon}
                          iconSize={19}
                          color={selected === icon ? 'black' : 'black-400'}
                        />
                      </Flex>
                    </Section>
                  </Position>
                ))}
              </Grid>
            </Section>
          </Flex>
          <Flex align="center" gap={16}>
            <Badge theme="whiteSolid" roundness="rounded" color="gray" size="small">
              <Icons iconName="CloseIcon" iconSize={14} color="black" />
              Plants
            </Badge>
            <Badge theme="whiteSolid" roundness="rounded" color="gray" size="small">
              <Icons iconName="CloseIcon" iconSize={14} color="black" />
              Plants
            </Badge>
            <Button variant="text" textColor="gray" size="specialSmall" font="inter">
              <Icons iconName="CloseIcon" iconSize={14} color="black-600" />
              Clear
            </Button>
          </Flex>
        </Flex>
      </Section>
    ); // spacer for mobile
  }
  return (
    <Section mb={16} mt={16}>
      <Flex direction="column" gap={12}>
        <Flex align="center" gap={16}>
          <Badge theme="whiteSolid" roundness="rounded" color="gray" size="small">
            <Icons iconName="CloseIcon" iconSize={14} color="black" />
            Plants
          </Badge>
          <Badge theme="whiteSolid" roundness="rounded" color="gray" size="small">
            <Icons iconName="CloseIcon" iconSize={14} color="black" />
            Plants
          </Badge>
          <Button variant="text" textColor="gray" size="specialSmall" font="inter">
            <Icons iconName="CloseIcon" iconSize={14} color="black-600" />
            Clear
          </Button>
        </Flex>
        <Flex justify="space-between" width="100%" align="center">
          <Text color="black-600" size="medium" align="center">
            {productCount} products
          </Text>
          <Flex gap={32}>
            <Button
              onClick={() => setFilter?.((prev) => !prev)}
              font="spaceGrotesk"
              size="small"
              variant="text"
            >
              Filter <Icons iconName="SettingIcon" />
            </Button>
            <Button font="spaceGrotesk" size="small" variant="text">
              Sort by <Icons iconName="ChevronDownIcon" />
            </Button>

            <Section
              borderRadius={4}
              bgColor="var(--color-black-200)"
              border="1px solid var(--color-black-200)"
              overflow="hidden"
              w={filter ? 184 : 230}
              h={40}
            >
              <Grid
                columns={filter ? 4 : 5}
                gap={1} // fake inner borders
                width="100%"
                height="100%"
              >
                {icons.map((icon) => {
                  return (
                    <Position key={icon} position="relative" zIndex={5}>
                      <Section
                        key={icon}
                        bgColor={selected === icon ? 'var(--color-black-100)' : 'white'}
                        onClick={() => handleSelect(icon)}
                        w={45}
                        h={40}
                      >
                        <Flex align="center" justify="center" width="100%" height="100%">
                          <Icons
                            iconName={icon}
                            iconSize={24}
                            color={selected === icon ? 'black' : 'black-400'}
                          />
                        </Flex>
                      </Section>
                    </Position>
                  );
                })}
              </Grid>
            </Section>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
};
