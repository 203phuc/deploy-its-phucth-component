import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { DropdownMixed } from './DropdownMixed';

const meta = {
  title: 'Molecule/DropdownMixed',
  component: DropdownMixed,
  parameters: {
    docs: {
      description: {
        component:
          'A dropdown-only select component with styling listItem.\n\n### Features:\n- Width highly customizable\n Controlled open/close state',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/9UZRn0vjE9VPlnRt17y40H/HAIBAZO-Design-System?node-id=250-341&t=WxpxLpIj0b9FfDz7-1',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    listItem: {
      control: 'object',
      description: 'Array of dropdown listItem',
    },
    isOpen: {
      control: 'boolean',
      description: 'Whether the dropdown is open',
    },
    fitContent: {
      control: 'boolean',
      description: 'Whether the dropdown height fits its content',
    },
    textColor: {
      control: 'text',
      description: 'Text color of dropdown items',
    },
    textSize: {
      control: 'text',
      description: 'Font size for dropdown text',
    },
    width: {
      control: 'text',
      description: 'control the width of component',
    },
    height: {
      control: 'text',
      description: 'control the width of component',
    },
  },
} satisfies Meta<typeof DropdownMixed>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleListItem = [
  {
    label: 'Option 1',
    value: 'option1',
    onSelect: () => {
      console.log('it me 1');
    },
  },
  {
    label: 'Option 2',
    value: 'option2',
    onSelect: () => {
      console.log('it me 2');
    },
  },
  {
    label: 'Option 3',
    value: 'option3',
    onSelect: () => {
      console.log('it me 3');
    },
  },
  { label: 'Disabled Option', value: 'disabled', disabled: true },
  {
    label: 'Option 4',
    value: 'option4',
    onSelect: () => {
      console.log('it me 4');
    },
  },
];

const languageListItem = [
  { label: 'German', value: 'de' },
  { label: 'Italian', value: 'it' },
  { label: 'Egypt', value: 'eg' },
  { label: 'Japan', value: 'jp' },
  { label: 'English', value: 'en' },
];

const currencyListItem = [
  { label: 'USD', value: 'usd' },
  { label: 'EUR', value: 'eur' },
  { label: 'GBP', value: 'gbp' },
  { label: 'JPY', value: 'jpy' },
];

export const Default: Story = {
  args: {
    listItem: sampleListItem,
    isOpen: true,
  },
};

export const Medium: Story = {
  args: {
    listItem: sampleListItem,
    isOpen: true,
    width: 228,
  },
};

export const Small: Story = {
  args: {
    listItem: sampleListItem,
    isOpen: true,
    width: 173,
  },
};

export const ExtraSmall: Story = {
  args: {
    listItem: sampleListItem,
    isOpen: true,
    width: 114,
  },
};

export const WithSelectedValue: Story = {
  args: {
    listItem: sampleListItem.map((opt) =>
      opt.value === 'option2' ? { ...opt, onSelect: () => console.log('Selected:', opt.label) } : opt,
    ),
    isOpen: true,
    textColor: 'blue-700',
  },
};

export const Disabled: Story = {
  args: {
    listItem: sampleListItem.map((opt) => ({ ...opt, disabled: true })),
    isOpen: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const InteractiveDropdown = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [selected, setSelected] = useState<string | number>('');

      const handleSelect = (value: string | number) => {
        setSelected(value);
        setIsOpen(false);
      };

      return (
        <div className="relative">
          <button
            onSelect={() => setIsOpen((prev) => !prev)}
            className="rounded-md border border-gray-300 bg-white px-4 py-2"
          >
            {selected ? sampleListItem.find((opt) => opt.value === selected)?.label : 'Select an option...'}
          </button>
          <DropdownMixed
            listItem={sampleListItem.map((opt) => ({
              ...opt,
              onSelect: () => handleSelect(opt.value),
            }))}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            width={228}
          />
        </div>
      );
    };

    return <InteractiveDropdown />;
  },
};

export const LanguageSelect: Story = {
  args: {
    listItem: languageListItem,
    isOpen: true,
    width: 114,
  },
};

export const CurrencySelect: Story = {
  args: {
    listItem: currencyListItem,
    isOpen: true,
    width: 114,
  },
};

export const DropUp: Story = {
  args: {
    listItem: sampleListItem,
    isOpen: true,
    height: 150,
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
  render: () => (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <h3 className="mb-2 text-sm font-medium">XS - 114px</h3>
        <DropdownMixed
          listItem={sampleListItem}
          paddingTop={16}
          paddingBot={16}
          paddingLeft={16}
          paddingRight={16}
          isOpen={true}
          textColor="black-900"
          gap={16}
          width={255}
        />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">SM - 173px</h3>
        <DropdownMixed
          padding={20}
          listItem={sampleListItem}
          paddingBot={12}
          textSize="small"
          gap={12}
          isOpen={true}
          width={173}
        />
      </div>
    </div>
  ),
};
