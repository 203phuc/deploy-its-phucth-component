import { Flex } from '@components/Atom/Flex';
import { Overlay } from '@components/Atom/Overlay';
import { Section } from '@components/Atom/Section/Section';
import { PageHeaderProps } from '@pages/Shoppage/components/PageHeader';
import React from 'react';
import { FilterSideBar } from './FilterSideBar';
import { ProductCardProps } from './ProductCard';
import { ProductGrid, type ColumnType } from './ProductGrid';
import { ToolBar } from './ToolBar';

interface ProductGridLayoutProps {
  isMobile: boolean;
  products: ProductCardProps[];
  columns: ColumnType;
  setColumns: React.Dispatch<React.SetStateAction<ColumnType>>;
  filter?: boolean;
  setFilter?: React.Dispatch<React.SetStateAction<boolean>>;
  component?: React.ReactElement<PageHeaderProps>;
}

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
      <Flex gap={32}>
        {filter &&
          (isMobile ? (
            <Overlay>
              <FilterSideBar setFilter={setFilter} />
            </Overlay>
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
          <ProductGrid product={products} columns={columns} isMobile={isMobile} />
        </Section>
      </Flex>
    </Flex>
  </Section>
);
