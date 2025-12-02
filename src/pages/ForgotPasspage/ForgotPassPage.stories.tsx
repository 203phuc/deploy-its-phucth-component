import type { Meta, StoryObj } from '@storybook/react-vite';
import { ForgotPassPage } from './ForgotPassPage';

const meta: Meta<typeof ForgotPassPage> = {
  component: ForgotPassPage,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=8569-56464&t=TAi1D96Myk5qIA12-4',
    },
    docs: {
      description: {
        component:
          'A multi-step form for password recovery, including email submission, OTP verification, and password reset',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean', defaultValue: true },
    onClose: { action: 'closed' },
  },
} satisfies Meta<typeof ForgotPassPage>;

export default meta;
type Story = StoryObj<typeof ForgotPassPage>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};

export const MobileView: Story = {
  args: {
    isOpen: true,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
