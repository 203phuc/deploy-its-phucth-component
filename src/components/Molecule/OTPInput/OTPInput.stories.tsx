import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { OTPInput } from './OTPInput';
import type { OTPInputProps } from './type';

// Reusable component to avoid code duplication
const OTPInputStory = (args: OTPInputProps) => {
  const [otp, setOtp] = useState('');
  return (
    <div className="p-4">
      <OTPInput
        {...args}
        onChange={(value) => {
          setOtp(value);
          args.onChange?.(value);
        }}
      />
      <div className="mt-4 text-sm text-gray-600">Current OTP value: {otp || 'Empty'}</div>
    </div>
  );
};

export default {
  title: 'Molecules/OTPInput',
  component: OTPInput,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=4508-52900&t=5TECiQ0AHxRoQiSP-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    length: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of OTP digits',
    },
    variant: {
      control: { type: 'select' },
      options: ['mobile', 'desktop'],
      description: 'Variant of the OTP input - controls the size',
    },
    onChange: { action: 'onChange' },
  },
  args: {
    length: 6,
    variant: 'desktop',
  },
} as Meta<typeof OTPInput>;

type Story = StoryObj<OTPInputProps>;

export const Default: Story = {
  render: (args) => <OTPInputStory {...args} />,
};

export const MobileVariant: Story = {
  args: {
    variant: 'mobile',
  },
  render: (args) => <OTPInputStory {...args} />,
};

export const CustomLength: Story = {
  args: {
    length: 4,
  },
  render: (args) => <OTPInputStory {...args} />,
};
