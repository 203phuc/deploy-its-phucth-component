import { RouterProvider, useSharedRouter } from '@pages/CustomHook/navigateHook';
import { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect } from 'react';
import Layout from '../HOC/Layout';

const meta = {
  title: 'Page/BlogDetailPage',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=4076-34633&t=jHTtmbUsdXzhpEGX-4',
    },
    docs: {
      description: {
        component: 'Blog detail page with full article content, sidebar, and related posts',
      },
    },
  },
  decorators: [
    (Story) => {
      const BlogDetailRouter = () => {
        const { navigate } = useSharedRouter();

        useEffect(() => {
          navigate('/blog/1');
        }, [navigate]);

        return <Story />;
      };

      return (
        <RouterProvider>
          <BlogDetailRouter />
        </RouterProvider>
      );
    },
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Blog Detail Page - Article 1',
};

export const Article2: Story = {
  name: 'Blog Detail Page - Article 2',
  render: () => {
    const BlogDetailRouter = () => {
      const { navigate } = useSharedRouter();

      useEffect(() => {
        navigate('/blog/2');
      }, [navigate]);

      return <Layout />;
    };

    return (
      <RouterProvider>
        <BlogDetailRouter />
      </RouterProvider>
    );
  },
};

export const Article3: Story = {
  name: 'Blog Detail Page - Article 3',
  render: () => {
    const BlogDetailRouter = () => {
      const { navigate } = useSharedRouter();

      useEffect(() => {
        navigate('/blog/3');
      }, [navigate]);

      return <Layout />;
    };

    return (
      <RouterProvider>
        <BlogDetailRouter />
      </RouterProvider>
    );
  },
};
