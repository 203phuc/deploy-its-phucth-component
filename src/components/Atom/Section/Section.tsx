import React from 'react';
import { cn } from '../../../util/tailwindClass';

export interface SectionProps {
  bgColor?: string;

  // Margin
  m?: string | number;
  mt?: string | number;
  mb?: string | number;
  ml?: string | number;
  mr?: string | number;
  mx?: string | number;
  my?: string | number;

  // Padding
  p?: string | number;
  pt?: string | number;
  pb?: string | number;
  pl?: string | number;
  pr?: string | number;
  px?: string | number;
  py?: string | number;

  children?: React.ReactNode;
  className?: string;
}

const Section = ({
  bgColor,
  m,
  mt,
  mb,
  ml,
  mr,
  mx,
  my,
  p,
  pt,
  pb,
  pl,
  pr,
  px,
  py,
  children,
  className,
}: SectionProps) => {
  // Helper function to safely build inline style values
  const toUnit = (value?: string | number) => (typeof value === 'number' ? `${value}px` : value);

  // Generate custom styles for spacing overrides
  const customStyles: React.CSSProperties = {};

  if (m !== undefined) customStyles.margin = toUnit(m);
  if (mt !== undefined || my !== undefined) customStyles.marginTop = toUnit(mt ?? my);
  if (mb !== undefined || my !== undefined) customStyles.marginBottom = toUnit(mb ?? my);
  if (ml !== undefined || mx !== undefined) customStyles.marginLeft = toUnit(ml ?? mx);
  if (mr !== undefined || mx !== undefined) customStyles.marginRight = toUnit(mr ?? mx);

  if (p !== undefined) customStyles.padding = toUnit(p);
  if (pt !== undefined || py !== undefined) customStyles.paddingTop = toUnit(pt ?? py);
  if (pb !== undefined || py !== undefined) customStyles.paddingBottom = toUnit(pb ?? py);
  if (pl !== undefined || px !== undefined) customStyles.paddingLeft = toUnit(pl ?? px);
  if (pr !== undefined || px !== undefined) customStyles.paddingRight = toUnit(pr ?? px);

  if (bgColor) customStyles.backgroundColor = bgColor;

  const sectionClasses = cn('w-full', className);

  return (
    <section
      className={sectionClasses}
      style={Object.keys(customStyles).length > 0 ? customStyles : undefined}
    >
      {children ?? 'Section'}
    </section>
  );
};

export default Section;
