import type { Meta, StoryObj } from '@storybook/react-vite';
import Section from './Section';

const meta = {
  title: 'Atom/Section',
  component: Section,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=8-96700&p=f&t=JCV8ENuJzwR6AnIe-0',
    },
    docs: {
      description: {
        component:
          'A flexible section component that provides spacing utilities and background color support.\n\n### When to use:\n- **Layout sections**: For creating distinct content areas with customizable spacing\n- **Background sections**: For sections with colored backgrounds\n- **Spacing control**: When you need precise control over margins and padding',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    bgColor: {
      control: 'color',
      description: 'Background color of the section',
    },
    m: {
      control: 'text',
      description: 'Margin (all sides)',
    },
    mt: {
      control: 'text',
      description: 'Margin top',
    },
    mb: {
      control: 'text',
      description: 'Margin bottom',
    },
    ml: {
      control: 'text',
      description: 'Margin left',
    },
    mr: {
      control: 'text',
      description: 'Margin right',
    },
    mx: {
      control: 'text',
      description: 'Margin horizontal (left and right)',
    },
    my: {
      control: 'text',
      description: 'Margin vertical (top and bottom)',
    },
    p: {
      control: 'text',
      description: 'Padding (all sides)',
    },
    pt: {
      control: 'text',
      description: 'Padding top',
    },
    pb: {
      control: 'text',
      description: 'Padding bottom',
    },
    pl: {
      control: 'text',
      description: 'Padding left',
    },
    pr: {
      control: 'text',
      description: 'Padding right',
    },
    px: {
      control: 'text',
      description: 'Padding horizontal (left and right)',
    },
    py: {
      control: 'text',
      description: 'Padding vertical (top and bottom)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  args: {
    children: 'This is a section component with customizable spacing and background color.',
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    children: 'Default section with no spacing or background',
  },
};

export const WithBackground: Story = {
  args: {
    bgColor: '#f3f4f6',
    children: 'Section with light gray background',
  },
};

export const WithBackgroundColor: Story = {
  args: {
    bgColor: '#3b82f6',
    children: 'Section with blue background',
  },
};

// Margin Examples
export const MarginAll: Story = {
  args: {
    m: '20px',
    children: 'Section with 20px margin on all sides',
  },
  render: (args) => (
    <div className="border-2 border-dashed border-gray-300">
      <Section {...args} />
    </div>
  ),
};

export const MarginHorizontal: Story = {
  args: {
    mx: '30px',
    children: 'Section with 30px horizontal margins',
  },
  render: (args) => (
    <div className="border-2 border-dashed border-gray-300">
      <Section {...args} />
    </div>
  ),
};

export const MarginVertical: Story = {
  args: {
    my: '40px',
    children: 'Section with 40px vertical margins',
  },
  render: (args) => (
    <div className="border-2 border-dashed border-gray-300">
      <Section {...args} />
    </div>
  ),
};

export const MarginTop: Story = {
  args: {
    mt: '50px',
    children: 'Section with 50px top margin',
  },
  render: (args) => (
    <div className="border-2 border-dashed border-gray-300">
      <Section {...args} />
    </div>
  ),
};

export const MarginBottom: Story = {
  args: {
    mb: '60px',
    children: 'Section with 60px bottom margin',
  },
  render: (args) => (
    <div className="border-2 border-dashed border-gray-300">
      <Section {...args} />
    </div>
  ),
};

// Padding Examples
export const PaddingAll: Story = {
  args: {
    p: '20px',
    children: 'Section with 20px padding on all sides',
  },
};

export const PaddingHorizontal: Story = {
  args: {
    px: '30px',
    children: 'Section with 30px horizontal padding',
  },
};

export const PaddingVertical: Story = {
  args: {
    py: '40px',
    children: 'Section with 40px vertical padding',
  },
};

export const PaddingTop: Story = {
  args: {
    pt: '50px',
    children: 'Section with 50px top padding',
  },
};

export const PaddingBottom: Story = {
  args: {
    pb: '60px',
    children: 'Section with 60px bottom padding',
  },
};

// Combined Examples
export const CombinedSpacing: Story = {
  args: {
    m: '20px',
    p: '30px',
    bgColor: '#e0f2fe',
    children: 'Section with margin, padding, and background color',
  },
};

export const ComplexLayout: Story = {
  args: {
    my: '40px',
    py: '30px',
    px: '30px',
    bgColor: '#f0f9ff',
  },
  render: (args) => (
    <div className="space-y-4">
      <div className="text-sm text-gray-600">Above section</div>
      <Section {...args}>
        <h2 className="mb-4 text-2xl font-bold">Section Title</h2>
        <p className="leading-relaxed text-gray-700">
          This section demonstrates how the Section component can be used in a layout with custom vertical
          spacing and background color. The component provides flexible spacing controls for creating
          well-structured content areas.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold">Feature 1</h3>
            <p className="text-gray-600">Description of feature 1 goes here.</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold">Feature 2</h3>
            <p className="text-gray-600">Description of feature 2 goes here.</p>
          </div>
        </div>
      </Section>
      <div className="text-sm text-gray-600">Below section</div>
    </div>
  ),
};

// Custom ClassName Example
export const WithCustomClassName: Story = {
  args: {
    className: 'rounded-lg shadow-lg border',
    p: '20px',
    children: 'Section with custom Tailwind classes via className prop',
  },
};
