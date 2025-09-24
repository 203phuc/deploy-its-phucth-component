import React, { JSX, useCallback, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { overlayCva } from './style';
import type { OverlayProps } from './type';

/**
 * A customizable overlay component that can be used for modals, dialogs, etc.
 * Renders a semi-transparent overlay that can be closed by clicking outside.
 */
export const Overlay = ({
  isOpen = false,
  backgroundColor = 'black-900/90',
  closeOnClickOutside = true,
  usePortal = true,
  onClick,
  children,
  className = '',
  zIndex = 5,
  ...props
}: OverlayProps): JSX.Element | null => {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Handle overlay background click
  const handleBackgroundClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (closeOnClickOutside) {
        onClick?.();
      }
    },
    [closeOnClickOutside, onClick],
  );

  // Handle keyboard events for accessibility
  const handleEscapeKey = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Escape' && closeOnClickOutside) {
        e.stopPropagation();
        onClick?.();
      }
    },
    [closeOnClickOutside, onClick],
  );

  // Track the number of open overlays using a module-level variable
  // This ensures the count is shared across all instances
  const overlayCount = React.useRef(0);
  const originalOverflow = React.useRef('');

  // Prevent body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      // Save the original overflow value only on first overlay open
      if (overlayCount.current === 0) {
        originalOverflow.current = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
      }
      overlayCount.current += 1;
    }

    return () => {
      if (isOpen) {
        overlayCount.current = Math.max(0, overlayCount.current - 1);
        if (overlayCount.current === 0) {
          // Only reset overflow when the last overlay is closed
          document.body.style.overflow = originalOverflow.current;
        } else {
          // Ensure overflow remains hidden if there are still overlays open
          document.body.style.overflow = 'hidden';
        }
      }
    };
  }, [isOpen]);

  // Focus the overlay when it opens
  useEffect(() => {
    if (isOpen && overlayRef.current) {
      // Use requestAnimationFrame to ensure the element is in the DOM before focusing
      requestAnimationFrame(() => {
        if (overlayRef.current) {
          overlayRef.current.focus();
        }
      });
    }
  }, [isOpen]);

  // Memoize the overlay content to prevent unnecessary re-renders
  const overlayContent = useMemo(
    () => (
      <div
        ref={overlayRef}
        className={overlayCva({ isOpen, className, backgroundColor, zIndex })}
        role="dialog"
        aria-modal="true"
        aria-label="Dialog Overlay"
        tabIndex={-1}
        {...Object.fromEntries(
          Object.entries(props).filter(([key]) => !['onClick', 'onKeyDown'].includes(key)),
        )}
      >
        <button
          type="button"
          className="absolute inset-0 m-0 h-full w-full cursor-default border-none bg-transparent p-0 focus:outline-none"
          onClick={handleBackgroundClick}
          onKeyDown={handleEscapeKey}
          aria-hidden="true"
          tabIndex={-1}
        />
        <div className="relative z-10">{children}</div>
      </div>
    ),
    [className, backgroundColor, handleBackgroundClick, handleEscapeKey, children, props, zIndex, isOpen],
  );

  // Don't render anything if the overlay is not open
  if (!isOpen) {
    return null;
  }

  // Use portal by default to avoid z-index issues
  return usePortal && typeof document !== 'undefined'
    ? createPortal(overlayContent, document.body)
    : overlayContent;
};

// Use React.memo to prevent unnecessary re-renders if props haven't changed
export default React.memo(Overlay);
