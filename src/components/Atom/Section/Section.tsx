import { SectionProps } from './type';

const toUnit = (value?: string | number) => (typeof value === 'number' ? `${value}px` : value);

/**
 * A flexible Section component that provides spacing, sizing, and styling
 * using inline styles instead of Tailwind CSS classes.
 *
 * @param props - Section component props
 * @returns JSX.Element
 */
export const Section = ({
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
  w,
  h,
  children,
  className,
  ...props
}: SectionProps) => {
  const style: React.CSSProperties = {};

  // Width / Height
  if (w !== undefined) style.width = toUnit(w);
  if (h !== undefined) style.height = toUnit(h);

  // Background color
  if (bgColor) style.backgroundColor = bgColor;

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
