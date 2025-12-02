import type { Meta, StoryObj } from '@storybook/react-vite';
import { ForgotPassPage } from './ForgotPasspage';

const meta: Meta<typeof ForgotPassPage> = {
  title: 'Page/ForgotPassPage',
  component: ForgotPassPage,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=8569-56007&t=l1ryZvhSjDsypmE7-4',
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
    isOpen: {
      control: 'boolean',
      defaultValue: true,
      description: 'Controls whether the modal is open or closed',
    },
    onClose: {
      action: 'closed',
      description: 'Callback when the modal is closed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log('Modal closed'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Default view of the Forgot Password page',
      },
    },
  },
};

export const MobileView: Story = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobile view of the Forgot Password page',
      },
    },
  },
};
