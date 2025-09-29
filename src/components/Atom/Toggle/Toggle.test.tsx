import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  // Test default state
  it('renders with default props', () => {
    render(<Toggle data-testid="toggle-default" />);
    const toggle = screen.getByTestId('toggle-default');

    expect(toggle).toBeInTheDocument();
    expect(toggle).not.toBeChecked();
  });

  // Test controlled component behavior
  describe('Controlled component', () => {
    it('calls onCheckedChange when controlled', () => {
      const handleChange = vi.fn();
      render(
        <Toggle data-testid="toggle-controlled-change" checked={false} onCheckedChange={handleChange} />,
      );

      const toggle = screen.getByTestId('toggle-controlled-change');
      fireEvent.click(toggle);

      expect(handleChange).toHaveBeenCalledWith(true);
      // Should still be false because it's controlled
      expect(toggle).not.toBeChecked();
    });
  });

  // Test uncontrolled component behavior
  describe('Uncontrolled component', () => {
    it('toggles when clicked', () => {
      const handleChange = vi.fn();
      render(
        <Toggle data-testid="toggle-uncontrolled" defaultChecked={false} onCheckedChange={handleChange} />,
      );

      const toggle = screen.getByTestId('toggle-uncontrolled');

      // First click - should turn on
      fireEvent.click(toggle);
      expect(handleChange).toHaveBeenCalledWith(true);
      expect(handleChange).toHaveBeenCalledTimes(1);

      // Second click - should turn off
      fireEvent.click(toggle);
      expect(handleChange).toHaveBeenCalledWith(false);
      expect(handleChange).toHaveBeenCalledTimes(2);
    });
  });

  // Test disabled state
  describe('Disabled state', () => {
    it('is disabled when disabled prop is true', () => {
      render(<Toggle data-testid="toggle-disabled" disabled />);
      const toggle = screen.getByTestId('toggle-disabled');

      expect(toggle).toBeDisabled();
      expect(toggle).toHaveClass('opacity-50');
      expect(toggle).toBeDisabled();
      expect(toggle).toHaveAttribute('disabled');
    });

    it('does not toggle when disabled', () => {
      const handleChange = vi.fn();
      render(<Toggle data-testid="toggle-disabled-click" disabled onCheckedChange={handleChange} />);

      const toggle = screen.getByTestId('toggle-disabled-click');
      fireEvent.click(toggle);

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  // Test styling and classes
  describe('Styling', () => {
    it('applies custom class names', () => {
      const customClass = 'custom-class';
      render(<Toggle data-testid="toggle-custom-class" className={customClass} />);

      const toggle = screen.getByTestId('toggle-custom-class');
      expect(toggle).toHaveClass(customClass);
    });

    it('applies correct classes based on state', () => {
      const { rerender } = render(<Toggle data-testid="toggle-state-classes" size="small" shape="rounded" />);

      const toggle = screen.getByTestId('toggle-state-classes');

      // Check initial classes
      expect(toggle).toHaveClass('rounded-full');

      // Check disabled state classes
      rerender(<Toggle data-testid="toggle-state-classes" size="small" shape="rounded" disabled />);

      expect(toggle).toHaveClass('opacity-50');
    });
  });

  // Test prop spreading
  it('passes through additional props', () => {
    const handleClick = vi.fn();

    render(<Toggle data-testid="toggle-props" data-custom="custom-data" onClick={handleClick} />);

    const toggle = screen.getByTestId('toggle-props');

    // Test data attribute
    expect(toggle).toHaveAttribute('data-custom', 'custom-data');

    // Test event handler
    fireEvent.click(toggle);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
