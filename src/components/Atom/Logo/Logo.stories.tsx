import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo } from './Logo';

const meta = {
  title: 'Atom/Logo',
  component: Logo,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=160-25251&p=f&t=8MNVXzeigEv5kcKZ-0',
    },
    docs: {
      description: {
        component:
          'A Logo component that dynamically renders SVG logos. Supports size presets (`medium`, `large`) or custom `width` and `height`, with optional `color` overrides and `logoName` selection.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logoName: 'MarcLogo',
  },
};

export const Sizes: Story = {
  args: {
    logoName: 'SupremeLogo',
  },
  render: (arg) => (
    <div className="flex items-end gap-4">
      <Logo {...arg} size="medium" />
      <Logo {...arg} size="large" />
    </div>
  ),
};

export const CustomDimension: Story = {
  args: {
    logoName: 'ShoeiLogo',
  },
  render: (arg) => (
    <div className="flex items-end gap-4">
      <Logo {...arg} width={100} height={50} />
      <Logo {...arg} width={200} height={100} />
      <Logo {...arg} width={300} height={150} />
    </div>
  ),
};

export const Color: Story = {
  args: {
    logoName: 'PumaLogo',
  },
  render: (arg) => (
    <div className="flex items-center gap-4">
      <Logo {...arg} color="black" />
      <Logo {...arg} color="grey" />
      <Logo {...arg} color="white" />
    </div>
  ),
};
