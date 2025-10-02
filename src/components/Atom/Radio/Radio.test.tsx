import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Radio } from './Radio';

describe('Radio Component', () => {
  it('renders correctly with default props', () => {
    render(<Radio data-testid="radio" />);
    const radio = screen.getByTestId('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).not.toBeChecked();
  });

  it('handles checked state', () => {
    render(<Radio checked={true} data-testid="checked" />);
    const radio = screen.getByTestId('checked');
    expect(radio).toBeChecked();
  });

  it('calls onChange with correct checked value when clicked', () => {
    const handleChange = vi.fn();
    render(<Radio onChange={handleChange} data-testid="checked-correct" checked={false} />);
    const radio = screen.getByTestId('checked-correct');

    fireEvent.click(radio);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('applies disabled state correctly', () => {
    render(<Radio disabled data-testid="disabled" />);
    const radio = screen.getByTestId('disabled');
    expect(radio).toBeDisabled();
  });

  it('applies custom className', () => {
    const testClassName = 'custom-radio-class';
    const { container } = render(<Radio className={testClassName} data-testid="custom-class" />);
    expect(container.firstChild).toHaveClass(testClassName);
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Radio size="sm" data-testid="size-sm" />);
    expect(screen.getByTestId('size-sm').parentElement).toHaveClass('h-[18px] w-[18px]');

    rerender(<Radio size="md" data-testid="size-md" />);
    expect(screen.getByTestId('size-md').parentElement).toHaveClass('h-[24px] w-[24px]');

    rerender(<Radio size="lg" data-testid="size-lg" />);
    expect(screen.getByTestId('size-lg').parentElement).toHaveClass('h-[32px] w-[32px]');
  });
});
