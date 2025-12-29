import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import { Overlay } from '@components/Atom/Overlay';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section/Section';
import { Text } from '@components/Atom/Text';
import { FilterSideBar } from './FilterSideBar';
import { ProductGridLayoutProps } from './hooks/type';
import { ProductGrid } from './ProductGrid';
import { ToolBar } from './ToolBar';

export const ProductGridLayout = ({
  filter,
  isMobile,
  setFilter,
  products,
  columns,
  setColumns,
  component,
}: ProductGridLayoutProps) => (
  <Section w="100%" px={isMobile ? 16 : 52} pb={isMobile ? 46 : 120}>
    <Flex width="100%" direction="column" align="center" justify="center">
      {component}
      <Flex width="100%" gap={32}>
        {filter &&
          (isMobile ? (
            <Position zIndex={10}>
              <Overlay position="left" onClose={() => setFilter?.(false)} isOpen={filter}>
                <FilterSideBar setFilter={setFilter} isMobile={isMobile} />
              </Overlay>
            </Position>
          ) : (
            <FilterSideBar setFilter={setFilter} />
          ))}

        <Section w={filter && !isMobile ? 994 : '100%'}>
          <ToolBar
            productCount={products.length}
            isMobile={isMobile}
            setColumns={setColumns}
            setFilter={setFilter}
            filter={filter}
          />
          {products.length > 0 ? (
            <ProductGrid product={products} columns={columns} isMobile={isMobile} />
          ) : (
            <Section w="100%" pt={46}>
              <Flex width="100%" align="center" justify="center" direction="column" gap={12}>
                <Heading font="spaceGrotesk" weight="moderate" color="black-900" size="h5">
                  No items were found.
                </Heading>
                <Text size="large">Try remove a filter</Text>
                <Section pt={30}>
                  <Button font="spaceGrotesk" roundness="round" size="medium">
                    Remove all
                  </Button>
                </Section>
              </Flex>
            </Section>
          )}
        </Section>
      </Flex>
    </Flex>
  </Section>
);
