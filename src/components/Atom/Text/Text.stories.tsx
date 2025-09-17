import { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './Text';
import { TextProps } from './type';

const meta: Meta<TextProps> = {
  title: 'Atom/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    weight: {
      control: 'radio',
      options: ['Regular', 'Semi Bold', 'Bold'],
    },
    font: {
      control: 'radio',
      options: ['Space Grotesk', 'Inter'],
    },
    color: {
      control: 'color',
    },
    size: {
      control: { type: 'number' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ===== Stories =====
export const Regular: Story = {
  args: {
    children: 'Regular Text',
    weight: 'Regular',
  },
};

export const SemiBold: Story = {
  args: {
    children: 'Semi Bold Text',
    weight: 'Semi Bold',
  },
};

export const Bold: Story = {
  args: {
    children: 'Bold Text',
    weight: 'Bold',
  },
};

export const InterFont: Story = {
  args: {
    children: 'Inter Font',
    font: 'Inter',
  },
};

export const SpaceGroteskFont: Story = {
  args: {
    children: 'Space Grotesk Font',
    font: 'Space Grotesk',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Text',
    size: 32,
  },
};

export const Small: Story = {
  args: {
    children: 'Small Text',
    size: 12,
  },
};

export const Colored: Story = {
  args: {
    children: 'Blue Text',
    color: '#1E40AF',
  },
};
