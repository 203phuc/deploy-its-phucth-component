import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';
import type { InputSize, InputVariant } from './type';

const meta = {
  title: 'Atom/Input',
  component: Input,
  parameters: {
    screenshot: {
      viewport: '335x76',
      omitBackground: true,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=124-21923&t=nQzUkJxagPxjqjMV-4',
    },
    docs: {
      description: {
        component:
          'A flexible input component that can render as either a single-line input or multi-line textarea.\n\n### Features:\n- **Render modes**: Can be `input` (default) or `textarea` for multi-line text\n- **Size variants**: Text size automatically adjusts based on the size prop (small, medium, large)\n- **Font families**: Choose between Inter and Space Grotesk fonts for input text, placeholder, and label\n- **Label**: Semibold text that scales with size\n- **Placeholder**: Lighter color text that scales with size\n- **Icons**: Optional start and end icons (input mode only)\n- **Variants**: Solid (bordered) and Line (underlined) styles\n- **Error state**: Displays error message and red border\n- **Type safety**: TypeScript prevents invalid prop combinations (e.g., icons on textarea)',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['input', 'textarea'],
      description: 'Render as input or textarea element',
      table: {
        defaultValue: { summary: 'input' },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'date'],
      description: 'HTML input type (only for input mode)',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'line'] as InputVariant[],
      description: 'Visual style variant (solid has border, line has only bottom border)',
      table: {
        defaultValue: { summary: 'solid' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'] as InputSize[],
      description: 'Size affects input height, padding, and text size (including label and placeholder)',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text (scales with size)',
    },
    label: {
      control: 'text',
      description: 'Label text (semibold, scales with size)',
    },
    error: {
      control: 'text',
      description: 'Error message to display below input',
    },
    iconStart: {
      control: 'text',
      description: 'Icon name to display at the start of the input',
    },
    iconEnd: {
      control: 'text',
      description: 'Icon name to display at the end of the input',
    },
    buttonStart: {
      control: 'object',
      description: 'React element to display at the start of the input (e.g., button)',
    },
    buttonEnd: {
      control: 'object',
      description: 'React element to display at the end of the input (e.g., button)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    rows: {
      control: { type: 'number', min: 2, max: 20 },
      description: 'Number of visible text rows (only for textarea)',
      if: { arg: 'as', eq: 'textarea' },
    },
    fontFamily: {
      control: { type: 'select' },
      options: ['inter', 'grotesk'],
      description: 'Font family for all text elements (label, placeholder, and input text)',
      table: {
        defaultValue: { summary: 'inter' },
      },
    },
  },
  decorators: [
    (Story) => (
      <form onSubmit={(e) => e.preventDefault()} style={{ margin: '3em' }}>
        <div className="mb-10">
          <Story />
        </div>
        <button type="submit" className="bg-black-900 p-1.5 text-white">
          submit me
        </button>
      </form>
    ),
  ],
  args: {
    id: 'text',
    as: 'input',
    type: 'text',
    variant: 'solid',
    size: 'medium',
    placeholder: 'Enter text...',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

// Basic Examples
export const Default: Story = {
  args: {
    placeholder: 'Default input',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    error: 'This field is required',
  },
};

// Variant Examples
export const Solid: Story = {
  args: {
    label: 'Solid Variant',
    placeholder: 'Bordered input',
    variant: 'solid',
  },
};

export const Line: Story = {
  args: {
    label: 'Line Variant',
    placeholder: 'Underlined input (no horizontal padding)',
    variant: 'line',
  },
};

// Size Examples
export const Sizes: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter text',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input {...args} size="small" label="Small size" />
      <Input {...args} size="medium" label="Medium size" />
      <Input {...args} size="large" label="Large size" />
    </div>
  ),
};

export const SizesWithLineVariant: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter text',
    variant: 'line',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input {...args} size="small" label="Small size (line)" />
      <Input {...args} size="medium" label="Medium size (line)" />
      <Input {...args} size="large" label="Large size (line)" />
    </div>
  ),
};

