import { Meta, StoryObj } from '@storybook/react-vite';
import { ShopPage } from './ShopPage';

const meta = {
  title: 'Page/ShopPage',
  component: ShopPage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=4076-34633&t=jHTtmbUsdXzhpEGX-4',
    },
    docs: {
      description: {
        component: 'shop page with full sections',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ShopPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Haibazo: Story = {
  name: 'Nayzak ShopPage',
};
