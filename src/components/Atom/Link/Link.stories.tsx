import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './';

const meta: Meta<typeof Link> = {
  title: 'Atom/Link',
  component: Link,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=211-40008&p=f&t=ho590SCcKX1mINoe-0',
    },
    docs: {
      description: {
        component:
          "A flexible link component that renders as an `<a>` element with customizable styling.\n\n### When to use:\n- For navigation to other pages or external websites\n- When you need clickable text that doesn't look like a button\n- For inline text links within paragraphs or other text content",
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'default',
        'black-400',
        'black-500',
        'black-600',
        'black-700',
        'black-800',
        'black-900',
        'blue-700',
        'red-500',
        'teal-600',
        'white',
      ],
      description: 'Text and underline color of the link',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge', '2xlarge', '3xlarge', '4xlarge'],
      description: 'Text size and line height',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    weight: {
      control: 'select',
      options: ['regular', 'semiBold', 'bold', 'moderate'],
      description: 'Font weight of the link text',
      table: {
        defaultValue: { summary: 'regular' },
      },
    },
    font: {
      control: 'select',
      options: ['inter', 'spaceGrotesk'],
      description: 'Font family of the link',
      table: {
        defaultValue: { summary: 'inter' },
      },
    },
    gap: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
      description: 'Gap between the text and underline',
      table: {
        defaultValue: { summary: 'small' },
      },
    },
    hoverUnderline: {
      control: 'boolean',
      description: 'Show underline on hover only',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    external: {
      control: { type: 'boolean' },
      description: 'Adds target="_blank" and rel="noopener noreferrer" for external links',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    children: 'Click me',
    href: '#',
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

// Default link with all default props
export const Default: Story = {
  args: {
    children: 'Default Link',
    href: '#',
  },
};

// Link with icon and text
export const WithIcon: Story = {
  args: {
    href: '#',
    children: (
      <>
        <span>🔗</span>
        <span>Link with icon</span>
      </>
    ),
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-gray-600">
        A link with an icon and text, using the <code>spacing</code> prop to control the gap.
      </p>
      <div className="rounded-lg border border-gray-200 p-4">
        <Link {...args} className="inline-flex items-center" spacing="small" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of a link with an icon and text, demonstrating the `spacing` prop.',
      },
    },
  },
};

// Hover effects
export const HoverEffects: Story = {
  args: {
    children: 'Hover over me',
    href: '#',
    hoverUnderline: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Link with hover effect. The underline appears on hover when `hoverUnderline` is true.',
      },
    },
  },
};

// Different gap sizes
export const GapSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-gray-600">
        The <code>gap</code> prop controls the space between the text and the underline.
      </p>
      <div className="flex flex-col gap-4">
        <Link href="#">Small gap (4px)</Link>
        <Link href="#">Medium gap (6px)</Link>
        <Link href="#">Large gap (8px)</Link>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates different gap sizes between the link text and underline.',
      },
    },
  },
};

// Color variants
export const ColorVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-gray-600">
        The <code>color</code> prop controls the text and underline color.
      </p>
      <div className="grid grid-cols-1 gap-3">
        <Link href="#" color="default" className="block">
          Default (blue-700)
        </Link>
        <Link href="#" color="black-700" className="block">
          Black 700
        </Link>
        <Link href="#" color="red-500" className="block">
          Red 500
        </Link>
        <Link href="#" color="teal-600" className="block">
          Teal 600
        </Link>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different color variants available for the Link component.',
      },
    },
  },
};

// External link
export const ExternalLink: Story = {
  args: {
    children: 'Open external website',
    href: 'https://example.com',
    external: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'External links automatically get `target="_blank"` and `rel="noopener noreferrer"` attributes.',
      },
    },
  },
};
