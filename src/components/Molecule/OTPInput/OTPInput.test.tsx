import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { OTPInput } from './OTPInput';

describe('OTPInput', () => {
  const onChangeMock = vi.fn();
  const defaultProps = {
    length: 6,
    onChange: onChangeMock,
    variant: 'desktop' as const,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the correct number of input fields', () => {
    render(<OTPInput {...defaultProps} />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(defaultProps.length);
  });

  it('calls onChange with the correct value when typing', async () => {
    const user = userEvent.setup();
    render(<OTPInput {...defaultProps} />);
    const inputs = screen.getAllByRole('textbox');

    await user.type(inputs[0], '1');
    expect(onChangeMock).toHaveBeenCalledWith('1');

    await user.type(inputs[1], '2');
    expect(onChangeMock).toHaveBeenLastCalledWith('12');
  });
  it('applies the correct variant class', () => {
    const { container } = render(<OTPInput {...defaultProps} variant="mobile" />);
    const input = container.querySelector('input')!;
    expect(input).toHaveClass('h-10 w-10');
  });
  it('auto-focuses to the next input after typing a digit', async () => {
    const user = userEvent.setup();
    render(<OTPInput {...defaultProps} />);
    const inputs = screen.getAllByRole('textbox');

    await user.type(inputs[0], '1');
    expect(document.activeElement).toBe(inputs[1]); // next input should be focused

    await user.type(inputs[1], '2');
    expect(document.activeElement).toBe(inputs[2]);
  });
  it('moves focus to the previous input when pressing Backspace on empty input', async () => {
    const user = userEvent.setup();
    render(<OTPInput {...defaultProps} />);
    const inputs = screen.getAllByRole('textbox');

    await user.type(inputs[0], '1');
    await user.type(inputs[1], '2');

    // Clear second input manually
    await user.clear(inputs[1]);

    // Press Backspace on empty input
    inputs[1].focus();
    await user.keyboard('{Backspace}');

    // Now focus should move to first input
    expect(document.activeElement).toBe(inputs[0]);
  });
});
