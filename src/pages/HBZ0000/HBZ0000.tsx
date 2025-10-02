import { Link } from '@components/Atom/Link';
import Radio from '@components/Atom/Radio/Radio';
import Toggle from '@components/Atom/Toggle/Toggle';
import { memo } from 'react';
import { Button } from '../../components/Atom/Button/Button';

const HBZ0000Component = () => {
  return (
    <>
      <Button variant="outlined" size="large">
        Hello from HAIBAZO ^_^
      </Button>
      <br />
      <Link href="#">Hello from HAIBAZO ^_^</Link>
      <Toggle />
      <Radio
        onChange={(checked: boolean) => {
          console.log('checked', checked);
        }}
      />
    </>
  );
};

export const HBZ0000 = memo(HBZ0000Component);
