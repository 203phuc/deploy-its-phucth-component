import { Link } from '@components/Atom/Link';
import { Logo } from '@components/Atom/Logo/Logo';
import Toggle from '@components/Atom/Toggle/Toggle';
import { memo, useState } from 'react';
import { Button } from '../../components/Atom/Button/Button';
import { Input } from '../../components/Atom/Input/Input';
import { Slider, SliderSlide } from '../../components/Molecule/Slider';

const HBZ0000Component = () => {
  const [pss, setPss] = useState<'text' | 'password'>('text');

  const sliderSlides: SliderSlide[] = [
    {
      id: 1,
      content: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
      alt: 'Mountain landscape',
    },
    {
      id: 2,
      content: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=400&fit=crop',
      alt: 'Forest path',
    },
    {
      id: 3,
      content: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
      alt: 'Tree by lake',
    },
  ];

  return (
    <>
      <Button variant="outlined" size="large">
        Hello from HAIBAZO ^_^
      </Button>
      <br />
      <Link href="#">Hello from HAIBAZO ^_^</Link>
      <Toggle />
      <Logo size="large" logoName="PumaLogo" />
      <Input
        label="Hello"
        type={pss}
        placeholder="Hello"
        iconEnd="ChevronDownIcon"
        onIconEndClick={() => setPss(pss === 'text' ? 'password' : 'text')}
        buttonEnd={
          <Button size="medium" variant="text">
            Apply
          </Button>
        }
        required
      />

      {/* Slider Component for Testing */}
      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold">Slider Test</h2>

        {/* Small Slider */}
        <div className="mb-8">
          <h3 className="mb-2 text-lg font-semibold">Small Slider (200x200)</h3>
          <Slider slides={sliderSlides} width={200} autoPlay={3000} loop={true} />
        </div>

        {/* Default Medium Slider */}
        <div className="mb-8">
          <h3 className="mb-2 text-lg font-semibold">Medium Slider (300x300) - Default</h3>
          <Slider slides={sliderSlides} autoPlay={3000} loop={true} showDots={true} />
        </div>

        {/* Large Slider */}
        <div className="mb-8">
          <h3 className="mb-2 text-lg font-semibold">Large Slider (500x300)</h3>
          <Slider slides={sliderSlides} width={400} autoPlay={3000} loop={true} showDots={true} />
        </div>

        {/* Full Width Slider */}
        <div className="mb-8">
          <h3 className="mb-2 text-lg font-semibold">Full Width Slider (100% x 400px)</h3>
          <Slider slides={sliderSlides} autoPlay={3000} loop={true} showDots={true} />
        </div>

        {/* Custom Size Slider */}
        <div className="mb-8">
          <h3 className="mb-2 text-lg font-semibold">Custom Size Slider (400x250)</h3>
          <Slider slides={sliderSlides} width="400px" autoPlay={3000} loop={true} showDots={true} />
        </div>
      </div>
    </>
  );
};

export const HBZ0000 = memo(HBZ0000Component);
