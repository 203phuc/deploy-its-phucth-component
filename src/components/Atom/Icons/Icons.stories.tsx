import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icons } from './Icons';
import * as AllIcons from './icons/index';

const meta: Meta<typeof Icons> = {
  title: 'Atom/Icons',
  component: Icons,
  tags: ['autodocs'],
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

// export const AllIcons: Story = {
//   render: (args) => (
//     <div
//       style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
//         gap: '16px',
//         padding: '16px',
//       }}
//     >
//       {Object.entries(AllIcons).map(([name]) => (
//         <div
//           key={name}
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             padding: '16px',
//             borderRadius: '8px',
//             backgroundColor: '#f8f8f8',
//           }}
//         >
//           <Icons {...args} iconName={name as keyof typeof AllIcons} style={{ marginBottom: '8px' }} />
//           <div
//             style={{
//               fontSize: '12px',
//               textAlign: 'center',
//               wordBreak: 'break-word',
//               width: '100%',
//             }}
//           >
//             {name}
//           </div>
//         </div>
//       ))}
//     </div>
//   ),
//   args: {
//     size: 32,
//     box: false,
//   },
//   parameters: {
//     controls: { exclude: ['iconName'] },
//   },
// };

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
