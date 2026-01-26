import { Badge } from '@components/Atom/Badge/Badge';
import { Button } from '@components/Atom/Button/Button';
import { Flex } from '@components/Atom/Flex';
import Grid from '@components/Atom/Grid/Grid';
import { Icons } from '@components/Atom/Icons/Icons';
import { Position } from '@components/Atom/Position/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text/Text';
import { Dropdown } from '@components/Molecule/Dropdown';
import { blogs } from '@pages/BlogPage/mockData/blogs';
import { sortItem } from '@pages/Shoppage/mockData/dropdown';
import { ToolBarProps, useToolBar } from './hooks/useToolBar';

export const ToolBar = ({
  productCount,
  isMobile,
  setColumns,
  setFilter,
  filter,
  maxColumns,
  itemType = 'products',
}: ToolBarProps) => {
  const { selected, openSort, setOpenSort, handleSelect, icons, iconsMobile } = useToolBar({
    isMobile,
    filter,
    setColumns,
    maxColumns,
  });

  const getItemText = (count: number, type: 'products' | 'articles'): string => {
    const singular = type === 'products' ? 'product' : 'article';
    const plural = type === 'products' ? 'products' : 'articles';
    return `${count} ${count === 1 ? singular : plural}`;
  };

  if (isMobile) {
    return (
      <Section w="100%" h={129} my={16}>
        <Flex direction="column" gap={16}>
          <Flex justify="space-between" align="center" width="100%">
            <Text color="black-600" size="small" align="center">
              {getItemText(productCount, itemType)}
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
          {itemType !== 'articles' && (
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
          )}
        </Flex>
      </Section>
    ); // spacer for mobile
  }
  return (
    <Section mb={16} mt={16}>
      <Flex direction="column" gap={12}>
        {itemType !== 'articles' && (
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
        )}
        <Flex justify="space-between" width="100%" align="center">
          <Text color="black-600" size="medium" align="center">
            {getItemText(productCount, itemType)}
          </Text>
          <Flex align="center" gap={32}>
            <Button
              onClick={() => setFilter?.((prev) => !prev)}
              font="spaceGrotesk"
              size="small"
              variant="text"
            >
              Filter <Icons iconName="SettingIcon" />
            </Button>
            <Dropdown
              align="center"
              variant="sm"
              isOpen={openSort}
              disabled={false}
              options={sortItem}
              textSize="smedium"
            >
              <Button
                onClick={() => setOpenSort((prev) => !prev)}
                font="spaceGrotesk"
                size="small"
                variant={openSort ? 'underline' : 'text'}
              >
                Sort by <Icons iconName="ChevronDownIcon" />
              </Button>
            </Dropdown>

            <Section
              borderRadius={4}
              bgColor="var(--color-black-200)"
              border="1px solid var(--color-black-200)"
              overflow="hidden"
              w={filter || blogs ? 184 : 230}
              h={40}
            >
              <Grid
                columns={filter ? 4 : 5}
                gap={1} // fake inner borders
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
