import type { Meta, StoryObj } from '@storybook/react-vite';
import { VideoPlayer } from './VideoPlayer';
import type { VideoPlayerSize } from './type';

const meta = {
  title: 'Atom/VideoPlayer',
  component: VideoPlayer,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=184-27805&t=N2S1qzGS0H5uHQQj-0',
    },
    docs: {
      description: {
        component:
          'A basic video player with overlay play/pause control and optional size presets. Use `size` for defaults and override with `className` to set explicit width/height.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['default', 'special'] as VideoPlayerSize[],
      description: 'Preset dimensions for the container',
    },
    iconSize: {
      control: { type: 'number' },
      description: 'Pixel size of the play/close icon',
    },
    iconBoxSize: {
      control: { type: 'number' },
      description: 'Pixel size of the icon box (overrides default scaling)',
    },
    className: {
      control: 'text',
      description: 'Additional class names (e.g., h-[300px] w-[500px])',
    },
    poster: {
      control: 'text',
      description: 'Poster image URL shown before playback',
    },
    src: {
      control: 'text',
      description: 'Video source URL',
    },
  },
  args: {
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    size: 'default',
    poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  },
} satisfies Meta<typeof VideoPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 16 }}>
      <VideoPlayer {...args} size="default" />
      <VideoPlayer {...args} size="special" />
    </div>
  ),
};

export const CustomDimensions: Story = {
  args: {
    size: 'special',
    className: 'w-[600px] h-[340px]',
  },
};
