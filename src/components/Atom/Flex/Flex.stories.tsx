import type { Meta, StoryObj } from '@storybook/react-vite';
import Flex from './Flex';

const meta = {
  title: 'Atom/Flex',
  component: Flex,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=8-96700&p=f&t=JCV8ENuJzwR6AnIe-0',
    },
    docs: {
      description: {
        component:
          'A lightweight wrapper around a `<div>` with flexbox utilities. Simplifies alignment, direction, spacing, and wrapping — all through props.\n\n### When to use:\n- **Header layouts**: For aligning logo, navigation, and buttons\n- **Content centering**: For vertical and horizontal alignment\n- **Equal spacing**: For distributing items with consistent gaps\n- **Stack layouts**: For vertical or horizontal item arrangements',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'column'],
      description: 'Sets the flex direction',
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'],
      description: 'Controls justify-content',
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Controls align-items',
    },
    wrap: {
      control: { type: 'select' },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Controls flex wrapping',
    },
    gap: {
      control: 'text',
      description: 'Adds spacing between flex items',
    },
    flex: {
      control: 'text',
      description: 'Shortcut for flex property on the container',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    children: 'Flex container content',
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    children: 'Default flex (row, start, stretch, nowrap)',
  },
};

export const ColumnDirection: Story = {
  args: {
    direction: 'column',
    children: 'Vertical flex layout',
  },
};

export const CenterAligned: Story = {
  args: {
    justify: 'center',
    align: 'center',
    className: 'h-32 bg-gray-100 rounded-lg',
    children: 'Centered content',
  },
};

export const SpaceBetween: Story = {
  args: {
    justify: 'space-between',
    align: 'center',
    className: 'h-16 bg-gray-100 rounded-lg p-4',
    children: (
      <>
        <span>Logo</span>
        <nav>Navigation</nav>
        <span>Button</span>
      </>
    ),
  },
};

// Layout Examples
export const HeaderLayout: Story = {
  args: {
    justify: 'space-between',
    align: 'center',
    className: 'p-4 bg-gray-50 rounded-xl border',
    children: (
      <>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-blue-500"></div>
          <span className="font-semibold">Logo</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="home" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="about" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="policy" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </nav>
        <button className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">Sign In</button>
      </>
    ),
  },
};

export const VerticalStack: Story = {
  args: {
    direction: 'column',
    gap: 12,
    className: 'p-4 bg-gray-50 rounded-lg',
    children: (
      <>
        <div className="rounded-lg border bg-white p-3 shadow-sm">Card 1</div>
        <div className="rounded-lg border bg-white p-3 shadow-sm">Card 2</div>
        <div className="rounded-lg border bg-white p-3 shadow-sm">Card 3</div>
      </>
    ),
  },
};

export const HorizontalCenter: Story = {
  args: {
    justify: 'center',
    align: 'center',
    className: 'h-64 bg-gray-200 rounded-lg',
    children: (
      <button className="rounded-lg bg-blue-500 px-6 py-3 text-white hover:bg-blue-600">
        Centered Button
      </button>
    ),
  },
};

export const WithGap: Story = {
  args: {
    gap: 16,
    className: 'p-4 bg-gray-50 rounded-lg',
    children: (
      <>
        <div className="rounded bg-blue-500 px-4 py-2 text-white">Item 1</div>
        <div className="rounded bg-green-500 px-4 py-2 text-white">Item 2</div>
        <div className="rounded bg-purple-500 px-4 py-2 text-white">Item 3</div>
        <div className="rounded bg-orange-500 px-4 py-2 text-white">Item 4</div>
      </>
    ),
  },
};

export const WithWrapping: Story = {
  args: {
    wrap: 'wrap',
    gap: 8,
    className: 'p-4 bg-gray-50 rounded-lg',
    children: (
      <>
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="rounded-full bg-blue-500 px-3 py-1 text-sm text-white">
            Tag {i + 1}
          </div>
        ))}
      </>
    ),
  },
};

// Combined Examples
export const ComplexLayout: Story = {
  args: {
    direction: 'column',
    gap: 20,
    className: 'p-6 bg-white rounded-lg border',
  },
  render: (args) => (
    <div className="space-y-4">
      <Flex {...args}>
        <Flex justify="space-between" align="center" className="w-full rounded-lg bg-gray-50 p-4">
          <span className="font-semibold">Dashboard Header</span>
          <Flex gap={12} align="center">
            <span className="text-sm text-gray-600">Last updated: 2 min ago</span>
            <button className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600">
              Refresh
            </button>
          </Flex>
        </Flex>

        <Flex gap={16} className="w-full">
          <Flex direction="column" gap={12} className="flex-1">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <h3 className="mb-2 font-semibold text-blue-900">Metrics</h3>
              <p className="text-blue-700">Key performance indicators and statistics</p>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <h3 className="mb-2 font-semibold text-green-900">Analytics</h3>
              <p className="text-green-700">Data insights and trends</p>
            </div>
          </Flex>

          <Flex direction="column" gap={12} className="flex-1">
            <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
              <h3 className="mb-2 font-semibold text-purple-900">Reports</h3>
              <p className="text-purple-700">Generated reports and exports</p>
            </div>
            <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
              <h3 className="mb-2 font-semibold text-orange-900">Settings</h3>
              <p className="text-orange-700">Configuration and preferences</p>
            </div>
          </Flex>
        </Flex>
      </Flex>
    </div>
  ),
};

// Custom ClassName Example
export const WithCustomClassName: Story = {
  args: {
    className: 'rounded-lg shadow-lg border bg-gradient-to-r from-blue-50 to-purple-50',
    direction: 'column',
    align: 'center',
    justify: 'center',
    gap: 16,
    children: (
      <>
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
          <span className="text-xl font-bold text-white">F</span>
        </div>
        <span className="font-semibold text-gray-800">Custom Styled Flex</span>
        <p className="max-w-xs text-center text-gray-600">
          This flex container uses custom Tailwind classes for styling
        </p>
      </>
    ),
  },
};
