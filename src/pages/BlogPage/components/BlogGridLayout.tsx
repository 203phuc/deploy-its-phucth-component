import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { ColumnType } from '@pages/HOC/hooks/type';
import { Pagination } from '@pages/HOC/Pagination';
import { ToolBar } from '@pages/HOC/ToolBar';
import { BlogGrid } from './BlogGrid';

interface BlogCardProps {
  imageUrl?: string;
  title?: string;
  date?: string;
  description?: string;
}

interface BlogGridLayoutProps {
  isMobile: boolean;
  blogs: BlogCardProps[];
  columns: ColumnType;
  setColumns: React.Dispatch<React.SetStateAction<ColumnType>>;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  component?: React.ReactElement;
}

export const BlogGridLayout = ({
  blogs,
  isMobile,
  columns,
  setColumns,
  currentPage,
  totalPages,
  onPageChange,
  component,
}: BlogGridLayoutProps) => (
  <Section w="100%" px={isMobile ? 16 : 52} pb={isMobile ? 46 : 120}>
    <Flex width="100%" direction="column" align="center" justify="center">
      {component}
      <Section w="100%">
        <ToolBar
          productCount={blogs.length}
          isMobile={isMobile}
          setColumns={setColumns}
          maxColumns={4}
          itemType="articles"
        />
        {blogs.length > 0 ? (
          <Flex direction="column" align="center" justify="center">
            <BlogGrid blogs={blogs} columns={columns} isMobile={isMobile} />

            {/* Pagination */}

            <Section pt={isMobile ? 32 : 56}>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
                isMobile={isMobile}
                maxVisiblePages={isMobile ? 3 : 6}
              />
            </Section>
          </Flex>
        ) : (
          <Section w="100%" pt={46}>
            <Flex width="100%" align="center" justify="center" direction="column" gap={12}>
              <Heading font="spaceGrotesk" weight="moderate" color="black-900" size="h5">
                No articles were found.
              </Heading>
              <Text size="large">Try changing your filter or sort options</Text>
              <Section pt={30}>
                <Button font="spaceGrotesk" roundness="round" size="medium">
                  Clear all filters
                </Button>
              </Section>
            </Flex>
          </Section>
        )}
      </Section>
    </Flex>
  </Section>
);
