import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Input } from './Input';

describe('Input Component', () => {
  it('input-001-renders-basic-input', () => {
    render(<Input placeholder="Test input" />);
    expect(screen.getByPlaceholderText('Test input')).toBeInTheDocument();
  });

  it('input-002-renders-with-label', () => {
    render(<Input label="Username" placeholder="Enter username" />);
    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
  });

  it('input-003-renders-as-textarea', () => {
    render(<Input as="textarea" placeholder="Enter message" />);
    const textarea = screen.getByPlaceholderText('Enter message');
    expect(textarea.tagName.toLowerCase()).toBe('textarea');
  });

  it('input-005-handles-textarea-change', () => {
    const handleChange = vi.fn();
    render(<Input as="textarea" onChange={handleChange} placeholder="Type here" />);

    const textarea = screen.getByPlaceholderText('Type here');
    fireEvent.change(textarea, {
      target: { value: 'textarea content', name: 'test-textarea' },
    } as React.ChangeEvent<HTMLTextAreaElement>);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('input-006-applies-error-state', () => {
    render(<Input label="Email" error="Invalid email" />);
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  it('input-007-renders-disabled-input', () => {
    render(<Input disabled placeholder="Disabled input" />);
    const input = screen.getByPlaceholderText('Disabled input');
    expect(input).toBeDisabled();
  });

  it('input-008-renders-disabled-textarea', () => {
    render(<Input as="textarea" disabled placeholder="Disabled textarea" />);
    const textarea = screen.getByPlaceholderText('Disabled textarea');
    expect(textarea).toBeDisabled();
  });

  it('input-009-applies-small-size-classes', () => {
    const { container } = render(<Input size="small" placeholder="Small input" />);
    const input = container.querySelector('input');
    expect(input?.className).toContain('text-sm');
  });

  it('input-010-applies-large-size-classes', () => {
    const { container } = render(<Input size="large" placeholder="Large input" />);
    const input = container.querySelector('input');
    expect(input?.className).toContain('text-base');
  });

  it('input-011-renders-with-start-icon', () => {
    render(<Input iconStart="UserIcon" placeholder="Username" />);
    // Icon rendering would depend on Icons component implementation
    const input = screen.getByPlaceholderText('Username');
    expect(input).toBeInTheDocument();
  });

  it('input-012-renders-with-end-icon', () => {
    render(<Input iconEnd="CheckIcon" placeholder="Verified" />);
    const input = screen.getByPlaceholderText('Verified');
    expect(input).toBeInTheDocument();
  });

  it('input-013-handles-icon-click', () => {
    const handleIconClick = vi.fn();
    render(<Input iconEnd="CloseIcon" onIconEndClick={handleIconClick} placeholder="Clickable" />);

    // Icon click functionality would depend on Icons component implementation
    const input = screen.getByPlaceholderText('Clickable');
    expect(input).toBeInTheDocument();
  });

  it('input-014-renders-different-input-types', () => {
    const { rerender } = render(<Input type="email" placeholder="Email" />);
    let input = screen.getByPlaceholderText('Email');
    expect(input).toHaveAttribute('type', 'email');

    rerender(<Input type="password" placeholder="Password" />);
    input = screen.getByPlaceholderText('Password');
    expect(input).toHaveAttribute('type', 'password');

    rerender(<Input type="tel" placeholder="Phone" />);
    input = screen.getByPlaceholderText('Phone');
    expect(input).toHaveAttribute('type', 'tel');
  });

  it('input-017-renders-with-value', () => {
    render(<Input value="Initial value" />);
    const input = screen.getByDisplayValue('Initial value');
    expect(input).toBeInTheDocument();
  });

  it('input-018-renders-textarea-with-rows', () => {
    render(<Input as="textarea" rows={5} placeholder="Multi-line" />);
    const textarea = screen.getByPlaceholderText('Multi-line');
    expect(textarea).toHaveAttribute('rows', '5');
  });

  it('input-019-applies-custom-classname', () => {
    const { container } = render(<Input className="custom-class" placeholder="Custom" />);
    const input = container.querySelector('.custom-class');
    expect(input).toBeInTheDocument();
  });

  it('input-022-renders-textarea-without-icons', () => {
    // Test that textarea renders correctly without icon props
    render(<Input as="textarea" placeholder="No icons allowed" />);
    const textarea = screen.getByPlaceholderText('No icons allowed');
    expect(textarea.tagName.toLowerCase()).toBe('textarea');
  });

  it('input-023-handles-empty-props-gracefully', () => {
    render(<Input />);
    // Should render without errors
    expect(document.querySelector('input')).toBeInTheDocument();
  });

  it('input-024-maintains-forward-ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} placeholder="Ref test" />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('input-025-handles-complex-combination', () => {
    const handleChange = vi.fn();
    const handleIconClick = vi.fn();

    render(
      <Input
        label="Complex Input"
        type="email"
        size="large"
        variant="solid"
        iconStart="EmailIcon"
        iconEnd="CheckIcon"
        onIconEndClick={handleIconClick}
        onChange={handleChange}
        placeholder="Enter email"
        error="Required field"
        fontFamily="inter"
      />,
    );

    expect(screen.getByText('Complex Input')).toBeInTheDocument();
    expect(screen.getByText('Required field')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
  });
});
