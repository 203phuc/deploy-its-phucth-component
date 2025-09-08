import { Meta, StoryObj } from '@storybook/react';
import { HBZ0000 } from './HBZ0000';

const meta = {
  title: 'Page/HBZ0000',
  component: HBZ0000,
} satisfies Meta<typeof HBZ0000>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HiHaibazo: Story = {
  name: 'Hi HAIBAZO',
};
