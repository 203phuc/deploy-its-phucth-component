import React from 'react';
import type { BadgeCvaProps } from './style';

export interface BadgeProps extends Partial<BadgeCvaProps>, React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The content to display inside the badge
   */
  readonly children: React.ReactNode;

  /**
   * Additional custom class names for styling
   */
  readonly className?: string;

  /**
   * The color theme of the badge
   */
  readonly color?: 'red' | 'green' | 'black' | 'white' | 'none';
}
