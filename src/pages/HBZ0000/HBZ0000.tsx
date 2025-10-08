import { Link } from '@components/Atom/Link';
import { Logo } from '@components/Atom/Logo/Logo';
import Toggle from '@components/Atom/Toggle/Toggle';
import { memo, useState } from 'react';
import { Button } from '../../components/Atom/Button/Button';
import { Select } from '../../components/Atom/Select';

const HBZ0000Component = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | number>('');

  const options = [
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
    { label: 'Disabled C', value: 'c', disabled: true },
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
      <div style={{ marginTop: 16, maxWidth: 320 }}>
        <label htmlFor="demo-select" className="mb-1 block text-sm font-medium text-gray-700">
          Pick an option
        </label>
        <div className="relative">
          <Button
            id="demo-select"
            onClick={() => setIsOpen(!isOpen)}
            className="flex w-full items-start justify-start !p-0"
            font="spaceGrotesk"
            variant="underline"
            as="a"
            href="#"
            size="medium"
          >
            {selectedValue
              ? options.find((opt) => opt.value === selectedValue)?.label
              : 'Select an option...'}
          </Button>
          <Select
            options={options}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            value={selectedValue}
            onChange={setSelectedValue}
            data-testid="demo-select"
          />
        </div>
      </div>
    </>
  );
};

export const HBZ0000 = memo(HBZ0000Component);
