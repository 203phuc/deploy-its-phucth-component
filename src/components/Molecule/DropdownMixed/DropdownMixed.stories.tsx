import type { Meta, StoryObj } from '@storybook/react-vite';
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
    variant: {
      control: { type: 'select' },
      options: ['navigation', 'searchPanel'],
    },
  },
} satisfies Meta<typeof DropdownMixed>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleListItem = [
  {
    label: 'Option 1',
    value: 'option1',
  },
  {
    label: 'Option 2',
    value: 'option2',
  },
  {
    label: 'Option 3',
    value: 'option3',
  },
  { label: 'Disabled Option', value: 'disabled', disabled: true },
  {
    label: 'Option 4',
    value: 'option4',
  },
  {
    label: 'Option 5',
    value: 'option4',
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

export const Navigation: Story = {
  args: {
    listItem: sampleListItem,
    isOpen: true,
    variant: 'navigation',
  },
};

export const SearchPanel: Story = {
  args: {
    listItem: sampleListItem,
    isOpen: true,
    variant: 'searchPanel',
  },
};

export const Disabled: Story = {
  args: {
    listItem: sampleListItem.map((opt) => ({ ...opt, disabled: true })),
    isOpen: true,
  },
};

export const LanguageSelect: Story = {
  args: {
    listItem: languageListItem,
    isOpen: true,
  },
};

export const CurrencySelect: Story = {
  args: {
    listItem: currencyListItem,
    isOpen: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <h3 className="mb-2 text-sm font-medium">XS - 114px</h3>
        <DropdownMixed listItem={sampleListItem} isOpen={true} variant="navigation" />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">search panel</h3>
        <DropdownMixed listItem={sampleListItem} variant="searchPanel" isOpen={true} />
      </div>
    </div>
  ),
};
