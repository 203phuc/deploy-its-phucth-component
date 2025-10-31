import React, { useCallback, useMemo } from 'react';
import { linkCva, SPACING_VARIANTS } from './style';
import type {
  LinkColor,
  LinkFont,
  LinkProps,
  LinkSize,
  LinkUnderlineOffset,
  LinkUnderlineThickness,
  LinkWeight,
} from './type';

export const Link: React.FC<LinkProps> = ({
  size = 'medium' as LinkSize,
  weight = 'regular' as LinkWeight,
  font = 'inter' as LinkFont,
  color = 'default' as LinkColor,
  spacing = 'small',
  hoverUnderline = false,
  underlineOffset = 'small' as LinkUnderlineOffset,
  underlineThickness = 'thin' as LinkUnderlineThickness,
  external = false,
  className = '',
  children,
  ...props
}) => {
  // ✅ Build class names with underline variants
  const baseClasses = useMemo(
    () =>
      [
        linkCva({
          size,
          weight,
          font,
          color,
          hoverUnderline,
          underlineOffset,
          underlineThickness,
          spacing: 'none',
        }),
        'inline-flex items-center hover:opacity-80',
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [size, weight, font, color, hoverUnderline, underlineOffset, underlineThickness, className],
  );

  // ✅ Insert spacing elements between children (if spacing > none)
  const renderChildren = useCallback((): React.ReactNode[] => {
    if (spacing === 'none' || !children) return React.Children.toArray(children);

    const childrenArray = React.Children.toArray(children);
    if (childrenArray.length <= 1) return childrenArray;

    const spacingClass = SPACING_VARIANTS[spacing];
    if (!spacingClass) return childrenArray;

    const result: React.ReactNode[] = [childrenArray[0]];
    for (let i = 1; i < childrenArray.length; i++) {
      result.push(
        <React.Fragment key={`spacer-${i}`}>
          <span className={spacingClass} aria-hidden="true" />
          {childrenArray[i]}
        </React.Fragment>,
      );
    }

    return result;
  }, [children, spacing]);

  const linkContent = useMemo(() => renderChildren() ?? children, [children, renderChildren]);

  return (
    <a
      {...props}
      className={baseClasses}
      {...(external && {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
    >
      {linkContent}
    </a>
  );
};

export default Link;
