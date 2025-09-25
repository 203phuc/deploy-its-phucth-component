import { JSX, useEffect, useRef } from 'react';
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
      requestAnimationFrame(() => {
        overlayRef.current?.focus();
      });
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className={overlayCva({ isOpen, className, zIndex })}
      role="dialog"
      aria-modal="true"
      aria-label="Dialog Overlay"
      tabIndex={-1}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};
