import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ErrorPopup, StatusPopup, SuccessPopup } from './StatusPopup';

// Mock the useIsMobile hook with hoisting support
const mockUseIsMobile = vi.fn(() => false);

vi.mock('@pages/CustomHook/breakpoint', async () => {
  const actual = await vi.importActual('@pages/CustomHook/breakpoint');
  return {
    ...actual,
    useIsMobile: () => mockUseIsMobile(),
  };
});

describe('StatusPopup', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    title: 'Test Title',
    message: 'Test message',
    buttonLabel: 'OK',
    status: 'success' as const,
    onButtonClick: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mockUseIsMobile.mockReturnValue(false);
  });

  it('renders with default props', () => {
    render(<StatusPopup {...defaultProps} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'OK' })).toBeInTheDocument();
  });

  it('calls onButtonClick when the button is clicked', () => {
    render(<StatusPopup {...defaultProps} />);

    // Get the first button with "OK" text
    const buttons = screen.getAllByRole('button', { name: 'OK' });
    fireEvent.click(buttons[0]);

    expect(defaultProps.onButtonClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when clicking on the overlay', () => {
    render(<StatusPopup {...defaultProps} />);

    // Find the overlay by its aria-label and click it
    const overlay = screen.getAllByLabelText('Dialog Overlay')[0];
    fireEvent.mouseDown(overlay);

    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('renders with error status', () => {
    render(<StatusPopup {...defaultProps} status="error" />);

    // Find the close icon by its path data from the CloseIcon component
    const closeIcon = document.querySelector('path[d*="M23.293 7.29297"]');
    expect(closeIcon).toBeInTheDocument();
  });

  it('renders with success status', () => {
    render(<StatusPopup {...defaultProps} status="success" />);

    // Find the check icon by its path data
    const checkIcon = document.querySelector('path[d*="M4.94824 12L9.94824 17L19.9482 7"]');
    expect(checkIcon).toBeInTheDocument();
  });

  describe('Mobile View', () => {
    beforeEach(() => {
      mockUseIsMobile.mockReturnValue(true);
    });

    it('renders mobile layout', () => {
      render(<StatusPopup {...defaultProps} />);

      // Find the mobile section using data-testid
      const mobileSection = screen.getByTestId('mobile-status-popup');
      expect(mobileSection).toHaveStyle('width: 343px');
    });
  });

  describe('SuccessPopup', () => {
    it('renders with default success props', () => {
      render(
        <SuccessPopup isOpen={true} title="Success!" message="Operation completed" buttonLabel="Continue" />,
      );

      expect(screen.getByText('Success!')).toBeInTheDocument();
      expect(screen.getByText('Operation completed')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Continue' })).toBeInTheDocument();
    });
  });

  describe('ErrorPopup', () => {
    it('renders with default error props', () => {
      const mockOnButtonClick = vi.fn();
      render(
        <ErrorPopup
          isOpen={true}
          onClose={vi.fn()}
          onButtonClick={mockOnButtonClick}
          title="Error!"
          message="Something went wrong"
          buttonLabel="Try Again"
        />,
      );

      expect(screen.getByText('Error!')).toBeInTheDocument();
      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Try Again' })).toBeInTheDocument();
    });
  });
});
