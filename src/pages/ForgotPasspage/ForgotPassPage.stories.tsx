import type { Meta, StoryObj } from '@storybook/react-vite';
import { ForgotPassPage } from './ForgotPasspage';

const meta = {
  title: 'Page/ForgotPassPage',
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
  } as const,
  argTypes: {
    isOpen: {
      control: 'boolean',
      defaultValue: true,
      description: 'Controls whether the modal is open or closed',
    },
    onClose: {
      action: 'closed',
      description: 'Callback when the modal is closed',
    },
  } as const,
} satisfies Meta<typeof ForgotPassPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {
      return 'hello';
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Default view of the Forgot Password page',
      },
    },
  },
};
