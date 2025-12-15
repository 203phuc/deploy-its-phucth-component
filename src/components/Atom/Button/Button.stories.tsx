import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import type { ButtonRoundness, ButtonSize, ButtonVariant } from './type';

const meta = {
  title: 'Atom/Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=8-96700&p=f&t=JCV8ENuJzwR6AnIe-0',
    },
    docs: {
      description: {
        component:
          'A flexible button component that can render as either a `<button>` or an `<a>` element.\n\n### When to use:\n- **As Button**: For actions that trigger an event (e.g., form submission, opening a modal)\n- **As Link**: For navigation to other pages or sections (will render as `<a>` with `href`)',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['button', 'a'],
      description: 'Render as either a button or anchor element',
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'outlined', 'text', 'underline'] as ButtonVariant[],
      description: 'Visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['xlarge', 'large', 'largeCompact', 'medium', 'small', 'xsmall'] as ButtonSize[],
      description: 'Size of the button (not used for underline variant)',
    },
    roundness: {
      control: { type: 'select' },
      options: ['pill', 'round', 'sharp'] as ButtonRoundness[],
      description: 'Border radius style',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take full width of its container',
    },
    hasIcon: {
      control: 'boolean',
      description: 'Whether the button contains an icon',
    },
    font: {
      control: { type: 'select' },
      options: ['inter', 'spaceGrotesk'],
      description: 'Font family for the button text',
    },
    href: {
      control: 'text',
      description: 'URL for anchor variant (required when as="a")',
      if: { arg: 'as', eq: 'a' },
    },
  },
  args: {
    as: 'button',
    variant: 'solidBlack',
    roundness: 'pill',
    fullWidth: false,
    hasIcon: false,
    font: 'inter',
    children: 'Click me',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variant Examples
export const Solid: Story = {
  args: {
    children: 'Solid Button',
    variant: 'solidBlack',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    variant: 'outlined',
  },
};

export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text',
  },
};

export const Underline: Story = {
  args: {
    children: 'Underline Button',
    variant: 'underline',
    size: undefined, // clear size
  },
};

// Size Examples
export const Sizes: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button {...args} size="xlarge" />
      <Button {...args} size="large" />
      <Button {...args} size="medium" />
      <Button {...args} size="small" />
      <Button {...args} size="xsmall" />
    </div>
  ),
};

// Roundness Examples
export const Roundness: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button {...args} roundness="pill" />
      <Button {...args} roundness="round" />
      <Button {...args} roundness="sharp" />
    </div>
  ),
};

// Interactive Examples
export const WithIcon: Story = {
  args: {
    children: 'Button with Icon',
    hasIcon: true,
  },
};

export const AsLink: Story = {
  args: {
    as: 'a',
    href: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'Open in new tab',
    variant: 'outlined',
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full width button',
    fullWidth: true,
    size: 'large',
  },
};

// State Examples
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};
