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
  /**
   * The size of the badge
   */
  readonly size?: 'small' | 'medium' | 'large';
  /**
   * Whether the badge fill with color or just the border show
   */
  readonly variant?: 'outline' | 'solid';
  /**
   * The size of the badge
   */
  readonly roundness?: 'pill' | 'rounded' | 'sharp';
}
