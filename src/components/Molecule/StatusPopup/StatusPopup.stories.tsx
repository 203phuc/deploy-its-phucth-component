import { Button } from '@components/Atom/Button';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { useState } from 'react';
import { ErrorPopup, StatusPopup, SuccessPopup } from './StatusPopup';

export default {
  title: 'Molecule/StatusPopup',
  component: StatusPopup,
  parameters: {
    docs: {
      description: {
        component:
          'A reusable status popup component that can display success or error messages with appropriate icons and styling.\n\n### Features:\n- Supports both success and error states\n- Responsive design for mobile and desktop\n- Customizable title, message, and button text\n- Optional close handler and button click handler',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=236-81297&t=jHCnK2TK0Myju3bd-4',
    },
  },
  decorators: [
    (Story) => (
      <div className="h-screen w-full p-8">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'error'],
    },
    isOpen: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof StatusPopup>;

type Story = StoryObj<typeof StatusPopup>;

// Base template for the StatusPopup
const StatusTemplate: Story = {
  args: {
    isOpen: true,
    title: 'Success!',
    message: 'Your action was completed successfully!',
    buttonLabel: 'Continue',
    status: 'success',
    onButtonClick: () => console.log('Button clicked'),
  },
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Status Popup</Button>
        <StatusPopup
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onButtonClick={() => {
            args.onButtonClick?.();
            setIsOpen(false);
          }}
        />
      </div>
    );
  },
};

// Success Popup Story
export const Success: Story = {
  ...StatusTemplate,
  args: {
    ...StatusTemplate.args,
    status: 'success',
    title: 'Success!',
    message: 'Your action was completed successfully!',
    buttonLabel: 'Continue',
  },
  render: function SuccessRender(args) {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Show Success Popup</Button>
        <SuccessPopup
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={args.title}
          message={args.message}
          buttonLabel={args.buttonLabel}
          onButtonClick={() => {
            args.onButtonClick?.();
            setIsOpen(false);
          }}
        />
      </div>
    );
  },
};

// Error Popup Story
export const ErrorState: Story = {
  ...StatusTemplate,
  args: {
    ...StatusTemplate.args,
    status: 'error',
    title: 'Oops!',
    message: 'An error occurred while processing your request. Please try again.',
    buttonLabel: 'Try Again',
  },
  render: function ErrorRender(args) {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Show Error Popup</Button>
        <ErrorPopup
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={args.title}
          message={args.message}
          buttonLabel={args.buttonLabel}
          onButtonClick={() => {
            args.onButtonClick?.();
            setIsOpen(false);
          }}
        />
      </div>
    );
  },
};

// Interactive Story for testing in Storybook
export const Interactive: Story = {
  ...StatusTemplate,
  args: {
    ...StatusTemplate.args,
    status: 'success',
  },
  render: function InteractiveRender(args: ComponentProps<typeof StatusPopup>) {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Interactive Popup</Button>
        <StatusPopup
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onButtonClick={() => {
            args.onButtonClick?.();
            setIsOpen(false);
          }}
        />
      </div>
    );
  },
};

// Responsive Test Story
export const ResponsiveTest: Story = {
  ...StatusTemplate,
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
  decorators: [
    () => (
      <div className="space-y-4">
        <div className="border border-dashed border-gray-300 p-4">
          <h3 className="mb-2 text-lg font-bold">Mobile Layout</h3>
          <div className="w-[375px] border border-gray-200 p-4">
            <StatusPopup
              isOpen={true}
              status="success"
              title="Success!"
              message="This is how the popup looks on mobile devices."
              buttonLabel="Got it"
            />
          </div>
        </div>

        <div className="border border-dashed border-gray-300 p-4">
          <h3 className="mb-2 text-lg font-bold">Desktop Layout</h3>
          <div className="w-full max-w-4xl border border-gray-200 p-4">
            <StatusPopup
              isOpen={true}
              status="success"
              title="Success!"
              message="This is how the popup looks on desktop devices."
              buttonLabel="Continue"
            />
          </div>
        </div>
      </div>
    ),
  ],
};
