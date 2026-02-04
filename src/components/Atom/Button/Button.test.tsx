import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies base font class', () => {
    const { container } = render(<Button>Test</Button>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('font-medium');
  });

  it('applies size classes', () => {
    const { container } = render(<Button size="large">Large</Button>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('h-[72px]');
  });

  it('renders as anchor when as="a"', () => {
    render(
      <Button as="a" href="https://example.com" data-testid="link">
        Link
      </Button>,
    );
    const el = screen.getByTestId('link');
    expect(el.tagName.toLowerCase()).toBe('a');
    expect(el).toHaveAttribute('href', 'https://example.com');
  });

  it('forwards native props', () => {
    render(
      <Button aria-label="btn" data-testid="btn">
        OK
      </Button>,
    );
    const el = screen.getByTestId('btn');
    expect(el).toHaveAttribute('aria-label', 'btn');
  });

  // 🔥 New tests

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies disabled state', () => {
    const { container } = render(<Button disabled>Disabled</Button>);
    const el = container.firstChild as HTMLButtonElement;
    expect(el).toBeDisabled();
    expect(el.className).toContain('disabled:cursor-not-allowed');
  });

  it('applies variant classes', () => {
    const { container } = render(<Button variant="outlined">Outlined</Button>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('border-2');
  });

  it('applies roundness classes', () => {
    const { container } = render(<Button roundness="round">Round</Button>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('rounded-[6px]');
  });

  it('applies fullWidth classes', () => {
    const { container } = render(<Button fullWidth>Full</Button>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('w-full');
  });

  it('uses default type="button" when no type provided', () => {
    const { container } = render(<Button>Default Type</Button>);
    const el = container.firstChild as HTMLButtonElement;
    expect(el.type).toBe('button');
  });

  it('accepts custom className', () => {
    const { container } = render(<Button className="custom-class">Custom</Button>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('custom-class');
  });
});
