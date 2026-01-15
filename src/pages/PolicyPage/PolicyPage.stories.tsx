import { RouterProvider } from '@pages/CustomHook/navigateHook';
import Layout from '@pages/HOC/Layout';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect } from 'react';

// Wrapper component that handles navigation to Policy pages with full Layout
const PolicyPageWithLayout = ({ policyType = 'shopping' }: { policyType?: string }) => {
  useEffect(() => {
    // Navigate to specific policy page after component mounts
    window.history.pushState({}, '', `/policy/${policyType}`);
  }, [policyType]);

  return (
    <RouterProvider>
      <Layout />
    </RouterProvider>
  );
};

const meta: Meta<typeof PolicyPageWithLayout> = {
  title: 'Pages/PolicyPage',
  component: PolicyPageWithLayout,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    policyType: {
      control: 'select',
      options: ['shopping', 'payment', 'shipping', 'return', 'refunds', 'cookies', 'privacy', 'terms'],
      description: 'Select policy type to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ShoppingPolicy: Story = {
  args: {
    policyType: 'shopping',
  },
};

export const PaymentPolicy: Story = {
  args: {
    policyType: 'payment',
  },
};

export const ShippingPolicy: Story = {
  args: {
    policyType: 'shipping',
  },
};

export const ReturnAndRefundPolicy: Story = {
  args: {
    policyType: 'return',
  },
};

export const CookiesPolicy: Story = {
  args: {
    policyType: 'cookies',
  },
};

export const PrivacyPolicy: Story = {
  args: {
    policyType: 'privacy',
  },
};

export const TermsAndConditions: Story = {
  args: {
    policyType: 'terms',
  },
};
