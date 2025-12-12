import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icons } from './Icons';
import * as AllIcons from './icons/index';

const meta: Meta<typeof Icons> = {
  title: 'Atom/Icons',
  component: Icons,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=8-96709',
    },
  },
  argTypes: {
    iconName: {
      control: 'select',
      options: Object.keys(AllIcons),
      description: 'Name of the icon to display',
    },
    color: {
      control: 'color',
      description: 'Color of the icon',
    },
    box: {
      control: 'boolean',
      description: 'Whether to show the box wrapper',
    },
    boxFill: {
      control: 'select',
      options: ['red', 'green', 'white', 'none'],
      description: 'Background color of the box',
    },
    boxBorder: {
      control: 'boolean',
      description: 'Whether to show border around the box',
    },
    boxRoundness: {
      control: 'select',
      options: ['pill', 'round', 'sharp'],
      description: 'Border radius of the box',
    },
    boxBorderWidth: {
      control: { type: 'text' },
      description: 'Border width of the box',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icons>;

export const Default: Story = {
  args: {
    iconName: 'HeartIcon',
    color: 'black',
  },
};

export const WithBox: Story = {
  args: {
    ...Default.args,
    box: true,
    boxFill: 'white',
    boxBorder: true,
    boxRoundness: 'round',
  },
};

export const AllIconsShow: Story = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '16px',
        padding: '16px',
      }}
    >
      {Object.entries(AllIcons).map(([name]) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '16px',
            borderRadius: '8px',
            backgroundColor: '#f8f8f8',
          }}
        >
          <Icons {...args} iconName={name as keyof typeof AllIcons} style={{ marginBottom: '8px' }} />
          <div
            style={{
              fontSize: '12px',
              textAlign: 'center',
              wordBreak: 'break-word',
              width: '100%',
            }}
          >
            {name}
          </div>
        </div>
      ))}
    </div>
  ),
  args: {
    iconSize: 32,
    box: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'All available icons displayed in a grid layout.',
      },
    },
  },
};

export const SocialIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Icons iconName="FacebookIcon" iconClassName="text-[#1877F2]" iconSize={40} />
      <Icons iconName="InstagramIcon" iconClassName="text-[#E1306C]" iconSize={40} />
      <Icons iconName="TwitterIcon" iconClassName="text-[#1DA1F2]" iconSize={40} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common social media icons with their brand colors.',
      },
    },
  },
};

export const NavigationIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Icons iconName="ArrowLeftIcon" iconClassName="text-[#333]" iconSize={24} />
      <Icons iconName="ArrowRightIcon" iconClassName="text-[#333]" iconSize={24} />
      <Icons iconName="ArrowUpIcon" iconClassName="text-[#333]" iconSize={24} />
      <Icons iconName="ArrowDownIcon" iconClassName="text-[#333]" iconSize={24} />
      <Icons iconName="ChevronLeftIcon" iconClassName="text-[#333]" iconSize={24} />
      <Icons iconName="ChevronRightIcon" iconClassName="text-[#333]" iconSize={24} />
      <Icons iconName="ChevronUpIcon" iconClassName="text-[#333]" iconSize={24} />
      <Icons iconName="ChevronDownIcon" iconClassName="text-[#333]" iconSize={24} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common navigation icons for user interfaces.',
      },
    },
  },
};

export const ActionIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Icons iconName="EditIcon" iconClassName="text-blue-500" iconSize={24} />
      <Icons iconName="TrashIcon" iconClassName="text-black" iconSize={24} />
      <Icons iconName="CheckIcon" iconClassName="text-green-500" iconSize={24} />
      <Icons iconName="PlusIcon" iconClassName="text-blue-500" iconSize={24} />
      <Icons iconName="SearchIcon" iconClassName="text-gray-500" iconSize={24} />
      <Icons iconName="CloseIcon" iconClassName="text-red-500" iconSize={24} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common action icons for user interactions.',
      },
    },
  },
};

export const IconWithDifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
      <Icons iconName="UserIcon" iconClassName="text-[#333]" iconSize={16} />
      <Icons iconName="UserIcon" iconClassName="text-[#333]" iconSize={24} />
      <Icons iconName="UserIcon" iconClassName="text-[#333]" iconSize={32} />
      <Icons iconName="UserIcon" iconClassName="text-[#333]" iconSize={48} />
      <Icons iconName="UserIcon" iconClassName="text-[#333]" iconSize={64} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The same icon displayed in different sizes.',
      },
    },
  },
};

export const IconWithBoxVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <div>
        <Icons
          iconName="HeartFilledIcon"
          color="black"
          iconSize={24}
          box
          boxFill="white"
          boxBorder
          boxRoundness="round"
        />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Rounded</div>
      </div>

      <div>
        <Icons
          iconName="StarFilledIcon"
          iconClassName="text-yellow-500"
          iconSize={24}
          box
          boxFill="white"
          boxBorder={false}
          boxRoundness="sharp"
        />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Sharp</div>
      </div>

      <div>
        <Icons
          iconName="CheckIcon"
          iconClassName="text-green-500"
          iconSize={24}
          box
          boxFill="white"
          boxBorder={false}
          boxRoundness="pill"
        />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Pill</div>
      </div>

      <div>
        <Icons
          iconName="PhoneIcon"
          iconClassName="text-white"
          iconSize={24}
          box
          boxFill="red"
          boxBorder={false}
          boxRoundness="round"
        />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Filled</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different box styling variations for icons.',
      },
    },
  },
};

export const Interactive: Story = {
  args: {
    ...Default.args,
    box: true,
  },
};

Interactive.argTypes = {
  iconName: {
    control: 'select',
    options: Object.keys(AllIcons),
  },
  color: { control: 'color' },
  boxFill: { control: 'color' },
  boxBorder: { control: 'boolean' },
  boxRoundness: {
    control: 'select',
    options: ['none', 'sm', 'md', 'lg', 'full', 'round'],
  },
  boxBorderWidth: { control: 'text' },
};
