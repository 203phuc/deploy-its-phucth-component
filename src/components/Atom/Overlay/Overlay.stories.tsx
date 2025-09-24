import type { Meta, StoryObj } from '@storybook/react-vite';
import { Overlay } from './Overlay';

// Common styles
const formStyles = {
  container: 'mx-auto max-w-md rounded-lg bg-white p-6 shadow-xl',
  title: 'mb-4 text-2xl font-bold text-gray-800',
  form: 'space-y-4',
  formGroup: 'mb-4',
  label: 'mb-1 block text-sm font-medium text-gray-700',
  input:
    'w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500',
  buttonGroup: 'flex justify-end space-x-3 pt-4',
  button: 'px-4 py-2 rounded',
  cancelButton: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  submitButton: 'bg-blue-600 text-white hover:bg-blue-700',
};

const meta: Meta<typeof Overlay> = {
  title: 'Atom/Overlay',
  component: Overlay,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          'A simple overlay component that can be used for modals, dialogs, etc.',
          '',
          '## Features',
          '- Focus management (automatically focuses when opened)',
          '- Accessible with proper ARIA attributes',
          '- Configurable z-index',
          '- Portal support (renders outside DOM hierarchy)',
        ].join('\n'),
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="relative h-screen w-screen bg-gray-50">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      description: 'Controls whether the overlay is visible',
    },
    zIndex: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      description: 'Z-index level for the overlay (1-10)',
    },
    usePortal: {
      control: { type: 'boolean' },
      description: 'Whether to render the overlay in a portal',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Overlay>;

const SampleContent = (
  <div className="mx-auto max-w-md rounded-lg bg-white p-8 shadow-xl">
    <h2 className="mb-4 text-2xl font-bold text-gray-800">Modal Title</h2>
    <p className="mb-6 text-gray-600">
      This is a sample modal content. You can put any content here including forms, images, or other
      components.
    </p>
    <div className="flex justify-end space-x-3">
      <button className="rounded bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300">Cancel</button>
      <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Confirm</button>
    </div>
  </div>
);

export const Default: Story = {
  args: {
    isOpen: true,
    children: SampleContent,
    zIndex: 5,
    usePortal: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
Default overlay with standard configuration.

### Usage
\`\`\`tsx
<Overlay
  isOpen={isOpen}
  onClick={handleClose}
  zIndex={5}
  closeOnClickOutside
  usePortal
>
  {/* Your content here */}
</Overlay>
\`\`\`
        `.trim(),
      },
    },
  },
};

/**
 * Example overlay with different z-index for demonstration.
 *
 * Shows how the overlay can be positioned at different z-index levels
 * for layering multiple overlays.
 */
export const ColoredBackground: Story = {
  args: {
    isOpen: true,
    children: SampleContent,
    zIndex: 5,
    usePortal: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example overlay with different z-index for layering.',
      },
    },
  },
};

export const HighZIndex: Story = {
  args: {
    isOpen: true,
    children: SampleContent,
    zIndex: 10,
    usePortal: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Overlay with highest z-index for critical modals.',
      },
    },
  },
};

export const NoClickOutside: Story = {
  args: {
    isOpen: true,
    children: SampleContent,
    zIndex: 5,
    usePortal: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple overlay with standard portal behavior.',
      },
    },
  },
};

export const NoPortal: Story = {
  args: {
    isOpen: true,
    children: SampleContent,
    zIndex: 5,
    usePortal: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Overlay rendered inline instead of in a portal.',
      },
    },
  },
};

export const MinimalContent: Story = {
  args: {
    isOpen: true,
    children: (
      <div className="rounded-lg bg-white p-4 shadow-lg">
        <p className="text-sm text-gray-600">Minimal overlay content</p>
      </div>
    ),
    zIndex: 5,
    usePortal: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Overlay with minimal content for simple notifications.',
      },
    },
  },
};

export const FormModal: Story = {
  args: {
    isOpen: true,
    children: (
      <div className={formStyles.container}>
        <h3 className={formStyles.title}>Contact Form</h3>
        <form className={formStyles.form}>
          <div className={formStyles.formGroup}>
            <label className={formStyles.label} htmlFor="name">
              Name
            </label>
            <input type="text" className={formStyles.input} placeholder="Enter your name" id="name" />
          </div>
          <div className={formStyles.formGroup}>
            <label className={formStyles.label} htmlFor="email">
              Email
            </label>
            <input type="email" className={formStyles.input} placeholder="Enter your email" id="email" />
          </div>
          <div className={formStyles.buttonGroup}>
            <button type="button" className={`${formStyles.button} ${formStyles.cancelButton}`}>
              Cancel
            </button>
            <button type="submit" className={`${formStyles.button} ${formStyles.submitButton}`}>
              Submit
            </button>
          </div>
        </form>
      </div>
    ),
    zIndex: 5,
    usePortal: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Overlay with a form inside for data collection.',
      },
    },
  },
};

export const AlertModal: Story = {
  args: {
    isOpen: true,
    children: (
      <div className="mx-auto max-w-sm rounded-lg bg-white p-6 text-center shadow-xl">
        <div className="mb-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
            <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-gray-800">Warning</h3>
        <p className="mb-6 text-gray-600">
          Are you sure you want to delete this item? This action cannot be undone.
        </p>
        <div className="flex justify-center space-x-3">
          <button className="rounded bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300">Cancel</button>
          <button className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700">Delete</button>
        </div>
      </div>
    ),
    zIndex: 8,
    usePortal: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Alert modal with warning styling.',
      },
    },
  },
};

export const LoadingOverlay: Story = {
  args: {
    isOpen: true,
    children: (
      <div className="mx-auto max-w-sm rounded-lg bg-white p-8 text-center shadow-xl">
        <div className="mb-4">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"></div>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-gray-800">Loading...</h3>
        <p className="text-gray-600">Please wait while we process your request.</p>
      </div>
    ),
    zIndex: 9,
    usePortal: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading overlay with spinner animation.',
      },
    },
  },
};

export const MultipleOverlays: Story = {
  args: {
    isOpen: true,
    children: (
      <div className="space-y-4">
        <div className="rounded-lg bg-white p-6 shadow-xl">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">First Modal</h3>
          <p className="mb-4 text-gray-600">This is the first modal content.</p>
          <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Action</button>
        </div>
        <div className="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-4">
          <p className="text-center text-sm text-gray-500">This would be another overlay behind this one</p>
        </div>
      </div>
    ),
    zIndex: 7,
    usePortal: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of multiple overlays with different z-index levels.',
      },
    },
  },
};

export const CustomStyling: Story = {
  args: {
    isOpen: true,
    className: 'custom-overlay-class',
    children: (
      <div className="mx-auto max-w-lg rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-2xl">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">Custom Styled Modal</h2>
        <p className="mb-6 text-gray-600">
          This modal has custom styling applied through the className prop.
        </p>
        <div className="rounded border bg-white/50 p-4">
          <p className="text-sm text-gray-700">
            You can add any custom CSS classes to further customize the appearance.
          </p>
        </div>
      </div>
    ),
    zIndex: 5,
    usePortal: true,
  },
  parameters: {
    docs: {
      layout: 'padded',
      description: {
        story: 'Overlay with custom CSS classes for unique styling.',
      },
    },
  },
};
