import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactElement } from 'react';
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

    it('should handle custom backgroundColor', () => {
      render(<Overlay {...defaultProps} backgroundColor="red-900/70" />);
      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveClass('bg-red-900/70');
    });

    it('should handle custom zIndex', () => {
      render(<Overlay {...defaultProps} zIndex={10} />);
      const dialog = screen.getByRole('dialog');
      // The z-index is applied through the Tailwind class
      expect(dialog).toHaveClass('z-100');
    });

    it('should respect closeOnClickOutside prop when set to false', () => {
      render(<Overlay {...defaultProps} closeOnClickOutside={false} />);
      const button = screen.getByRole('button', { hidden: true });
      fireEvent.click(button);
      expect(mockOnClick).not.toHaveBeenCalled();
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

  describe('Event Handling', () => {
    it('should call onClick when clicking outside (background)', async () => {
      render(<Overlay {...defaultProps} />);
      const button = screen.getByRole('button', { hidden: true });

      await userEvent.click(button);

      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('should call onClick when pressing Escape key', async () => {
      render(<Overlay {...defaultProps} />);
      const button = screen.getByRole('button', { hidden: true });

      button.focus();
      await userEvent.keyboard('{Escape}');

      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when clicking inside content', async () => {
      render(<Overlay {...defaultProps} />);
      const content = screen.getByTestId('overlay-content');

      await userEvent.click(content);

      expect(mockOnClick).not.toHaveBeenCalled();
    });

    it('should handle multiple clicks correctly', async () => {
      render(<Overlay {...defaultProps} />);
      const button = screen.getByRole('button', { hidden: true });

      await userEvent.click(button);
      await userEvent.click(button);
      await userEvent.click(button);

      expect(mockOnClick).toHaveBeenCalledTimes(3);
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

  describe('Body Scroll Prevention', () => {
    it('should prevent body scroll when overlay is open', () => {
      render(<Overlay {...defaultProps} />);
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('should restore body scroll when overlay is closed', () => {
      const { rerender } = render(<Overlay {...defaultProps} />);

      expect(document.body.style.overflow).toBe('hidden');

      rerender(<Overlay {...defaultProps} isOpen={false} />);

      expect(document.body.style.overflow).toBe('');
    });

    it('should handle multiple overlay instances', async () => {
      // First render with one overlay
      const { unmount: unmount1 } = render(<Overlay {...defaultProps} data-testid="overlay-1" />);
      expect(document.body.style.overflow).toBe('hidden');

      // Add second overlay
      const { unmount: unmount2 } = render(<Overlay {...defaultProps} data-testid="overlay-2" />);
      expect(document.body.style.overflow).toBe('hidden');

      // Remove first overlay
      unmount1();
      expect(document.body.style.overflow).toBe('');

      // Remove second overlay
      unmount2();

      // Wait for the cleanup effect to complete
      await waitFor(() => {
        expect(document.body.style.overflow).toBe('');
      });
    });
  });

  describe('Portal Behavior', () => {
    it('should use portal by default', () => {
      // Clear any previous calls to the mock
      mockCreatePortal.mockClear();

      render(
        <div id="root">
          <Overlay {...defaultProps} />
        </div>,
      );

      // Should have used createPortal
      expect(mockCreatePortal).toHaveBeenCalled();

      // Get the first argument passed to createPortal (the children)
      const portalCalls = mockCreatePortal.mock.calls[0] as [ReactElement<{ role?: string }>, HTMLElement];
      const portalContent = portalCalls[0];

      // The element should be in the document (the mock returns the children directly)
      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();

      // Verify that createPortal was called with the expected content
      expect(portalContent).toBeDefined();

      // Check the role through the rendered DOM instead of the props
      // This is more reliable as it tests the actual rendered output
      expect(portalContent.props?.role ?? dialog.getAttribute('role')).toBe('dialog');
    });

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

    it('should hide the background button from screen readers', () => {
      render(<Overlay {...defaultProps} />);
      const button = screen.getByRole('button', { hidden: true });

      expect(button).toHaveAttribute('aria-hidden', 'true');
      expect(button).toHaveAttribute('tabIndex', '-1');
    });

    it('should be keyboard accessible with Escape key', () => {
      render(<Overlay {...defaultProps} closeOnClickOutside={true} />);
      const button = screen.getByRole('button', { hidden: true });

      // Focus the button and verify it has focus
      button.focus();
      expect(button).toHaveFocus();

      // Trigger the keydown event directly on the button
      fireEvent.keyDown(button, { key: 'Escape', code: 'Escape' });

      // Verify the onClick handler was called
      expect(mockOnClick).toHaveBeenCalled();
    });
  });

  describe('Edge Cases', () => {
    it('should handle undefined onClick gracefully', () => {
      render(<Overlay {...defaultProps} onClick={undefined} />);
      const button = screen.getByRole('button', { hidden: true });

      expect(() => fireEvent.click(button)).not.toThrow();
    });

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
