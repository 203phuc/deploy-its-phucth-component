import { render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Slider } from './Slider';
import { SliderSlide } from './type';

const reactNodeSlides: SliderSlide[] = [
  {
    id: 10,
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
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
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-teal-600 p-8 text-white">
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
const slides: SliderSlide[] = [
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

describe('Slider', () => {
  it('renders with slides', () => {
    render(<Slider slides={slides} data-testid="slider" />);
    expect(screen.getByTestId('slider')).toBeInTheDocument();
  });
});

it('renders images (async)', () => {
  render(<Slider slides={slides} data-testid="slider1" />);
  const slider = screen.getByTestId('slider1');
  const imgs = within(slider).getAllByRole('img');
  expect(imgs).not.toHaveLength(0);
});

it('render with dots', () => {
  render(<Slider slides={slides} data-testid="slider2" />);
  const slider = screen.getByTestId('slider2');
  const dots = within(slider).getAllByRole('button');
  expect(dots).not.toHaveLength(0);
});

it('render with custom width and height', () => {
  render(<Slider slides={slides} width="300px" height="200px" data-testid="slider3" />);
  const slider = screen.getByTestId('slider3');
  expect(slider).toHaveStyle({ width: '300px' });
});

it('render with auto play', () => {
  render(<Slider slides={slides} autoPlay={1000} data-testid="slider4" />);
  const slider = screen.getByTestId('slider4');
  expect(slider).toBeInTheDocument();
});

it('render with loop', () => {
  render(<Slider slides={slides} loop={true} data-testid="slider5" />);
  const slider = screen.getByTestId('slider5');
  expect(slider).toBeInTheDocument();
});

it('render with onSlideChange', () => {
  const onSlideChange = vi.fn();
  render(<Slider slides={slides} onSlideChange={onSlideChange} data-testid="slider6" />);
  const slider = screen.getByTestId('slider6');
  expect(slider).toBeInTheDocument();
});

it('render with ReactNodeSlides', () => {
  render(<Slider slides={reactNodeSlides} data-testid="slider7" />);
  const slider = screen.getByTestId('slider7');
  const heading = within(slider).getAllByRole('heading');
  expect(heading.length).toBeGreaterThan(0);
});
