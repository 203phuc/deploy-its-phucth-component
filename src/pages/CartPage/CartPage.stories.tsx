import type { Meta, StoryObj } from '@storybook/react-vite';
import { CartPage } from './CartPage';

const meta: Meta<typeof CartPage> = {
  title: 'Pages/CartPage',
  component: CartPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
