import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Dropdown } from './Dropdown';

const meta = {
  title: 'Molecule/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component:
          'A dropdown-only select component with multiple variants and styling options.\n\n### Features:\n- Width variants: default (full width), xs (114px), sm (173px), md (228px), lg (255px)\n- Custom styling with box shadow and hover effects\n- Selected option highlighting with blue-50 background\n- Hover effects with #F5F5F5 background\n- Controlled open/close state\n- Keyboard accessible',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=238-88535&t=pGQrgdX84pCyxPXj-4',
    },
  },
  decorators: [
    (Story) => (
      <div className="h-80 w-[1400px] bg-gray-50 p-8">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'md', 'lg', 'other'],
      description: 'Select width variant (xs=114px, sm=173px, md=228px, lg=255px)',
    },
    direction: {
      control: 'select',
      options: ['down', 'up'],
      description: 'Direction of the dropdown',
    },
    options: {
      control: 'object',
      description: 'Array of select options',
    },
    isOpen: {
      control: 'boolean',
      description: 'Whether the dropdown is open',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    value: {
      control: 'text',
      description: 'Currently selected value',
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Disabled Option', value: 'disabled', disabled: true },
  { label: 'Option 4', value: 'option4' },
];

const languageOptions = [
  { label: 'German', value: 'en', icon: 'GermanFlagIcon' as const },
  { label: 'Italian', value: 'it', icon: 'ItalianFlagIcon' as const },
  { label: 'Egypt', value: 'eg', icon: 'EgyptianFlagIcon' as const },
  { label: 'Japan', value: 'jp', icon: 'JapaneseFlagIcon' as const },
  { label: 'English', value: 'egl', icon: 'AmericanFlagIcon' as const },
];

const currencyOptions = [
  { label: 'USD', value: 'usd', type: 'currency' as const },
  { label: 'EUR', value: 'eur', type: 'currency' as const },
  { label: 'GBP', value: 'gbp', type: 'currency' as const },
  { label: 'JPY', value: 'jpy', type: 'currency' as const },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    isOpen: true,
    variant: 'default',
  },
};

export const Medium: Story = {
  args: {
    options: sampleOptions,
    isOpen: true,
    variant: 'md',
  },
};

export const Small: Story = {
  args: {
    options: sampleOptions,
    isOpen: true,
    variant: 'sm',
  },
};

export const WithSelectedValue: Story = {
  args: {
    options: sampleOptions,
    isOpen: true,
    value: 'option2',
    variant: 'default',
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    isOpen: true,
    disabled: true,
    variant: 'default',
  },
};

export const Interactive: Story = {
  args: {
    options: sampleOptions,
    isOpen: false,
  },
  render: () => {
    const Interactive = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [selectedValue, setSelectedValue] = useState<string | number>('');

      return (
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md border border-gray-300 bg-white px-4 py-2"
          >
            {selectedValue
              ? sampleOptions.find((opt) => opt.value === selectedValue)?.label
              : 'Select an option...'}
          </button>
          <Dropdown
            options={sampleOptions}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            value={selectedValue}
            onSelect={setSelectedValue}
            variant="default"
          />
        </div>
      );
    };
    return <Interactive />;
  },
};

export const ExtraSmall: Story = {
  args: {
    options: sampleOptions,
    isOpen: true,
    variant: 'xs',
  },
};

export const LanguageSelect: Story = {
  args: {
    options: languageOptions,
    isOpen: true,
    variant: 'xs',
  },
};

export const CurrencySelect: Story = {
  args: {
    options: currencyOptions,
    isOpen: true,
    variant: 'xs',
  },
};

export const DropUp: Story = {
  args: {
    options: sampleOptions,
    isOpen: true,
    variant: 'default',
    direction: 'up',
  },
  decorators: [
    (Story) => (
      <div className="relative h-80 bg-gray-50 p-8">
        <div className="absolute inset-x-0 bottom-0">
          <Story />
        </div>
      </div>
    ),
  ],
};

export const AllVariants: Story = {
  args: {
    options: sampleOptions,
    isOpen: true,
  },
  render: () => (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-6">
      <div>
        <h3 className="mb-2 text-sm font-medium">XS - 114px (No Check Icon)</h3>
        <Dropdown options={sampleOptions} isOpen={true} variant="xs" />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">SM - 173px</h3>
        <Dropdown options={sampleOptions} isOpen={true} variant="sm" />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">MD - 228px</h3>
        <Dropdown options={sampleOptions} isOpen={true} variant="md" />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Default (Full Width)</h3>
        <Dropdown options={sampleOptions} isOpen={true} variant="default" />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Language Options (with flags)</h3>
        <Dropdown options={languageOptions} isOpen={true} variant="xs" />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Currency Options</h3>
        <Dropdown options={currencyOptions} isOpen={true} variant="xs" />
      </div>
    </div>
  ),
};
