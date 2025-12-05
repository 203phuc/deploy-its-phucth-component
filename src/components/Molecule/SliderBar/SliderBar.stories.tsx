import type { Meta, StoryObj } from '@storybook/react-vite';
import { SliderBar } from './SliderBar';

const meta: Meta<typeof SliderBar> = {
  title: 'Molecule/SliderBar',
  component: SliderBar,
  parameters: {
    docs: {
      description: {
        component: 'A dual-knob price slider used for selecting a min and max range.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=192-29471&t=MEgQ74isMgvlDqSr-1',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    onChange: { action: 'changed' },
    size: {
      control: 'radio',
      options: ['desktop', 'mobile', 'special'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof SliderBar>;

export const Default: Story = {
  args: {
    min: 0,
    max: 1000,
  },
};

export const LargeRange: Story = {
  args: {
    min: 0,
    max: 100000,
  },
};

export const SmallRange: Story = {
  args: {
    min: 10,
    max: 50,
  },
};
