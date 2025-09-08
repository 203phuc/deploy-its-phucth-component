import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  const BUTTON_LABEL = 'Click me';

  it('should render', () => {
    const { container } = render(<Button>{BUTTON_LABEL}</Button>);

    expect(container).toBeInTheDocument();
  });
});
