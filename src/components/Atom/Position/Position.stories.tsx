import { Meta, StoryObj } from '@storybook/react-vite';
import { Position } from './Position';

const meta: Meta<typeof Position> = {
  title: 'Atoms/Position',
  component: Position,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['absolute', 'relative', 'fixed', 'sticky'],
    },
    top: { control: 'text' },
    left: { control: 'text' },
    right: { control: 'text' },
    bottom: { control: 'text' },
    zIndex: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof Position>;

export const Default: Story = {
  args: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    children: 'Positioned Content',
    style: {
      backgroundColor: 'lightblue',
      padding: '10px',
      border: '1px solid #ccc',
    },
  },
};

export const RelativePosition: Story = {
  args: {
    position: 'relative',
    top: '10px',
    left: '30px',
    children: 'Relatively Positioned',
    style: {
      backgroundColor: 'lightgreen',
      padding: '10px',
      border: '1px solid #4CAF50',
    },
  },
};

export const FixedPosition: Story = {
  args: {
    position: 'fixed',
    top: '50px',
    right: '50px',
    children: 'Fixed Position',
    style: {
      backgroundColor: 'lightcoral',
      padding: '10px',
      color: 'white',
      border: '1px solid #f44336',
    },
  },
};
