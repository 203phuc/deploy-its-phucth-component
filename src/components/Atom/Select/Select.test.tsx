import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Select } from './Select';

const sampleOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Disabled Option', value: 'disabled', disabled: true },
];

describe('Select', () => {
  it('renders with options', () => {
    render(<Select options={sampleOptions} />);
    expect(screen.getByText('Select an option...')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Select options={sampleOptions} label="Choose option" />);
    expect(screen.getByText('Choose option')).toBeInTheDocument();
  });

  it('renders with error message', () => {
    render(<Select options={sampleOptions} error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('opens dropdown when clicked', () => {
    render(<Select options={sampleOptions} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('selects option when clicked', () => {
    const onChange = vi.fn();
    render(<Select options={sampleOptions} onChange={onChange} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const option = screen.getByText('Option 1');
    fireEvent.click(option);

    expect(onChange).toHaveBeenCalledWith('option1');
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('closes dropdown when clicking outside', () => {
    render(<Select options={sampleOptions} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText('Option 1')).toBeInTheDocument();

    fireEvent.click(document.body);
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });

  it('displays selected value', () => {
    render(<Select options={sampleOptions} value="option2" />);
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<Select options={sampleOptions} disabled />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('applies correct variant classes', () => {
    const { container } = render(<Select options={sampleOptions} variant="width-228" />);
    const selectContainer = container.firstChild as HTMLElement;
    expect(selectContainer.className).toContain('w-[228px]');
  });

  it('does not select disabled options', () => {
    const onChange = vi.fn();
    render(<Select options={sampleOptions} onChange={onChange} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const disabledOption = screen.getByText('Disabled Option');
    fireEvent.click(disabledOption);

    expect(onChange).not.toHaveBeenCalled();
  });
});
