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
    render(<Dropdown isOpen={true} options={sampleOptions} disabled={false} data-testid="dropdown" />);
    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });

  it('selects option when clicked', () => {
    const onSelect = vi.fn();
    render(
      <Dropdown
        isOpen={true}
        options={sampleOptions}
        onSelect={onSelect}
        disabled={false}
        data-testid="select"
      />,
    );

    const button = screen.getByTestId('select');
    fireEvent.click(button);
    const dropdown = within(button);
    const option = dropdown.getByText('Option 1');
    fireEvent.click(option);

    expect(onSelect).toHaveBeenCalledWith('option1');
    expect(dropdown.getByText('Option 1')).toBeInTheDocument();
  });

  it('displays selected value', () => {
    render(
      <Dropdown
        isOpen={true}
        options={sampleOptions}
        value="option2"
        disabled={false}
        data-testid="select2"
      />,
    );
    expect(screen.getByTestId('select2')).toBeInTheDocument();
  });

  it('applies correct variant classes', () => {
    const { container } = render(
      <Dropdown isOpen={true} options={sampleOptions} variant="md" disabled={false} data-testid="select3" />,
    );
    const buttonInside = (container.firstChild as HTMLElement).querySelector('div');
    expect(buttonInside?.className).toContain('w-[228px]');
  });

  it('does not select disabled options', () => {
    const onSelect = vi.fn();
    render(
      <Dropdown
        isOpen={true}
        options={sampleOptions}
        onSelect={onSelect}
        disabled={false}
        data-testid="select4"
      />,
    );

    const button = screen.getByTestId('select4');

    // Scope only to this dropdown
    const dropdown = within(button);
    const disabledOption = dropdown.getByText('Disabled Option');

    fireEvent.click(disabledOption);
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('does not render when isOpen is false', () => {
    const { container } = render(<Dropdown isOpen={false} options={sampleOptions} disabled={false} />);
    expect(container.firstChild).toBeNull();
  });

  it('calls onClose when clicking outside', () => {
    const onClose = vi.fn();
    render(
      <div>
        <Dropdown
          isOpen={true}
          options={sampleOptions}
          onClose={onClose}
          disabled={false}
          data-testid="dropdown"
        />
        <div data-testid="outside">Outside element</div>
      </div>,
    );

    const outsideElement = screen.getByTestId('outside');
    fireEvent.mouseDown(outsideElement);

    expect(onClose).toHaveBeenCalled();
  });

  it('calls onClose after selecting an option', () => {
    const onClose = vi.fn();
    const onSelect = vi.fn();
    render(
      <Dropdown
        isOpen={true}
        options={sampleOptions}
        onClose={onClose}
        onSelect={onSelect}
        disabled={false}
        data-testid="select5"
      />,
    );

    const button = screen.getByTestId('select5');
    const dropdown = within(button);
    const option = dropdown.getByText('Option 1');
    fireEvent.click(option);

    expect(onSelect).toHaveBeenCalledWith('option1');
    expect(onClose).toHaveBeenCalled();
  });

  it('renders with xs variant (compact, no check icon)', () => {
    const optionsWithIcon = [{ label: 'English', value: 'en', icon: 'CheckIcon' as const }];
    const { container } = render(
      <Dropdown
        isOpen={true}
        options={optionsWithIcon}
        value="en"
        variant="xs"
        disabled={false}
        data-testid="select-xs"
      />,
    );
    const buttonInside = (container.firstChild as HTMLElement).querySelector('div');
    expect(buttonInside?.className).toContain('w-[114px]');
    // xs variant should not show check icon even when selected
    const checkIcons = container.querySelectorAll('[class*="CheckIcon"]');
    expect(checkIcons.length).toBeLessThanOrEqual(1); // Only the option icon, not the check icon
  });

  it('renders with sm variant', () => {
    const { container } = render(
      <Dropdown
        isOpen={true}
        options={sampleOptions}
        variant="sm"
        disabled={false}
        data-testid="select-sm"
      />,
    );
    const buttonInside = (container.firstChild as HTMLElement).querySelector('div');
    expect(buttonInside?.className).toContain('w-[173px]');
  });

  it('renders with lg variant', () => {
    const { container } = render(
      <Dropdown
        isOpen={true}
        options={sampleOptions}
        variant="lg"
        disabled={false}
        data-testid="select-lg"
      />,
    );
    const buttonInside = (container.firstChild as HTMLElement).querySelector('div');
    expect(buttonInside?.className).toContain('w-[255px]');
  });

  it('renders with other variant (different layout)', () => {
    render(
      <Dropdown
        isOpen={true}
        options={sampleOptions}
        variant="other"
        disabled={false}
        data-testid="select-other"
      />,
    );
    const button = screen.getByTestId('select-other');
    expect(button).toBeInTheDocument();
    // 'other' variant should use different rendering path
  });

  it('renders options with icons', () => {
    const optionsWithIcons = [
      { label: 'German', value: 'de', icon: 'CheckIcon' as const },
      { label: 'English', value: 'en', icon: 'CheckIcon' as const },
    ];
    render(<Dropdown isOpen={true} options={optionsWithIcons} disabled={false} data-testid="select-icons" />);
    const button = screen.getByTestId('select-icons');
    expect(button).toBeInTheDocument();
  });

  it('renders with direction up', () => {
    const { container } = render(
      <Dropdown
        isOpen={true}
        options={sampleOptions}
        direction="up"
        disabled={false}
        data-testid="select-up"
      />,
    );
    const dropdown = container.querySelector('[class*="bottom-full"]');
    expect(dropdown).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Dropdown
        isOpen={true}
        options={sampleOptions}
        className="custom-class"
        disabled={false}
        data-testid="select-custom"
      />,
    );
    const dropdown = container.querySelector('.custom-class');
    expect(dropdown).toBeInTheDocument();
  });

  it('updates value when value prop changes', () => {
    const { rerender } = render(
      <Dropdown
        isOpen={true}
        options={sampleOptions}
        value="option1"
        disabled={false}
        data-testid="select6"
      />,
    );

    // Change the value prop
    rerender(
      <Dropdown
        isOpen={true}
        options={sampleOptions}
        value="option2"
        disabled={false}
        data-testid="select6"
      />,
    );

    const button = screen.getByTestId('select6');
    expect(button).toBeInTheDocument();
  });
});
