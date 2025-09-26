import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckBox } from './CheckBox';

const meta = {
  title: 'Atom/Checkbox',
  component: CheckBox,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=3-20765&t=fTzZZp8qoU88wDsF-0',
    },
    docs: {
      description: {
        component:
          'A customizable checkbox component that can be used in forms and interactive UIs.\n\n### When to use:\n- For selecting single or multiple options\n- In forms for boolean choices\n- As a toggle for settings and preferences',
      },
    },
  },
  tags: ['autodocs'],
  //   size: {
  //     control: 'select',
  //     options: ['small', 'medium', 'large'],
  //     description: 'Size of the checkbox',
  //   },
  //   roundness: {
  //     control: 'select',
  //     options: ['square', 'rounded', 'pill'],
  //     description: 'Border radius of the checkbox',
  //   },
  //   disabled: {
  //     control: 'boolean',
  //     description: 'Disable the checkbox',
  //   },
  //   checked: {
  //     control: 'boolean',
  //     description: 'Controlled checked state',
  //   },
  //   defaultChecked: {
  //     control: 'boolean',
  //     description: 'Uncontrolled checked state',
  //   },
  //   label: {
  //     control: 'text',
  //     description: 'Label text next to the checkbox',
  //   },
  // },
  args: {
    label: 'Checkbox label',
    size: 'medium',
    roundness: 'square',
    disabled: false,
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <CheckBox size="small" label="Small" />
      <CheckBox size="medium" label="Medium" />
      <CheckBox size="large" label="Large" />
    </div>
  ),
};

export const Roundness: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <CheckBox roundness="square" label="Square" />
      <CheckBox roundness="rounded" label="Rounded" />
      <CheckBox roundness="pill" label="Pill" />
    </div>
  ),
};

export const WithState: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-4">
        <CheckBox
          label="I agree to the terms and conditions"
          onChange={(e) => console.log('Checked:', e.target.checked)}
        />
      </div>
    );
  },
};
