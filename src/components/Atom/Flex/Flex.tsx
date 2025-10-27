import React from 'react';
import { cn } from '../../../util/tailwindClass';

/**
 * A lightweight wrapper around a `<div>` with flexbox utilities.
 * Simplifies alignment, direction, spacing, and wrapping — all through props.
 *
 * @example
 * ```tsx
 * import Flex from '@/components/Atom/Flex';
 *
 * export default function Example() {
 *   return (
 *     <Flex
 *       direction="row"
 *       align="center"
 *       justify="space-between"
 *       gap={16}
 *       className="p-4 bg-gray-50 rounded-xl"
 *     >
 *       <span>Logo</span>
 *       <nav>Navigation</nav>
 *     </Flex>
 *   );
 * }
 * ```
 */
export interface FlexProps {
  /** Sets the flex direction */
  direction?: 'row' | 'column';
  /** Controls justify-content */
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  /** Controls align-items */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  /** Controls flex wrapping */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /** Adds spacing between flex items */
  gap?: number | string;
  /** Shortcut for flex property on the container */
  flex?: string | number;
  /** Content inside the flex container */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Optional inline style overrides */
  style?: React.CSSProperties;
}

const Flex = ({
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  wrap = 'nowrap',
  gap,
  flex,
  children,
  className,
  style,
}: FlexProps) => {
  // Helper function to safely build inline style values
  const toUnit = (value?: string | number) => (typeof value === 'number' ? `${value}px` : value);

  // Generate custom styles for spacing and flex overrides
  const customStyles: React.CSSProperties = {};

  if (gap !== undefined) customStyles.gap = toUnit(gap);
  if (flex !== undefined) customStyles.flex = toUnit(flex);

  // Merge custom styles with provided style prop
  const mergedStyles = { ...customStyles, ...style };

  // Build Tailwind classes for flexbox properties
  const flexClasses = cn(
    'flex',
    {
      'flex-row': direction === 'row',
      'flex-col': direction === 'column',
      'justify-start': justify === 'start',
      'justify-center': justify === 'center',
      'justify-end': justify === 'end',
      'justify-between': justify === 'space-between',
      'justify-around': justify === 'space-around',
      'justify-evenly': justify === 'space-evenly',
      'items-start': align === 'start',
      'items-center': align === 'center',
      'items-end': align === 'end',
      'items-stretch': align === 'stretch',
      'items-baseline': align === 'baseline',
      'flex-nowrap': wrap === 'nowrap',
      'flex-wrap': wrap === 'wrap',
      'flex-wrap-reverse': wrap === 'wrap-reverse',
    },
    className,
  );

  return (
    <div className={flexClasses} style={Object.keys(mergedStyles).length > 0 ? mergedStyles : undefined}>
      {children}
    </div>
  );
};

export default Flex;
