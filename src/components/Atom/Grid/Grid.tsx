import React from 'react';
import { cn } from '../../../util/tailwindClass';

/**
 * A responsive grid layout wrapper for arranging children in rows and columns.
 * Simplifies CSS Grid usage with intuitive props.
 *
 * @example
 * ```tsx
 * import Grid from '@/components/Atom/Grid';
 *
 * export default function Gallery() {
 *   return (
 *     <Grid columns={3} gap={24} className="p-6 bg-white rounded-lg">
 *       <img src="/img1.jpg" />
 *       <img src="/img2.jpg" />
 *       <img src="/img3.jpg" />
 *     </Grid>
 *   );
 * }
 * ```
 */
export interface GridProps {
  /** Sets the number of columns (repeat() shorthand) */
  columns?: number | string;
  /** Sets the number of rows or custom sizing */
  rows?: number | string;
  /** Gap between grid items (applies to both row & column) */
  gap?: number | string;
  /** Row gap only */
  rowGap?: number | string;
  /** Column gap only */
  columnGap?: number | string;
  /** Controls align-items */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /** Controls justify-items */
  justify?: 'start' | 'center' | 'end' | 'stretch' | 'space-between';
  /** Grid items to display */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Optional inline style overrides */
  style?: React.CSSProperties;
}

const Grid = ({
  columns,
  rows,
  gap,
  rowGap,
  columnGap,
  align = 'stretch',
  justify = 'stretch',
  children,
  className,
  style,
}: GridProps) => {
  // Helper function to safely build inline style values
  const toUnit = (value?: string | number) => (typeof value === 'number' ? `${value}px` : value);

  // Helper function to convert number values to CSS grid repeat syntax
  const toGridTemplate = (value?: number | string) => {
    if (typeof value === 'number') {
      return `repeat(${value}, 1fr)`;
    }
    return value;
  };

  // Generate custom styles for spacing overrides
  const customStyles: React.CSSProperties & {
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
  } = {};

  if (gap !== undefined) {
    customStyles.gap = toUnit(gap);
  }
  if (rowGap !== undefined) {
    customStyles.rowGap = toUnit(rowGap);
  }
  if (columnGap !== undefined) {
    customStyles.columnGap = toUnit(columnGap);
  }

  // Set grid template properties directly
  if (columns !== undefined) {
    customStyles.gridTemplateColumns = toGridTemplate(columns);
  }
  if (rows !== undefined) {
    customStyles.gridTemplateRows = toGridTemplate(rows);
  }

  // Merge custom styles with provided style prop
  const mergedStyles = { ...customStyles, ...style };

  // Build Tailwind classes for grid properties
  const gridClasses = cn(
    'grid',
    {
      'items-start': align === 'start',
      'items-center': align === 'center',
      'items-end': align === 'end',
      'items-stretch': align === 'stretch',
      'justify-items-start': justify === 'start',
      'justify-items-center': justify === 'center',
      'justify-items-end': justify === 'end',
      'justify-items-stretch': justify === 'stretch',
      'justify-items-between': justify === 'space-between',
    },
    className,
  );

  // Create inline style object for grid templates
  const gridTemplateStyle = {
    gridTemplateColumns: columns !== undefined ? toGridTemplate(columns) : undefined,
    gridTemplateRows: rows !== undefined ? toGridTemplate(rows) : undefined,
    ...mergedStyles,
  };

  return (
    <div
      className={gridClasses}
      style={
        Object.keys(gridTemplateStyle).some(
          (key) => gridTemplateStyle[key as keyof typeof gridTemplateStyle] !== undefined,
        )
          ? gridTemplateStyle
          : undefined
      }
    >
      {children}
    </div>
  );
};

export default Grid;
