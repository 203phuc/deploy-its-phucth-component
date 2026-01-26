import { Grid } from '@components/Atom/Grid';
import { ColumnType } from '@pages/HOC/hooks/type';
import { BlogCard } from './BlogCard';

// Import the columnMap from ProductGrid
const columnMap: Record<ColumnType, number> = {
  list: 1,
  '5column': 5,
  '4column': 4,
  '3column': 3,
  '2column': 2,
  listMobile: 1,
  '4columnFilter': 4,
  '3columnFilter': 3,
  '2columnFilter': 2,
  '2columnMobile': 2,
  listColumnFilter: 1,
};

interface BlogCardProps {
  imageUrl?: string;
  title?: string;
  date?: string;
  description?: string;
}

interface BlogGridProps {
  blogs: BlogCardProps[];
  columns: ColumnType;
  isMobile?: boolean;
}

export const BlogGrid = ({ blogs, columns, isMobile = false }: BlogGridProps) => {
  const gridColumns = isMobile ? columnMap.list : columnMap[columns];
  const gridGap = isMobile ? 16 : 32;

  const getCardSize = (): ColumnType => {
    if (isMobile) {
      return 'listMobile';
    }
    return columns;
  };

  const cardSize = getCardSize();

  return (
    <Grid columns={`repeat(${gridColumns}, 1fr)`} gap={gridGap}>
      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} size={cardSize} />
      ))}
    </Grid>
  );
};
