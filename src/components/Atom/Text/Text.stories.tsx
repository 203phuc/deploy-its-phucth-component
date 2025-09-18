import { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './Text';
import { TextProps } from './type';

const meta: Meta<TextProps> = {
  title: 'Atom/Text',
  component: Text,
  parameters: {
    screenshot: {
      viewport: '335x76',
      omitBackground: true,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=2-20951&t=ZBGUaX4RpMvmFRX8-4',
    },
  },
  tags: ['autodocs'],

  // argTypes: {
  //   weight: {
  //     control: 'radio',
  //     options: ['Regular', 'Moderate', 'Semi Bold', 'Bold'],
  //   },
  //   font: {
  //     control: 'radio',
  //     options: ['Space Grotesk', 'Inter'],
  //   },
  //   color: {
  //     control: { type: 'select' },
  //     options: [
  //       'default',
  //       'black400',
  //       'black500',
  //       'black600',
  //       'black700',
  //       'black800',
  //       'black900',
  //       'blue700',
  //       'red500',
  //       'teal600',
  //       'white',
  //     ],
  //     description: `Use Tailwind class tokens like "text-red-500".`,
  //   },
  //   line: {
  //     control: 'boolean',
  //   },
  //   size: {
  //     control: 'select',
  //     options: ['xsmall', 'small', 'medium', 'large', 'xlarge', '2xlarge', '3xlarge', '4xlarge'],
  //   },
  // },
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
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Text',
    size: 'small',
  },
};

export const ColoredClass: Story = {
  args: {
    children: 'Tailwind Class Color',
    color: 'red500', // will apply Tailwind class
  },
};

export const Strikethrough: Story = {
  args: {
    children: 'Strikethrough Text',
    line: true,
  },
};
