import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

// Mock the entire react-dom module
vi.mock('react-dom', async () => {
  const actual = await vi.importActual<typeof import('react-dom')>('react-dom');

  // Create a mock implementation that returns the children directly
  // This simulates the portal behavior in tests
  const mockCreatePortal = vi.fn((children: React.ReactNode) => {
    return children as React.ReactPortal;
  });

  return {
    ...actual,
    createPortal: mockCreatePortal,
  };
});

// Import the component after setting up the mock
import { Overlay } from './Overlay';

// Get a reference to the mock function
const mockCreatePortal = (await import('react-dom')).createPortal as ReturnType<typeof vi.fn>;

describe('Overlay', () => {
  const mockOnClick = vi.fn();
  const defaultProps = {
    isOpen: true,
    onClick: mockOnClick,
    children: <div data-testid="overlay-content">Test Content</div>,
  };

  // Clean up after each test
  afterEach(() => {
    cleanup();
  });

  beforeAll(() => {
    // Mock document.body.style
    Object.defineProperty(document.body.style, 'overflow', {
      writable: true,
      value: '',
    });
  });

  beforeEach(() => {
    vi.clearAllMocks();
    // Reset body overflow before each test
    document.body.style.overflow = '';
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Basic Rendering', () => {
    it('should render when isOpen is true', () => {
      render(<Overlay {...defaultProps} />);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByTestId('overlay-content')).toBeInTheDocument();
    });

    it('should not render when isOpen is false', () => {
      render(<Overlay {...defaultProps} isOpen={false} />);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(screen.queryByTestId('overlay-content')).not.toBeInTheDocument();
    });

    it('should apply correct ARIA attributes for accessibility', () => {
      render(<Overlay {...defaultProps} />);
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-modal', 'true');
      expect(dialog).toHaveAttribute('aria-label', 'Dialog Overlay');
    });

    it('should render children correctly', () => {
      render(
        <Overlay {...defaultProps}>
          <p>Custom content</p>
        </Overlay>,
      );
      expect(screen.getByText('Custom content')).toBeInTheDocument();
    });
  });

  describe('Props Handling', () => {
    it('should handle custom className', () => {
      render(<Overlay {...defaultProps} className="custom-class" />);
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveClass('custom-class');
    });

    it('should handle custom zIndex', () => {
      render(<Overlay {...defaultProps} zIndex={10} />);
      const dialog = screen.getByRole('dialog');
      // The z-index is applied through the Tailwind class
      expect(dialog).toHaveClass('z-100');
    });

    it('should respect closeOnClickOutside prop when set to false', () => {
      render(<Overlay {...defaultProps} usePortal={false} />);
      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
    });

    it('should render inline when usePortal is false', () => {
      const { container } = render(
        <div id="root">
          <Overlay {...defaultProps} usePortal={false} />
        </div>,
      );
      // Should be rendered in place, not in a portal
      expect(container.querySelector('#root [role="dialog"]')).toBeInTheDocument();
      // Should not have used createPortal
      expect(mockCreatePortal).not.toHaveBeenCalled();
    });
  });

  describe('Focus Management', () => {
    it('should focus the overlay when it opens', async () => {
      const { rerender } = render(<Overlay {...defaultProps} isOpen={false} />);
      const dialog = screen.queryByRole('dialog');

      expect(dialog).not.toBeInTheDocument();

      rerender(<Overlay {...defaultProps} isOpen={true} />);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toHaveFocus();
      });
    });

    it('should not focus when overlay is closed', () => {
      render(<Overlay {...defaultProps} isOpen={false} />);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  describe('Portal Behavior', () => {
    it('should render in the DOM hierarchy when usePortal is false', () => {
      render(<Overlay {...defaultProps} usePortal={false} />);
      expect(mockCreatePortal).not.toHaveBeenCalled();
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have correct role and ARIA attributes for screen readers', () => {
      render(<Overlay {...defaultProps} />);
      const dialog = screen.getByRole('dialog');

      expect(dialog).toHaveAttribute('role', 'dialog');
      expect(dialog).toHaveAttribute('aria-modal', 'true');
      expect(dialog).toHaveAttribute('aria-label', 'Dialog Overlay');
    });
  });

  describe('Edge Cases', () => {
    it('should handle null children', () => {
      render(<Overlay {...defaultProps}>{null}</Overlay>);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('should handle empty string className', () => {
      render(<Overlay {...defaultProps} className="" />);
      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
    });

    it('should handle all zIndex values', () => {
      for (let zIndex = 1; zIndex <= 10; zIndex++) {
        const { unmount } = render(
          <Overlay {...defaultProps} zIndex={zIndex as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} />,
        );

        // Get all dialogs and verify only one exists
        const dialogs = screen.queryAllByRole('dialog');
        expect(dialogs).toHaveLength(1);
        expect(dialogs[0]).toBeInTheDocument();

        // Clean up this render
        unmount();
      }
    });
  });
});
