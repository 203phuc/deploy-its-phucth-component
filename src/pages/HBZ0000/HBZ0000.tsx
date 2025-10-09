import { Link } from '@components/Atom/Link';
import { Logo } from '@components/Atom/Logo/Logo';
import Toggle from '@components/Atom/Toggle/Toggle';
import { memo, useState } from 'react';
import { Button } from '../../components/Atom/Button/Button';

const HBZ0000Component = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          ></Button>
        </div>
      </div>
    </>
  );
};

export const HBZ0000 = memo(HBZ0000Component);
