import { Meta, StoryObj } from '@storybook/react-vite';
import App from '../Layout';
import { HomePage } from './HomePage';

const meta = {
  title: 'Page/HomePage',
  component: App,
  tags: ['autodocs'],
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HiHaibazo: Story = {
  name: 'Nayzak HomePage',
};
