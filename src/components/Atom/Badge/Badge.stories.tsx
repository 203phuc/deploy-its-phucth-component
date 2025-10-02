import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Atom/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    roundness: {
      control: { type: 'select' },
      options: ['pill', 'round', 'sharp'],
      description: 'Border radius style',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the badge',
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outline'],
      description: 'Visual style variant of the badge',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Sizes: Story = {
  args: {
    children: 'Badge',
  },
  render: (arg) => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge {...arg} size="small" />
      <Badge {...arg} size="medium" />
      <Badge {...arg} size="large" />
    </div>
  ),
};

export const Variant: Story = {
  args: {
    children: 'Badge',
  },
  render: (arg) => (
    <>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Badge {...arg} size="large" />
        <Badge {...arg} size="medium" />
        <Badge {...arg} size="small" />
      </div>
      <br />
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Badge {...arg} size="large" variant="outline" />
        <Badge {...arg} size="medium" variant="outline" />
        <Badge {...arg} size="small" variant="outline" />
      </div>
    </>
  ),
};
