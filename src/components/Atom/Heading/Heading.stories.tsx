import { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from './Heading';
import { HeadingProps } from './type';

const meta: Meta<HeadingProps> = {
  title: 'Atom/Heading',
  component: Heading,
  parameters: {
    screenshot: {
      viewport: '335x76',
      omitBackground: true,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=0-218&t=6nSLpfew7H3aU6Mq-4',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// ===== Stories =====
export const Regular: Story = {
  args: {
    children: 'Regular Heading',
    weight: 'regular',
  },
};

export const SemiBold: Story = {
  args: {
    children: 'Semi Bold Heading',
    weight: 'semiBold',
  },
};

export const Bold: Story = {
  args: {
    children: 'Bold Heading',
    weight: 'bold',
  },
};

export const InterFont: Story = {
  args: {
    children: 'Inter Font',
    font: 'inter',
  },
};

export const SpaceGroteskFont: Story = {
  args: {
    children: 'Space Grotesk Font',
    font: 'spaceGrotesk',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Heading',
    size: 'h2',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Heading',
    size: 'h7',
  },
};

export const ColoredClass: Story = {
  args: {
    children: 'Tailwind Class Color',
    color: 'red-500',
  },
};
