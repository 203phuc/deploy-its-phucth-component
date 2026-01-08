import { RouterProvider, useSharedRouter } from '@pages/CustomHook/navigateHook';
import { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect } from 'react';
import Layout from '../HOC/Layout';

const meta = {
  title: 'Page/ShopPage',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=4076-34633&t=jHTtmbUsdXzhpEGX-4',
    },
    docs: {
      description: {
        component: 'Shop page with full layout and navigation',
      },
    },
  },
  decorators: [
    (Story) => {
      const ShopRouter = () => {
        const { navigate } = useSharedRouter();

        useEffect(() => {
          navigate('/shop');
        }, [navigate]);

        return <Story />;
      };

      return (
        <RouterProvider>
          <ShopRouter />
        </RouterProvider>
      );
    },
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Nayzak ShopPage',
};
