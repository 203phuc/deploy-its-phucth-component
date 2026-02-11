import { RouterProvider, useSharedRouter } from '@pages/CustomHook/navigateHook';
import { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect } from 'react';
import Layout from '../HOC/Layout';

const meta = {
  title: 'Page/BlogPage',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=4076-34633&t=jHTtmbUsdXzhpEGX-4',
    },
    docs: {
      description: {
        component: 'Blog page with blog grid layout, search functionality, and pagination',
      },
    },
  },
  decorators: [
    (Story) => {
      const BlogRouter = () => {
        const { navigate } = useSharedRouter();

        useEffect(() => {
          navigate('/blog');
        }, [navigate]);

        return <Story />;
      };

      return (
        <RouterProvider>
          <BlogRouter />
        </RouterProvider>
      );
    },
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Blog Page',
};

export const WithSearchResults: Story = {
  name: 'Blog Page with Search',
  render: () => {
    const BlogRouter = () => {
      const { navigate } = useSharedRouter();

      useEffect(() => {
        navigate('/blog');
      }, [navigate]);

      return <Layout />;
    };

    return (
      <RouterProvider>
        <BlogRouter />
      </RouterProvider>
    );
  },
};