// Icon Examples
export const WithStartIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    iconStart: 'EmailIcon',
  },
};

export const WithEndIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    iconEnd: 'SearchIcon',
  },
};

export const WithBothIcons: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    iconStart: 'UserIcon',
    iconEnd: 'CheckIcon',
  },
};

export const WithClickableEndIcon: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    iconEnd: 'ViewIcon',
    onIconEndClick: () => alert('Toggle password visibility'),
  },
};

export const WithStartButton: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    buttonStart: (
      <button
        style={{
          padding: '4px 8px',
          background: '#f0f0f0',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '12px',
        }}
        onClick={() => alert('Button clicked!')}
      >
        Go
      </button>
    ),
  },
};

export const WithEndButton: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    buttonEnd: (
      <button
        style={{
          padding: '4px 12px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '12px',
        }}
        onClick={() => alert('Send email!')}
      >
        Send
      </button>
    ),
  },
};

export const IconAndButtonCombo: Story = {
  args: {
    label: 'Search with Actions',
    placeholder: 'Search...',
    iconStart: 'SearchIcon',
    buttonEnd: (
      <button
        style={{
          padding: '6px 12px',
          background: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '12px',
        }}
        onClick={() => alert('Advanced search!')}
      >
        Search
      </button>
    ),
  },
};

// Type Examples
export const EmailInput: Story = {
  args: {
    type: 'email',
    label: 'Email Address',
    placeholder: 'Enter your email',
    iconStart: 'EmailIcon',
  },
};

export const PasswordInput: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    iconEnd: 'LockIcon',
  },
};

export const SearchInput: Story = {
  args: {
    type: 'search',
    label: 'Search',
    placeholder: 'Search...',
    iconStart: 'SearchIcon',
  },
};

export const TelephoneInput: Story = {
  args: {
    type: 'tel',
    label: 'Phone Number',
    placeholder: 'Enter your phone',
    iconStart: 'PhoneIcon',
  },
};

export const DateInput: Story = {
  args: {
    type: 'date',
    label: 'Birth Date',
  },
};

export const NumberInput: Story = {
  args: {
    type: 'number',
    label: 'Quantity',
    placeholder: 'Enter quantity',
  },
};

// State Examples
export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This is disabled',
    disabled: true,
  },
};

export const DisabledWithValue: Story = {
  args: {
    label: 'Disabled with Value',
    value: 'Disabled value',
    disabled: true,
  },
};

// Complex Examples
export const InputVsTextarea: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontWeight: 600 }}>Input Mode</h3>
        <Input label="Single Line" placeholder="Enter a single line of text" iconStart="EditIcon" />
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontWeight: 600 }}>Textarea Mode</h3>
        <Input as="textarea" label="Multiple Lines" placeholder="Enter multiple lines of text..." rows={4} />
      </div>
    </div>
  ),
};

export const AllVariantsCombination: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontWeight: 600 }}>Solid Variant</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Input variant="solid" size="small" label="Small" placeholder="Small solid input" />
          <Input variant="solid" size="medium" label="Medium" placeholder="Medium solid input" />
          <Input variant="solid" size="large" label="Large" placeholder="Large solid input" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontWeight: 600 }}>Line Variant</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Input variant="line" size="small" label="Small" placeholder="Small line input" />
          <Input variant="line" size="medium" label="Medium" placeholder="Medium line input" />
          <Input variant="line" size="large" label="Large" placeholder="Large line input" />
        </div>
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <form
      style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}
      onSubmit={(e) => {
        e.preventDefault();
        alert('Form submitted!');
      }}
    >
      <Input type="text" label="Full Name" placeholder="John Doe" iconStart="UserIcon" required />
      <Input
        type="email"
        label="Email Address"
        placeholder="john@example.com"
        iconStart="EmailIcon"
        required
      />
      <Input type="tel" label="Phone Number" placeholder="+1 234 567 890" iconStart="PhoneIcon" />
      <Input type="password" label="Password" placeholder="Enter password" iconEnd="LockIcon" required />
      <Input type="text" label="Coupon Code" placeholder="Enter coupon" iconStart="CouponIcon" />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          background: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </form>
  ),
};

