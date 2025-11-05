import { Flex } from '@components/Atom/Flex';
import { Grid } from '@components/Atom/Grid';
import { Link } from '@components/Atom/Link';
import { Logo } from '@components/Atom/Logo/Logo';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import Toggle from '@components/Atom/Toggle/Toggle';
import { Timer } from '@components/Molecule/Timer/Timer';
import { memo, useEffect, useRef, useState } from 'react';
import { Button } from '../../components/Atom/Button/Button';
import { Input } from '../../components/Atom/Input/Input';
import { Dropdown } from '../../components/Molecule/Dropdown/Dropdown';
import { Slider, SliderSlide } from '../../components/Molecule/Slider';

const HBZ0000Component = () => {
  const [pss, setPss] = useState<'text' | 'password'>('text');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState(''); // what the user types
  const [selectedValue, setSelectedValue] = useState(''); // actual dropdown selection

  // Sample dropdown options
  const dropdownOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionSelect = (value: string | number) => {
    setSelectedValue(String(value));
    setInputValue(String(value)); // update input as well
    setIsDropdownOpen(false);
  };

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
      <div className="mb-4">
        <Section w={700}>
          <Input
            label="Select an option"
            value={inputValue}
            placeholder="Select an option"
            onChange={(e) => setInputValue(e.target.value)}
            onClick={() => !isDropdownOpen && setIsDropdownOpen(true)}
            iconEnd="ChevronDownIcon"
            onIconEndClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
          {isDropdownOpen && (
            <Dropdown
              options={dropdownOptions.filter((option) =>
                option.label.toLowerCase().includes(inputValue.toLowerCase()),
              )}
              isOpen={isDropdownOpen}
              onClose={() => setIsDropdownOpen(false)}
              onSelect={handleOptionSelect}
              value={selectedValue}
              variant="other"
              className="w-full rounded-md border border-gray-200 shadow-lg"
            />
          )}
        </Section>
      </div>

      <Input
        label="Password Toggle"
        type={pss}
        placeholder="Enter password"
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
      </div>
      <Section w={20} bgColor="black" h={20} borderRadius="100%">
        <Flex align="center">
          <Text font="inter" color="white" weight="bold" size="xsmall">
            2
          </Text>
        </Flex>
      </Section>
      <Section w={40} bgColor="black" h={40} borderRadius="100%">
        <Flex width="100%" direction="row" height="100%" align="center" justify="center">
          <Text font="inter" color="white" weight="bold" size="xsmall">
            2
          </Text>
        </Flex>
      </Section>
      <Grid columns={2} rows={2} width={800} height={100}>
        <div style={{ background: 'black' }}></div>
        <div style={{ background: 'blue' }}></div>
        <div style={{ background: 'violet' }}></div>
      </Grid>
      <Timer label="Hurry up" start labelSpan=", offer expired in:" endDate="20/11/2025" mobile />
    </>
  );
};

export const HBZ0000 = memo(HBZ0000Component);
