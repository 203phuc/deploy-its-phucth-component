import { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { Toggle } from './Toggle';
import type { ToggleProps } from './type';

const meta: Meta<typeof Toggle> = {
  title: 'Atom/Toggle',
  component: Toggle,
  parameters: {
    screenshot: {
      viewport: '120x60',
      omitBackground: true,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=3-20593&t=9OU1kduYfvxfQGcj-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the toggle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    shape: {
      control: { type: 'select' },
      options: ['rounded', 'square'],
      description: 'Shape of the toggle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'rounded' },
      },
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Controlled checked state',
    },
    defaultChecked: {
      control: { type: 'boolean' },
      description: 'Uncontrolled default checked state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the toggle',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onCheckedChange: {
      action: 'onCheckedChange',
      description: 'Callback when toggle state changes',
    },
  },
  args: {
    size: 'medium',
    shape: 'rounded',
    disabled: false,
    defaultChecked: false,
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

// Interactive Toggle with state management
const InteractiveToggle = (args: ToggleProps) => {
  const [isChecked, setIsChecked] = useState(args.checked ?? false);

  // Update internal state when args.checked changes (for controlled usage)
  React.useEffect(() => {
    if (args.checked !== undefined) {
      setIsChecked(args.checked);
    }
  }, [args.checked]);

  return (
    <Toggle
      {...args}
      checked={isChecked}
      onCheckedChange={(checked) => {
        setIsChecked(checked);
        args.onCheckedChange?.(checked);
      }}
    />
  );
};

// ===== Stories =====
export const Default: Story = {
  render: (args) => <InteractiveToggle {...args} />,
};

export const Checked: Story = {
  ...Default,
  args: {
    ...Default.args,
    defaultChecked: true,
  },
};

export const SmallSize: Story = {
  ...Default,
  args: {
    ...Default.args,
    size: 'small',
  },
};

export const LargeSize: Story = {
  ...Default,
  args: {
    ...Default.args,
    size: 'large',
  },
};

export const PillShape: Story = {
  ...Default,
  args: {
    ...Default.args,
    shape: 'rounded',
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  ...Default,
  args: {
    ...Default.args,
    defaultChecked: true,
    disabled: true,
  },
};
