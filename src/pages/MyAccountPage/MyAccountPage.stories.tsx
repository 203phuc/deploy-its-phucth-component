import { RouterProvider } from '@pages/CustomHook/navigateHook';
import Layout from '@pages/HOC/Layout';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect } from 'react';

// Wrapper component that handles navigation to My Account page with full Layout
const MyAccountPageWithLayout = () => {
  useEffect(() => {
    // Navigate to My Account page after component mounts
    window.history.pushState({}, '', '/my-account');
  }, []);

  return (
    <RouterProvider>
      <Layout />
    </RouterProvider>
  );
};

const meta: Meta<typeof MyAccountPageWithLayout> = {
  title: 'Pages/MyAccountPage',
  component: MyAccountPageWithLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default My Account Page with Layout',
};
