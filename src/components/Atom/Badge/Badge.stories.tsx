import { Icons } from '@components/Atom/Icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Atom/Badge',
  component: Badge,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=213-45108&t=0QD4Ew7IgGc3qew0-4',
    },
    docs: {
      description: {
        component:
          "A Badge component used to highlight product information such as sale tags (e.g., '50% OFF', 'SALE') or quick info labels (e.g., 'Free Shipping', 'Limited Stock'). Supports multiple sizes, color options, and variants, with optional rounded styles and the ability to include text or icons.",
      },
    },
  },
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
    <div className="flex items-end gap-4">
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
      <div className="flex flex-row items-end gap-1.5">
        <Badge {...arg} size="large" />
        <Badge {...arg} size="medium" />
        <Badge {...arg} size="small" />
      </div>
      <br />
      <div className="flex flex-row items-end gap-1.5">
        <Badge {...arg} size="large" variant="outline" />
        <Badge {...arg} size="medium" variant="outline" />
        <Badge {...arg} size="small" variant="outline" />
      </div>
    </>
  ),
};

export const WithIcon: Story = {
  args: {
    children: 'Badge',
  },
  render: (arg) => (
    <>
      <div className="flex flex-row items-end gap-1.5">
        <Badge {...arg} size="large">
          <Icons iconName="CloseIcon" iconSize={18} color="white" />
          Badge <Icons iconName="CloseIcon" iconSize={18} color="white" />
        </Badge>
        <Badge {...arg} size="medium">
          <Icons iconName="CloseIcon" iconSize={16} color="white" />
          Badge <Icons iconName="CloseIcon" iconSize={16} color="white" />
        </Badge>
        <Badge {...arg} size="small">
          <Icons iconName="CloseIcon" iconSize={14} color="white" />
          Badge <Icons iconName="CloseIcon" iconSize={14} color="white" />
        </Badge>
      </div>
      <br />
      <div className="flex flex-row items-end gap-1.5">
        <Badge {...arg} size="large" variant="outline">
          <Icons iconName="CloseIcon" iconSize={18} color="black" /> Badge
          <Icons iconName="CloseIcon" iconSize={18} color="black" />
        </Badge>
        <Badge {...arg} size="medium" variant="outline">
          <Icons iconName="CloseIcon" iconSize={16} color="black" />
          Badge <Icons iconName="CloseIcon" iconSize={16} color="black" />
        </Badge>
        <Badge {...arg} size="small" variant="outline">
          <Icons iconName="CloseIcon" iconSize={14} color="black" />
          Badge <Icons iconName="CloseIcon" iconSize={14} color="black" />
        </Badge>
      </div>
    </>
  ),
};
export const Color: Story = {
  args: {
    children: 'Badge',
  },
  render: (arg) => (
    <div className="flex flex-row items-end gap-1.5">
      <Badge {...arg} size="large" color="black" />
      <Badge {...arg} size="medium" color="red" />
      <Badge {...arg} size="small" color="green" />
    </div>
  ),
};
