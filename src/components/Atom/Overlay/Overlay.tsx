import React, { JSX, useEffect, useMemo, useRef } from 'react';
import { overlayCva } from './style';
import type { OverlayProps } from './type';

/**
 * A simple overlay component that can be used for modals, dialogs, etc.
 * Renders a semi-transparent overlay.
 */
export const Overlay = ({
  isOpen = false,
  children,
  className = '',
  zIndex = 5,
}: OverlayProps): JSX.Element | null => {
  const overlayRef = useRef<HTMLDivElement>(null);

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
  const overlayContent = useMemo(() => {
    const generatedClasses = overlayCva({ isOpen, className, zIndex });
    return (
      <div
        ref={overlayRef}
        className={generatedClasses}
        role="dialog"
        aria-modal="true"
        aria-label="Dialog Overlay"
        tabIndex={-1}
      >
        <div className="relative z-10">{children}</div>
      </div>
    );
  }, [className, children, zIndex, isOpen]);

  // Don't render anything if the overlay is not open
  if (!isOpen) {
    return null;
  }

  // Render overlay inline (relative to parent element)
  return overlayContent;
};

// Use React.memo to prevent unnecessary re-renders if props haven't changed
export default React.memo(Overlay);
