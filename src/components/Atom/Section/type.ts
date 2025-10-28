import React from 'react';

export interface SectionProps {
  /** Background color class (Tailwind CSS class) */
  bgColor?: string;
  /** Width value (number in px or Tailwind class) */
  w?: string | number;
  /** Height value (number in px or Tailwind class) */
  h?: string | number;
  /** Margin value (number in px or Tailwind class) */
  m?: string | number;
  /** Margin top value (number in px or Tailwind class) */
  mt?: string | number;
  /** Margin bottom value (number in px or Tailwind class) */
  mb?: string | number;
  /** Margin left value (number in px or Tailwind class) */
  ml?: string | number;
  /** Margin right value (number in px or Tailwind class) */
  mr?: string | number;
  /** Margin horizontal value (number in px or Tailwind class) */
  mx?: string | number;
  /** Margin vertical value (number in px or Tailwind class) */
  my?: string | number;
  /** Padding value (number in px or Tailwind class) */
  p?: string | number;
  /** Padding top value (number in px or Tailwind class) */
  pt?: string | number;
  /** Padding bottom value (number in px or Tailwind class) */
  pb?: string | number;
  /** Padding left value (number in px or Tailwind class) */
  pl?: string | number;
  /** Padding right value (number in px or Tailwind class) */
  pr?: string | number;
  /** Padding horizontal value (number in px or Tailwind class) */
  px?: string | number;
  /** Padding vertical value (number in px or Tailwind class) */
  py?: string | number;
  /** Child elements */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}
