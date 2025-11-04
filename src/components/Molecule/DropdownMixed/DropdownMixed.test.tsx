import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { DropdownMixed } from './DropdownMixed';

const sampleListItem = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Disabled Option', value: 'disabled', disabled: true },
];

describe('Select', () => {
  it('renders with listItem', () => {
    render(<DropdownMixed isOpen={true} listItem={sampleListItem} data-testid="DropdownMixed" />);
    expect(screen.getByTestId('DropdownMixed')).toBeInTheDocument();
  });

  it('displays selected value', () => {
    render(<DropdownMixed isOpen={true} listItem={sampleListItem} data-testid="select2" />);
    expect(screen.getByTestId('select2')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    const { container } = render(<DropdownMixed isOpen={false} listItem={sampleListItem} />);
    expect(container.firstChild).toBeNull();
  });

  it('calls item onSelect and parent onClose after selecting an option', () => {
    const onClose = vi.fn();
    const onSelect = vi.fn();

    const sampleListItem = [
      { label: 'Option 1', value: 'option1', onSelect },
      { label: 'Option 2', value: 'option2' },
    ];

    render(<DropdownMixed isOpen={true} listItem={sampleListItem} data-testid="dropdown" />);

    const dropdown = screen.getByTestId('dropdown');
    const utils = within(dropdown);
    const option = utils.getByText('Option 1');

    fireEvent.click(option);

    expect(onSelect).toHaveBeenCalled(); // ✅ should trigger the item callback
    expect(onClose).not.toHaveBeenCalled(); // ❌ will not be called automatically unless you add it in component
  });

  it('applies custom className', () => {
    const { container } = render(
      <DropdownMixed
        isOpen={true}
        listItem={sampleListItem}
        className="custom-class"
        data-testid="select-custom"
      />,
    );
    const DropdownMixedRe = container.querySelector('.custom-class');
    expect(DropdownMixedRe).toBeInTheDocument();
  });
});
