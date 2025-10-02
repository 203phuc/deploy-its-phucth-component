import React from 'react';
import type { BadgeCvaProps } from './style';

export interface BadgeProps extends Partial<BadgeCvaProps>, React.HTMLAttributes<HTMLSpanElement> {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly color?: 'red' | 'green' | 'black' | 'white' | 'none';
}
