import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Dropdown } from './Dropdown';

const sampleOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Disabled Option', value: 'disabled', disabled: true },
];

describe('Select', () => {
  it('renders with options', () => {
    render(<Dropdown isOpen={true} options={sampleOptions} data-testid="dropdown" />);
    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });

  it('selects option when clicked', () => {
    const onChange = vi.fn();
    render(<Dropdown isOpen={true} options={sampleOptions} onChange={onChange} data-testid="select" />);

    const button = screen.getByTestId('select');
    fireEvent.click(button);
    const dropdown = within(button);
    const option = dropdown.getByText('Option 1');
    fireEvent.click(option);

    expect(onChange).toHaveBeenCalledWith('option1');
    expect(dropdown.getByText('Option 1')).toBeInTheDocument();
  });

  it('displays selected value', () => {
    render(<Dropdown isOpen={true} options={sampleOptions} value="option2" data-testid="select2" />);
    expect(screen.getByTestId('select2')).toBeInTheDocument();
  });

  it('applies correct variant classes', () => {
    const { container } = render(
      <Dropdown isOpen={true} options={sampleOptions} variant="width-228" data-testid="select3" />,
    );
    const buttonInside = (container.firstChild as HTMLElement).querySelector('div');
    expect(buttonInside?.className).toContain('w-[228px]');
  });

  it('does not select disabled options', () => {
    const onChange = vi.fn();
    render(<Dropdown isOpen={true} options={sampleOptions} onChange={onChange} data-testid="select4" />);

    const button = screen.getByTestId('select4');

    // Scope only to this dropdown
    const dropdown = within(button);
    const disabledOption = dropdown.getByText('Disabled Option');

    fireEvent.click(disabledOption);
    expect(onChange).not.toHaveBeenCalled();
  });
});
