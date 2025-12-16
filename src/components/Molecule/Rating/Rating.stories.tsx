import type { Meta, StoryObj } from '@storybook/react-vite';
import { Rating } from './Rating';

const meta = {
  title: 'Molecule/Rating',
  component: Rating,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=111-23585&t=NkHrVg9SwkSiPX3f-4',
    },
    docs: {
      description: {
        component:
          'Rating stars for product rate.\n\n### When to use:\n- **Product rate**: For product assessment, evaluation\n',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['20', '16'],
      description: 'Controls align-items',
    },
    rating: {
      control: { type: 'select' },
      options: ['0', '1', '2', '3', '4', '5'],
      description: 'Controls flex wrapping',
    },
    noFillColor: {
      control: { type: 'select' },
      options: ['black', 'black-400'],
      description: 'Adds spacing between flex items',
    },
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    size: 20,
    rating: 4,
    noFillColor: 'black-400',
  },
};
export const ZeroRating: Story = {
  args: {
    size: 20,
    rating: 0,
    noFillColor: 'black-400',
  },
};

export const HalfRating: Story = {
  args: {
    size: 20,
    rating: 3,
    noFillColor: 'black-400',
  },
};

export const FullRating: Story = {
  args: {
    size: 20,
    rating: 5,
    noFillColor: 'black',
  },
};

export const SmallSize: Story = {
  args: {
    size: 16,
    rating: 4,
    noFillColor: 'black-400',
  },
};

export const NoFillColorGray: Story = {
  args: {
    size: 20,
    rating: 4,
    noFillColor: 'black-400',
  },
};

export const Interactive: Story = {
  args: {
    size: 20,
    rating: 0,
    noFillColor: 'black',
  },
  parameters: {
    docs: {
      description: {
        story: 'Play with hover and click to change stars.',
      },
    },
  },
};
