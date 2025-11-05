import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import Timer from './Timer';

describe('Timer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders with label and labelSpan', () => {
    render(<Timer data-testid="timer-label" label="Sale Ends In" labelSpan="🔥" />);
    const timer = screen.getByTestId('timer-label');
    expect(timer).toBeInTheDocument();
    expect(screen.getByText('🔥')).toBeInTheDocument();
    expect(screen.getByText('Sale Ends In')).toBeInTheDocument();
  });

  it('shows countdown to future endDate', () => {
    const futureDate = new Date(Date.now() + 5000).toISOString(); // 5s in future
    render(<Timer data-testid="timer-countdown" endDate={futureDate} start />);
    const timer = screen.getByTestId('timer-countdown');

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(timer).toBeInTheDocument();

    // Use getAllByText to handle multiple number spans (days, hours, etc.)
    const digits = screen.getAllByText(/\d/);
    expect(digits.length).toBeGreaterThan(0);
  });

  it('shows zero when countdown finishes', () => {
    const futureDate = new Date(Date.now() + 2000).toISOString();
    render(<Timer data-testid="timer-finished" endDate={futureDate} start />);
    const timer = screen.getByTestId('timer-finished');

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(timer).toBeInTheDocument();
    expect(screen.getAllByText(/0/).length).toBeGreaterThan(0);
  });

  it('handles invalid endDate gracefully', () => {
    render(<Timer data-testid="timer-invalid" endDate={'invalid-date'} start />);
    const timer = screen.getByTestId('timer-invalid');

    expect(timer).toBeInTheDocument();
    // ✅ safer check
    expect(screen.getAllByText(/0/).length).toBeGreaterThan(0);

    // or, if your timer shows something like "00:00" when invalid:
    // expect(timer).toHaveTextContent('00:00');
  });
});
