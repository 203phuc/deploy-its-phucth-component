import { Link } from '@components/Atom/Link';
import { Logo } from '@components/Atom/Logo/Logo';
import Toggle from '@components/Atom/Toggle/Toggle';
import { memo, useState } from 'react';
import { Button } from '../../components/Atom/Button/Button';
import { Input } from '../../components/Atom/Input/Input';

const HBZ0000Component = () => {
  const [pss, setPss] = useState<'text' | 'password'>('text');
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
        variant="line"
        type={pss}
        placeholder="Hello"
        iconEnd="ChevronDownIcon"
        onIconEndClick={() => setPss(pss === 'text' ? 'password' : 'text')}
      />
    </>
  );
};

export const HBZ0000 = memo(HBZ0000Component);
