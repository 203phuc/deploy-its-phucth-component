import { PageHeader } from '@pages/HOC/PageHeader';
import { useState } from 'react';
import { BlogGridLayout } from './components/BlogGridLayout';
import { useBlogPage } from './hooks/useBlogPage';
import { blogs } from './mockData/blogs';

const BlogPageContent = () => {
  const { isMobile, columns, setColumns } = useBlogPage();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Fake pagination settings - show all blogs but fake pagination
  const fakeTotalPages = 12; // Fake 12 pages to show more than 6 numbers

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Convert all Blog data to BlogCardProps format (show all blogs)
  const blogCardData = filteredBlogs.map((blog) => ({
    id: blog.id,
    imageUrl: blog.image,
    title: blog.title,
    date: blog.date,
    description: blog.description,
  }));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Don't scroll since we're showing all content
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <BlogGridLayout
      isMobile={isMobile}
      blogs={blogCardData}
      columns={columns}
      setColumns={setColumns}
      currentPage={currentPage}
      totalPages={fakeTotalPages}
      onPageChange={handlePageChange}
      component={
        <PageHeader
          isMobile={isMobile}
          title="Blog"
          subtitle="Discover insights, tips, and stories about sustainable living, home decor, and modern lifestyle."
          backgroundImage="https://res.cloudinary.com/dnuicbze9/image/upload/v1768298653/contactuspageheader_ctbvke.jpg"
          showSearch={true}
          onSearchChange={handleSearchChange}
          searchPlaceholder="Search articles..."
        />
      }
    />
  );
};

export const BlogPage = () => {
  return <BlogPageContent />;
};

export default BlogPage;
