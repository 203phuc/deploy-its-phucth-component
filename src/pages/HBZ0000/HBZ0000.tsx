import { Link } from '@components/Atom/Link';
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
    </>
  );
};

export const HBZ0000 = memo(HBZ0000Component);
