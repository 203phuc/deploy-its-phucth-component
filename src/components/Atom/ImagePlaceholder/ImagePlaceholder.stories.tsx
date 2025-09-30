import type { Meta, StoryObj } from '@storybook/react-vite';
import { ImagePlaceholder } from './ImagePlaceholder';

const meta: Meta<typeof ImagePlaceholder> = {
  title: 'Atom/ImagePlaceholder',
  component: ImagePlaceholder,
  tags: ['autodocs'],
  parameters: {
    screenshot: {
      viewport: '335x76',
      omitBackground: true,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=186-36012&t=JCV8ENuJzwR6AnIe-4',
    },
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [
          's1',
          's2',
          's3',
          's4',
          's5',
          's6',
          's7',
          's8',
          's9',
          's10',
          's11',
          's12',
          's13',
          's14',
          's15',
          's16',
          's17',
          's18',
          's19',
          's20',
          's21',
          's22',
          's23',
          's24',
          's25',
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImagePlaceholder>;

export const Default: Story = {
  args: {
    size: 's1',
  },
};

export const WithSize: Story = {
  args: {
    size: 's5',
    className: 'bg-gray-200',
  },
};

export const WithContent: Story = {
  args: {
    size: 's10',
    children: (
      <div className="flex h-full w-full items-center justify-center bg-gray-100">
        <p className="text-gray-500">Custom Content</p>
      </div>
    ),
  },
};
