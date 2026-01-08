import { SectionProps } from './type';

const toUnit = (value?: string | number) => (typeof value === 'number' ? `${value}px` : value);

/**
 * A flexible Section component that provides spacing, sizing, border,
 * and background styling using inline styles.
 */
export const Section = ({
  overflow,
  bgColor,
  border,
  borderRadius, // ← add this prop
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
  w,
  h,
  transition,
  transform,
  children,
  minH,
  minW,
  className,
  ...props
}: SectionProps) => {
  const style: React.CSSProperties = {};

  // Width / Height
  if (w !== undefined) style.width = toUnit(w);
  if (h !== undefined) style.height = toUnit(h);
  if (minW) style.minWidth = toUnit(minW);
  if (minH) style.minHeight = toUnit(minH);
  // Background color
  if (bgColor) style.backgroundColor = bgColor;

  // Border & Radius
  if (border) style.border = border; // e.g. "1px solid #ccc"
  if (borderRadius !== undefined) style.borderRadius = toUnit(borderRadius); // e.g. 8 or '50%'

  // Transition & Transform
  if (transition !== undefined) style.transition = transition;
  if (transform !== undefined) style.transform = transform;
  if (overflow !== undefined) style.overflow = overflow;

  // Margin
  style.margin = toUnit(m ?? undefined);
  style.marginTop = toUnit(mt ?? my ?? undefined);
  style.marginBottom = toUnit(mb ?? my ?? undefined);
  style.marginLeft = toUnit(ml ?? mx ?? undefined);
  style.marginRight = toUnit(mr ?? mx ?? undefined);

  // Padding
  style.padding = toUnit(p ?? undefined);
  style.paddingTop = toUnit(pt ?? py ?? undefined);
  style.paddingBottom = toUnit(pb ?? py ?? undefined);
  style.paddingLeft = toUnit(pl ?? px ?? undefined);
  style.paddingRight = toUnit(pr ?? px ?? undefined);

  return (
    <div style={style} className={className} {...props}>
      {children}
    </div>
  );
};
