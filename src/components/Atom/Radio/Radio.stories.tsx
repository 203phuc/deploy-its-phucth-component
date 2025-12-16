import { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Atom/Radio',
  component: Radio,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=3-20725&t=7FmI0z650Ua22Sx5-0',
    },
  },
  tags: ['autodocs'],
  args: {
    disabled: false,
    allowUnselect: true,
    shape: 'circle',
    size: 'md',
  },
  argTypes: {
    shape: {
      control: { type: 'select' },
      options: ['circle', 'sharp', 'rounded'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

type Story = StoryObj<typeof Radio>;

export default meta;

// ===== Stories =====
export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);

    return <Radio {...args} checked={checked} onChange={setChecked} />;
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Radio size="sm" />
        <span className="text-sm">Small (sm)</span>
      </div>
      <div className="flex items-center gap-4">
        <Radio size="md" />
        <span className="text-sm">Medium (md)</span>
      </div>
      <div className="flex items-center gap-4">
        <Radio size="lg" />
        <span className="text-sm">Large (lg)</span>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => {
    const DemoState = () => {
      const [checked, setChecked] = useState(false);
      return (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Radio checked={checked} onChange={setChecked} />
            <span className="text-sm">{checked ? 'Checked' : 'Unchecked'}</span>
          </div>
          <div className="flex items-center gap-4">
            <Radio disabled />
            <span className="text-sm">Disabled</span>
          </div>
          <div className="flex items-center gap-4">
            <Radio checked disabled />
            <span className="text-sm">Checked & Disabled</span>
          </div>
        </div>
      );
    };
    return <DemoState />;
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Radio id="radio1" />
        <label htmlFor="radio1" className="text-sm">
          Option 1
        </label>
      </div>
      <div className="flex items-center gap-4">
        <Radio id="radio2" />
        <label htmlFor="radio2" className="text-sm">
          Option 2
        </label>
      </div>
    </div>
  ),
};

export const AllowUnselect: Story = {
  render: () => {
    const Demo = () => {
      const [checked, setChecked] = useState(false);

      return (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Radio checked={checked} onChange={setChecked} allowUnselect />
            <span className="text-sm">{checked ? 'Click to uncheck' : 'Click to check'}</span>
          </div>
          <div className="text-xs text-gray-500">
            allowUnselect is true - you can click to toggle the state
          </div>
        </div>
      );
    };

    return <Demo />;
  },
};

export const Controlled: Story = {
  render: () => {
    const DemoControlled = () => {
      const [selected, setSelected] = useState('option1');
      return (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Radio checked={selected === 'option1'} onChange={() => setSelected('option1')} />
            <span className="text-sm">Option 1</span>
          </div>
          <div className="flex items-center gap-4">
            <Radio checked={selected === 'option2'} onChange={() => setSelected('option2')} />
            <span className="text-sm">Option 2</span>
          </div>
          <div className="text-xs text-gray-500">Current selection: {selected}</div>
        </div>
      );
    };
    return <DemoControlled />;
  },
};
