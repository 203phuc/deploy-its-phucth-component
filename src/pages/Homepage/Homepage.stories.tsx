import { Meta, StoryObj } from '@storybook/react-vite';
import { HomePage } from './HomePage';

const meta = {
  title: 'Page/HomePage',
  component: HomePage,
  tags: ['autodocs'],
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HiHaibazo: Story = {
  name: 'Nayzak HomePage',
};
