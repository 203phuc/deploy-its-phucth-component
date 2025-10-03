import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge } from './Badge';

describe('Badge Component', () => {
  it('renders children text', () => {
    render(<Badge size="medium">Hello Badge</Badge>);
    expect(screen.getByText('Hello Badge')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Badge size="small" className="custom-class">
        Badge Text
      </Badge>,
    );
    const badge = screen.getByText('Badge Text');
    expect(badge).toHaveClass('custom-class');
  });

  it('respects the size prop', () => {
    render(<Badge size="large">Large Badge</Badge>);
    const badge = screen.getByText('Large Badge');
    // Just check className contains "large"
    expect(badge).toHaveClass('px-[16px]');
  });

  it('respects the color prop when not outline', () => {
    render(
      <Badge color="red" variant="solid">
        Red Badge
      </Badge>,
    );
    const badge = screen.getByText('Red Badge');
    expect(badge.className).toContain('red');
  });

  it('forces color to "none" when variant="outline"', () => {
    render(
      <Badge color="red" variant="outline">
        Outline Badge
      </Badge>,
    );
    const badge = screen.getByText('Outline Badge');
    expect(badge.className).toContain('none'); // overridden
  });

  it('passes through extra HTML props (e.g. data-testid)', () => {
    render(<Badge data-testid="badge-test">Badge Content</Badge>);
    expect(screen.getByTestId('badge-test')).toBeInTheDocument();
  });
});
