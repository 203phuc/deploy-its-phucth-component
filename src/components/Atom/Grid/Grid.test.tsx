import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Grid from './Grid';

describe('Grid Component', () => {
  // --- BASIC RENDERING ---
  it('renders correctly with default props', () => {
    render(
      <Grid data-testid="grid-default">
        <div>Child</div>
      </Grid>,
    );

    const grid = screen.getByTestId('grid-default');
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveClass('grid', 'items-stretch', 'justify-items-stretch');
  });

  // --- ALIGNMENT & JUSTIFICATION ---
  it('applies align and justify props correctly', () => {
    render(
      <Grid data-testid="grid-align" align="center" justify="end">
        <div>Centered</div>
      </Grid>,
    );

    const grid = screen.getByTestId('grid-align');
    expect(grid).toHaveClass('items-center', 'justify-items-end');
  });

  it('supports "start", "end", and "space-between" justify/align variants', () => {
    render(<Grid data-testid="grid-align-variants" align="start" justify="space-between" />);

    const grid = screen.getByTestId('grid-align-variants');
    expect(grid).toHaveClass('items-start', 'justify-items-between');
  });

  // --- GRID TEMPLATE & GAPS ---
  it('applies columns, rows, and gaps as inline styles', () => {
    render(<Grid data-testid="grid-style" columns={3} rows={2} gap={16} rowGap={8} columnGap={12} />);

    const grid = screen.getByTestId('grid-style');
    expect(grid).toHaveStyle({
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
      gap: '16px',
      rowGap: '8px',
      columnGap: '12px',
    });
  });

  it('accepts string-based grid template values', () => {
    render(<Grid data-testid="grid-string" columns="200px 1fr" rows="auto auto" />);

    const grid = screen.getByTestId('grid-string');
    expect(grid).toHaveStyle({
      gridTemplateColumns: '200px 1fr',
      gridTemplateRows: 'auto auto',
    });
  });

  it('supports merging custom style props with computed ones', () => {
    render(<Grid data-testid="grid-merge" columns={4} style={{ backgroundColor: 'red', padding: '10px' }} />);

    const grid = screen.getByTestId('grid-merge');
    // Check inline style directly
    expect(grid.style.gridTemplateColumns).toBe('repeat(4, 1fr)');
    expect(grid.style.backgroundColor).toBe('red');
  });

  // --- CUSTOM CLASS HANDLING ---
  it('merges custom className correctly', () => {
    render(<Grid className="bg-blue-500 shadow-lg" data-testid="grid-class" />);
    const grid = screen.getByTestId('grid-class');
    expect(grid).toHaveClass('bg-blue-500', 'shadow-lg');
  });

  it('preserves both default and user-defined classes', () => {
    render(<Grid data-testid="grid-merge-class" className="rounded-md border" />);
    const grid = screen.getByTestId('grid-merge-class');
    expect(grid).toHaveClass('grid', 'rounded-md', 'border');
  });

  // --- CHILDREN RENDERING ---
  it('renders children correctly', () => {
    render(
      <Grid data-testid="grid-children">
        <span>Item 1</span>
        <span>Item 2</span>
      </Grid>,
    );

    const grid = screen.getByTestId('grid-children');
    expect(grid).toHaveTextContent('Item 1');
    expect(grid).toHaveTextContent('Item 2');
  });

  it('handles empty children gracefully', () => {
    render(<Grid data-testid="grid-empty" />);
    const grid = screen.getByTestId('grid-empty');
    expect(grid).toBeEmptyDOMElement();
  });

  // --- EDGE CASES ---
  it('does not apply undefined or null style values', () => {
    render(<Grid data-testid="grid-edge" columns={undefined} rows={undefined} />);

    const grid = screen.getByTestId('grid-edge');
    const style = grid.getAttribute('style') ?? '';
    expect(style.includes('undefined')).toBe(false);
    expect(style.includes('null')).toBe(false);
  });

  it('handles numeric-only props safely', () => {
    render(<Grid data-testid="grid-numeric" columns={1} rows={1} gap={0} rowGap={0} columnGap={0} />);

    const grid = screen.getByTestId('grid-numeric');
    expect(grid).toHaveStyle({
      gridTemplateColumns: 'repeat(1, 1fr)',
      gridTemplateRows: 'repeat(1, 1fr)',
      gap: '0px',
      rowGap: '0px',
      columnGap: '0px',
    });
  });

  // --- INTEGRATION-STYLE TEST ---
  it('applies all layout props together in a realistic use case', () => {
    render(
      <Grid
        data-testid="grid-full"
        columns={12}
        gap={24}
        align="center"
        justify="space-between"
        className="mx-auto max-w-screen-xl p-6"
        style={{ backgroundColor: 'white' }}
      >
        <div>Header</div>
        <div>Sidebar</div>
        <div>Main</div>
      </Grid>,
    );

    const grid = screen.getByTestId('grid-full');
    expect(grid).toHaveClass(
      'grid',
      'items-center',
      'justify-items-between',
      'max-w-screen-xl',
      'mx-auto',
      'p-6',
    );
    expect(grid.style.gridTemplateColumns).toBe('repeat(12, 1fr)');
    expect(grid.style.backgroundColor).toBe('white');
    expect(grid).toHaveTextContent('Header');
    expect(grid).toHaveTextContent('Sidebar');
    expect(grid).toHaveTextContent('Main');
  });
});
