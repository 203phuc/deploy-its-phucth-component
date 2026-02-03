import { SectionProps } from './type';

const toUnit = (value?: string | number) => (typeof value === 'number' ? `${value}px` : value);

const applySizeStyles = (
  style: React.CSSProperties,
  w?: string | number,
  h?: string | number,
  minW?: string | number,
  minH?: string | number,
) => {
  if (w !== undefined) style.width = toUnit(w);
  if (h !== undefined) style.height = toUnit(h);
  if (minW !== undefined) style.minWidth = toUnit(minW);
  if (minH !== undefined) style.minHeight = toUnit(minH);
};

const applyVisualStyles = (
  style: React.CSSProperties,
  bgColor?: string,
  border?: string,
  borderRadius?: string | number,
  transition?: string,
  transform?: string,
  overflow?: string,
) => {
  if (bgColor) style.backgroundColor = bgColor;
  if (border) style.border = border;
  if (borderRadius !== undefined) style.borderRadius = toUnit(borderRadius);
  if (transition) style.transition = transition;
  if (transform) style.transform = transform;
  if (overflow) style.overflow = overflow;
};

const applyMarginStyles = (
  style: React.CSSProperties,
  m?: string | number,
  mt?: string | number,
  mb?: string | number,
  ml?: string | number,
  mr?: string | number,
  mx?: string | number,
  my?: string | number,
) => {
  if (m !== undefined) style.margin = toUnit(m);
  if (mt !== undefined || my !== undefined) style.marginTop = toUnit(mt ?? my);
  if (mb !== undefined || my !== undefined) style.marginBottom = toUnit(mb ?? my);
  if (ml !== undefined || mx !== undefined) style.marginLeft = toUnit(ml ?? mx);
  if (mr !== undefined || mx !== undefined) style.marginRight = toUnit(mr ?? mx);
};

const applyPaddingStyles = (
  style: React.CSSProperties,
  p?: string | number,
  pt?: string | number,
  pb?: string | number,
  pl?: string | number,
  pr?: string | number,
  px?: string | number,
  py?: string | number,
) => {
  if (p !== undefined) style.padding = toUnit(p);
  if (pt !== undefined || py !== undefined) style.paddingTop = toUnit(pt ?? py);
  if (pb !== undefined || py !== undefined) style.paddingBottom = toUnit(pb ?? py);
  if (pl !== undefined || px !== undefined) style.paddingLeft = toUnit(pl ?? px);
  if (pr !== undefined || px !== undefined) style.paddingRight = toUnit(pr ?? px);
};

export const Section = ({
  overflow,
  bgColor,
  border,
  borderRadius,
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

  applySizeStyles(style, w, h, minW, minH);
  applyVisualStyles(style, bgColor, border, borderRadius, transition, transform, overflow);
  applyMarginStyles(style, m, mt, mb, ml, mr, mx, my);
  applyPaddingStyles(style, p, pt, pb, pl, pr, px, py);

  return (
    <div style={style} className={className} {...props}>
      {children}
    </div>
  );
};
