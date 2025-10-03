// Logo.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Logo } from './Logo';

describe('Logo', () => {
  it('renders the correct logo based on logoName', () => {
    render(<Logo data-testid="test-1" logoName="MarcLogo" />);
    expect(screen.getByTestId('test-1')).toBeInTheDocument();
  });

  it('applies default medium size if none given', () => {
    render(<Logo logoName="MarcLogo" data-testid="test2" />);
    const logo = screen.getByTestId('test2');
    expect(logo).toHaveAttribute('width', '140');
    expect(logo).toHaveAttribute('height', '70');
  });

  it('renders large size when specified', () => {
    render(<Logo logoName="MarcLogo" size="large" data-testid="test3" />);
    const logo = screen.getByTestId('test3');
    expect(logo).toHaveAttribute('width', '160');
    expect(logo).toHaveAttribute('height', '80');
  });

  it('overrides dimensions with custom width/height', () => {
    render(<Logo logoName="MarcLogo" width={200} height={100} data-testid="custom" />);
    const logo = screen.getByTestId('custom');
    expect(logo).toHaveAttribute('width', '200');
    expect(logo).toHaveAttribute('height', '100');
  });

  it('accepts custom string colors', () => {
    render(<Logo logoName="MarcLogo" className="text-black" data-testid="color-custom" />);
    const logo = screen.getByTestId('color-custom');
    expect(logo).toHaveClass('text-black');
  });

  it('forwards extra props like className', () => {
    render(<Logo logoName="MarcLogo" className="custom-class" data-testid="wrapper" />);
    const wrapper = screen.getByTestId('wrapper');
    expect(wrapper).toHaveClass('custom-class');
  });
});