export const ErrorStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input label="Email" placeholder="Enter email" error="This field is required" iconStart="EmailIcon" />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        error="Password must be at least 8 characters"
        iconEnd="LockIcon"
      />
      <Input variant="line" label="Username" placeholder="Enter username" error="Username already taken" />
    </div>
  ),
};

// Textarea Examples
export const TextareaBasic: Story = {
  args: {
    as: 'textarea',
    label: 'Message',
    placeholder: 'Enter your message...',
    rows: 4,
  },
};

export const TextareaWithError: Story = {
  args: {
    as: 'textarea',
    label: 'Comments',
    placeholder: 'Enter your comments...',
    error: 'This field is required',
    rows: 5,
  },
};

export const TextareaSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input as="textarea" size="small" label="Small Textarea" placeholder="Small size" rows={3} />
      <Input as="textarea" size="medium" label="Medium Textarea" placeholder="Medium size" rows={4} />
      <Input as="textarea" size="large" label="Large Textarea" placeholder="Large size" rows={5} />
    </div>
  ),
};

export const TextareaLineVariant: Story = {
  args: {
    as: 'textarea',
    variant: 'line',
    label: 'Notes',
    placeholder: 'Enter notes (line variant - no horizontal padding)...',
    rows: 6,
  },
};

export const TextareaDisabled: Story = {
  args: {
    as: 'textarea',
    label: 'Disabled Textarea',
    value: 'This is disabled content',
    disabled: true,
    rows: 4,
  },
};

// Font Examples
export const FontInter: Story = {
  args: {
    label: 'Inter Font',
    placeholder: 'This uses Inter font family',
    fontFamily: 'inter',
  },
};

export const FontGrotesk: Story = {
  args: {
    label: 'Space Grotesk Font',
    placeholder: 'This uses Space Grotesk font family',
    fontFamily: 'grotesk',
  },
};

export const MixedFonts: Story = {
  args: {
    label: 'Mixed Fonts',
    placeholder: 'Input and placeholder use different fonts',
    fontFamily: 'grotesk',
  },
};

export const TextareaFontShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontWeight: 600 }}>Textarea with Inter Font</h3>
        <Input
          as="textarea"
          label="Message (Inter)"
          placeholder="Enter your message..."
          fontFamily="inter"
          rows={4}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontWeight: 600 }}>Textarea with Space Grotesk Font</h3>
        <Input
          as="textarea"
          label="Notes (Space Grotesk)"
          placeholder="Enter your notes..."
          fontFamily="grotesk"
          rows={4}
        />
      </div>
    </div>
  ),
};

// Phone Input Examples (Simplified)
export const PhoneInputBasic: Story = {
  render: () => <Input label="Phone Number" type="tel" placeholder="Enter your phone number" />,
};

export const PhoneInputWithValue: Story = {
  render: () => (
    <Input
      label="Phone Number"
      type="tel"
      value="5551234567"
      placeholder="Enter your phone number"
      onChange={(e) => console.log('Phone value:', e.target.value)}
    />
  ),
};

export const PhoneInputInternational: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input label="US Phone" type="tel" placeholder="Enter US phone number" />
      <Input label="UK Phone" type="tel" placeholder="Enter UK phone number" />
      <Input label="India Phone" type="tel" placeholder="Enter India phone number" />
    </div>
  ),
};

export const PhoneInputSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input label="Small Phone Input" type="tel" size="small" />
      <Input label="Medium Phone Input" type="tel" size="medium" />
      <Input label="Large Phone Input" type="tel" size="large" />
    </div>
  ),
};
