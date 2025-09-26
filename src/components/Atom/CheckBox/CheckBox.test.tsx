import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { CheckBox } from './CheckBox';

describe('Checkbox', () => {
  it('renders with label', () => {
    render(<CheckBox label="Test Checkbox" />);
    expect(screen.getByText('Test Checkbox')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleChange = vi.fn();
    render(<CheckBox onChange={handleChange} label="Click me" />);
    const checkbox = screen.getByLabelText('Click me');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('can be controlled', () => {
    const { rerender } = render(<CheckBox checked={false} label="Controlled" />);
    const checkbox = screen.getByLabelText('Controlled');
    expect(checkbox).not.toBeChecked();

    rerender(<CheckBox checked={true} label="Controlled" />);
    expect(checkbox).toBeChecked();
  });

  it('can be disabled', () => {
    render(<CheckBox disabled label="Disabled" />);
    const checkbox = screen.getByLabelText('Disabled');
    expect(checkbox).toBeDisabled();
  });

  it('applies size classes', () => {
    const { container } = render(<CheckBox size="small" label="Small" />);
    const wrapper = container.querySelector('.h-4');
    expect(wrapper).toHaveClass('h-4');
    expect(wrapper).toHaveClass('w-4');
  });

  it('applies roundness classes', () => {
    const { container } = render(<CheckBox roundness="rounded" label="Rounded" data-testid="checkbox" />);
    // Or if you want to be more specific about the element
    const wrapper = container.querySelector('.border-\\[1\\.5px\\]');

    expect(wrapper).toHaveClass('rounded-[8px]');
  });
});
