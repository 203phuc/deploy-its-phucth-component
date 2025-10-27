import type { Meta, StoryObj } from '@storybook/react-vite';
import Grid from './Grid';

const meta = {
  title: 'Atom/Grid',
  component: Grid,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=8-96700&p=f&t=JCV8ENuJzwR6AnIe-0',
    },
    docs: {
      description: {
        component:
          'A responsive grid layout wrapper for arranging children in rows and columns. Simplifies CSS Grid usage with intuitive props.\n\n### When to use:\n- **Card grids**: For displaying collections of items in a grid\n- **Image galleries**: For responsive photo layouts\n- **Dashboard layouts**: For organizing widgets and metrics\n- **Form layouts**: For multi-column form arrangements',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'text',
      description: 'Sets the number of columns (repeat() shorthand)',
    },
    rows: {
      control: 'text',
      description: 'Sets the number of rows or custom sizing',
    },
    gap: {
      control: 'text',
      description: 'Gap between grid items (applies to both row & column)',
    },
    rowGap: {
      control: 'text',
      description: 'Row gap only',
    },
    columnGap: {
      control: 'text',
      description: 'Column gap only',
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Controls align-items',
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch', 'space-between'],
      description: 'Controls justify-items',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    children: 'Grid container content',
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    children: 'Default grid (no columns specified)',
  },
};

export const ThreeColumns: Story = {
  args: {
    columns: 3,
    gap: 24,
    className: 'p-6 bg-gray-50 rounded-lg',
    children: (
      <>
        <div className="rounded-lg border bg-white p-4 shadow-sm">Item 1</div>
        <div className="rounded-lg border bg-white p-4 shadow-sm">Item 2</div>
        <div className="rounded-lg border bg-white p-4 shadow-sm">Item 3</div>
      </>
    ),
  },
};

export const FourColumns: Story = {
  args: {
    columns: 4,
    gap: 16,
    className: 'p-4 bg-gray-50 rounded-lg',
    children: (
      <>
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className="rounded-lg border bg-white p-3 text-center shadow-sm">
            Card {i + 1}
          </div>
        ))}
      </>
    ),
  },
};

// Layout Examples
export const CardGrid: Story = {
  args: {
    columns: 3,
    gap: 20,
    className: 'p-6 bg-white rounded-lg',
    children: (
      <>
        <div className="rounded-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-6">
          <h3 className="mb-2 text-lg font-semibold text-blue-900">Feature 1</h3>
          <p className="text-blue-700">Description of the first feature goes here.</p>
        </div>
        <div className="rounded-lg border border-green-200 bg-gradient-to-br from-green-50 to-green-100 p-6">
          <h3 className="mb-2 text-lg font-semibold text-green-900">Feature 2</h3>
          <p className="text-green-700">Description of the second feature goes here.</p>
        </div>
        <div className="rounded-lg border border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100 p-6">
          <h3 className="mb-2 text-lg font-semibold text-purple-900">Feature 3</h3>
          <p className="text-purple-700">Description of the third feature goes here.</p>
        </div>
      </>
    ),
  },
};

export const ImageGallery: Story = {
  args: {
    columns: 4,
    gap: 16,
    className: 'p-4 bg-gray-100 rounded-lg',
    children: (
      <>
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-gray-200 to-gray-300"
          >
            <span className="font-medium text-gray-600">Img {i + 1}</span>
          </div>
        ))}
      </>
    ),
  },
};

export const AutoFitResponsive: Story = {
  args: {
    columns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 24,
    className: 'p-4 bg-white rounded-lg border',
    children: (
      <>
        <div className="rounded-lg border border-pink-200 bg-gradient-to-br from-pink-50 to-pink-100 p-6">
          <h3 className="mb-2 text-lg font-semibold text-pink-900">Product Card 1</h3>
          <p className="text-pink-700">Responsive card that adapts to screen size</p>
        </div>
        <div className="rounded-lg border border-indigo-200 bg-gradient-to-br from-indigo-50 to-indigo-100 p-6">
          <h3 className="mb-2 text-lg font-semibold text-indigo-900">Product Card 2</h3>
          <p className="text-indigo-700">Another responsive card</p>
        </div>
        <div className="rounded-lg border border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100 p-6">
          <h3 className="mb-2 text-lg font-semibold text-emerald-900">Product Card 3</h3>
          <p className="text-emerald-700">Third responsive card</p>
        </div>
        <div className="rounded-lg border border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 p-6">
          <h3 className="mb-2 text-lg font-semibold text-orange-900">Product Card 4</h3>
          <p className="text-orange-700">Fourth responsive card</p>
        </div>
      </>
    ),
  },
};

export const DashboardLayout: Story = {
  args: {
    columns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 20,
    className: 'p-6 bg-gray-50 rounded-lg',
    children: (
      <>
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Metrics Overview</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Users</span>
              <span className="font-semibold">12,543</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Revenue</span>
              <span className="font-semibold">$45,231</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Conversion</span>
              <span className="font-semibold">3.24%</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-gray-700">New user registration</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span className="text-gray-700">Payment processed</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <span className="text-gray-700">Report generated</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              Generate Report
            </button>
            <button className="w-full rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600">
              Export Data
            </button>
            <button className="w-full rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
              Send Newsletter
            </button>
          </div>
        </div>
      </>
    ),
  },
};

export const TwoColumnForm: Story = {
  args: {
    columns: 2,
    gap: 20,
    className: 'p-6 bg-white rounded-lg border max-w-2xl',
    children: (
      <form>
        <div className="space-y-2">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full rounded border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter first name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full rounded border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter last name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email address"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full rounded border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter phone number"
          />
        </div>

        <div className="col-span-2 space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            rows={4}
            id="message"
            className="w-full rounded border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message"
          />
        </div>

        <div className="col-span-2">
          <button className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Submit Form
          </button>
        </div>
      </form>
    ),
  },
};

// Custom Styling Example
export const WithCustomClassName: Story = {
  args: {
    className: 'rounded-xl shadow-lg border bg-gradient-to-br from-slate-50 to-gray-100 p-8',
    columns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 20,
    children: (
      <>
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <h3 className="mb-2 font-semibold text-gray-900">Custom Grid Item {i + 1}</h3>
            <p className="text-sm text-gray-600">
              This grid uses custom Tailwind classes for enhanced styling
            </p>
          </div>
        ))}
      </>
    ),
  },
};
