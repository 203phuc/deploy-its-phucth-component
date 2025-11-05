import { JSX, useEffect, useRef } from 'react';
import { overlayCva } from './style';
import type { OverlayProps } from './type';

/**
 * A simple overlay component that supports outside-click closing.
 */
export const Overlay = ({
  isOpen = false,
  onClose, // 👈 add this prop
  children,
  className = '',
  zIndex = 5,
  position,
  fullSize,
}: OverlayProps & { onClose?: () => void }): JSX.Element | null => {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Focus the overlay when it opens
  useEffect(() => {
    if (isOpen && overlayRef.current) {
      requestAnimationFrame(() => {
        overlayRef.current?.focus();
      });
    }
  }, [isOpen]);

  // Handle outside clicks
  useEffect(() => {
    if (!isOpen) return;

    const handleClick = (e: MouseEvent) => {
      // Close only if click is directly on the overlay, not inside children
      if (overlayRef.current && e.target === overlayRef.current) {
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className={overlayCva({ isOpen, className, zIndex, position, fullSize })}
      aria-modal="true"
      aria-label="Dialog Overlay"
      tabIndex={-1}
    >
      {children}
    </div>
  );
};
