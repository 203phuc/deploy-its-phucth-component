import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Flex from './Flex';

describe('Flex Component', () => {
  it('renders correctly with default props', () => {
    render(
      <Flex data-testid="flex-default">
        <div>Child</div>
      </Flex>,
    );

    const flex = screen.getByTestId('flex-default');
    expect(flex).toBeInTheDocument();
    expect(flex).toHaveClass('flex', 'flex-row', 'justify-start', 'items-stretch', 'flex-nowrap');
  });

  it('applies direction, justify, align, and wrap props', () => {
    render(<Flex data-testid="flex-custom" direction="column" justify="center" align="end" wrap="wrap" />);

    const flex = screen.getByTestId('flex-custom');
    expect(flex).toHaveClass('flex-col', 'justify-center', 'items-end', 'flex-wrap');
  });

  it('applies gap and flex inline styles', () => {
    render(<Flex data-testid="flex-style" gap={12} flex={1} />);
    const flex = screen.getByTestId('flex-style');

    expect(flex).toHaveStyle({
      gap: '12px',
      flex: '1px', // your toUnit() converts numbers to px strings
    });
  });

  it('merges custom className correctly', () => {
    render(<Flex className="bg-red-500" data-testid="flex-class" />);
    const flex = screen.getByTestId('flex-class');

    expect(flex).toHaveClass('bg-red-500');
  });

  it('renders children correctly', () => {
    render(
      <Flex data-testid="flex-children">
        <span>Item 1</span>
        <span>Item 2</span>
      </Flex>,
    );

    const flex = screen.getByTestId('flex-children');
    expect(flex).toHaveTextContent('Item 1');
    expect(flex).toHaveTextContent('Item 2');
  });
});
