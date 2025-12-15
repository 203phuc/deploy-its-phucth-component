import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from './Slider';
import type { SliderSlide } from './type';

// Sample slide data with different content types
const imageSlides: SliderSlide[] = [
  {
    id: 1,
    content: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    alt: 'Mountain landscape',
    caption: 'Beautiful mountain landscape at sunset',
  },
  {
    id: 2,
    content: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=400&fit=crop',
    alt: 'Forest path',
    caption: 'Serene forest path with sunlight filtering through trees',
  },
  {
    id: 3,
    content: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
    alt: 'Tree by lake',
    caption: 'Majestic tree standing by a peaceful lake',
  },
  {
    id: 4,
    content: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&sat=-100',
    alt: 'Ocean waves',
    caption: 'Powerful ocean waves crashing on the shore',
  },
];

const reactNodeSlides: SliderSlide[] = [
  {
    id: 10,
    content: (
      <div className="flex h-[500px] w-full items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
        <div className="space-y-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">🎨 Custom React Content</h2>
          <p className="mb-6 text-lg opacity-90">
            This slide demonstrates using React components as content instead of just images.
          </p>
          <button className="rounded-full bg-white px-6 py-3 font-semibold text-blue-600 shadow-lg transition-colors hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </div>
    ),
    caption: 'Interactive React component slide',
  },
  {
    id: 11,
    content: (
      <div className="flex h-[500px] w-full items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-teal-600 p-8 text-white">
        <div className="space-y-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">📱 Responsive Design</h2>
          <p className="mb-6 text-lg opacity-90">
            Fully responsive slider that adapts to different screen sizes and devices.
          </p>
          <div className="flex justify-center gap-2">
            <div className="h-3 w-3 rounded-full bg-white opacity-60"></div>
            <div className="h-3 w-3 rounded-full bg-white opacity-100"></div>
            <div className="h-3 w-3 rounded-full bg-white opacity-60"></div>
          </div>
        </div>
      </div>
    ),
    caption: 'Responsive design demonstration',
  },
];

const singleSlide: SliderSlide[] = [
  {
    id: 20,
    content: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    alt: 'Single mountain landscape',
    caption: 'A single beautiful slide',
  },
];

const meta = {
  title: 'Molecule/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component:
          'A versatile carousel component with navigation, auto-play, and flexible content support.\n\n### Features:\n- **Auto-play**: Configurable auto-advance with customizable intervals\n- **Navigation**: Dot indicators for manual navigation\n- **Loop**: Optional infinite loop behavior\n- **Content Types**: Supports both image URLs and React components\n- **Responsive**: Responsive design with flexible sizing\n- **Captions**: Optional slide captions\n- **Keyboard Accessible**: Full keyboard navigation support\n- **Customizable**: Extensive styling options via className and Tailwind',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=155-28248&t=08pLvyMYEsJkuPNr-4',
    },
  },
  argTypes: {
    autoPlay: {
      control: { type: 'number', min: 0, max: 10000, step: 500 },
      description: 'Auto-play interval in milliseconds (0 to disable)',
    },
    loop: {
      control: 'boolean',
      description: 'Whether to loop back to first slide after last slide',
    },
    widthFull: {
      control: 'boolean',
      description: 'Whether the slider should take full width of its container',
    },
    width: {
      control: 'text',
      description: 'Custom width (CSS value)',
    },
    onSlideChange: {
      action: 'slideChanged',
      description: 'Callback fired when slide changes',
    },
  },
  args: {
    slides: imageSlides,
  },
  decorators: [
    (Story) => (
      <div className="h-[700px] w-[900px] border">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples

export const Default: Story = {
  args: {
    slides: imageSlides,
    autoPlay: 0,
    loop: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default slider with multiple image slides and manual navigation only.',
      },
    },
  },
};

// Auto-play Examples

export const WithAutoPlay: Story = {
  args: {
    slides: imageSlides,
    autoPlay: 3000,
    loop: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Slider with auto-play enabled, advancing every 3 seconds.',
      },
    },
  },
};

export const FastAutoPlay: Story = {
  args: {
    slides: imageSlides,
    autoPlay: 1500,
    loop: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Faster auto-play interval of 1.5 seconds for quick transitions.',
      },
    },
  },
};

export const NoAutoPlay: Story = {
  args: {
    slides: imageSlides,
    autoPlay: 0,
    loop: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Manual navigation only with no looping (stops at last slide).',
      },
    },
  },
};

// Content Type Examples

export const ImageSlides: Story = {
  args: {
    slides: imageSlides,
    autoPlay: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard image slides with captions and alt text for accessibility.',
      },
    },
  },
};

export const ReactNodeSlides: Story = {
  args: {
    slides: reactNodeSlides,
    autoPlay: 3000,
    width: '900px',
    height: '500px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Slides using React components instead of images for rich content.',
      },
    },
  },
};

export const MixedContent: Story = {
  args: {
    slides: [...imageSlides.slice(0, 2), ...reactNodeSlides.slice(0, 1), ...imageSlides.slice(2, 3)],
    autoPlay: 2500,
  },
  parameters: {
    docs: {
      description: {
        story: 'Mixed content types in a single slider with auto-play.',
      },
    },
  },
};

// Layout Examples

export const FullWidth: Story = {
  args: {
    slides: imageSlides,
    widthFull: true,
    autoPlay: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'Full width slider that takes the entire container width.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[900px] rounded-lg border border-gray-200">
        <Story />
      </div>
    ),
  ],
};

export const CustomWidth: Story = {
  args: {
    slides: imageSlides,
    width: '600px',
    widthFull: false,
    autoPlay: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom width slider with fixed dimensions instead of full width.',
      },
    },
  },
};

// Slide Count Examples

export const SingleSlide: Story = {
  args: {
    slides: singleSlide,
    autoPlay: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'Single slide - navigation dots are still visible but non-functional.',
      },
    },
  },
};

export const ManySlides: Story = {
  args: {
    slides: [
      ...imageSlides,
      {
        id: 5,
        content: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop',
        alt: 'Desert landscape',
        caption: 'Beautiful desert landscape at golden hour',
      },
      {
        id: 6,
        content: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&hue=180',
        alt: 'City skyline',
        caption: 'Modern city skyline with dramatic lighting',
      },
    ],
    autoPlay: 2000,
    loop: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple slides (6 total) with fast auto-play and looping enabled.',
      },
    },
  },
};

// Interactive Examples

export const WithSlideChangeCallback: Story = {
  args: {
    slides: imageSlides,
    autoPlay: 0,
    onSlideChange: (index, slide) => {
      console.log(`Slide changed to ${index + 1}:`, slide);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Slider with slide change callback - check console for slide change events.',
      },
    },
  },
};

export const NoCaptions: Story = {
  args: {
    slides: imageSlides.map(({ ...slide }) => slide),
    autoPlay: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'Slides without captions - clean, minimal presentation.',
      },
    },
  },
};

// Edge Cases

export const EmptySlides: Story = {
  args: {
    slides: [],
    autoPlay: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty slides array - component renders nothing as expected.',
      },
    },
  },
};

export const SlidesWithoutAlt: Story = {
  args: {
    slides: imageSlides.map(({ ...slide }) => slide),
    autoPlay: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'Slides without alt text - demonstrates fallback alt text generation.',
      },
    },
  },
};
