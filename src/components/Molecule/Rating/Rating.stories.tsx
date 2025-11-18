import type { Meta, StoryObj } from '@storybook/react-vite';
import { Rating } from './Rating';

const meta = {
  title: 'Molecule/Rating',
  component: Rating,
  parameters: {
    design: {
      type: 'figma',
      url: '',
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
    noFillColor: 'black',
  },
};
