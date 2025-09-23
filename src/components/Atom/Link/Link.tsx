import React, { ReactNode } from 'react';
import { linkCva, SPACING_VARIANTS } from './style';
import type { LinkColor, LinkFont, LinkProps, LinkSize, LinkWeight } from './type';

export const Link: React.FC<LinkProps> = ({
  size = 'medium' as LinkSize,
  weight = 'regular' as LinkWeight,
  font = 'inter' as LinkFont,
  color = 'default' as LinkColor,
  gap = 'small',
  spacing = 'small',
  hoverUnderline = false,
  external = false,
  className = '',
  children,
  ...props
}) => {
  const baseClasses = [
    linkCva({
      size,
      weight,
      font,
      color,
      gap,
      hoverUnderline,
      spacing: 'none', // Remove spacing from the root element
    }),
    'hover:opacity-80 inline-flex items-center',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Create a wrapper div to handle the spacing
  const renderChildren = (): ReactNode[] => {
    if (spacing === 'none' || !children) {
      return React.Children.toArray(children);
    }

    const childrenArray = React.Children.toArray(children);
    if (childrenArray.length <= 1) {
      return childrenArray;
    }

    const result: ReactNode[] = [childrenArray[0]];
    // Get the spacing class from our SPACING_VARIANTS constant
    const spacingClass = SPACING_VARIANTS[spacing] || '';

    for (let i = 1; i < childrenArray.length; i++) {
      if (spacingClass) {
        result.push(<span key={`spacer-${i}`} className={spacingClass} aria-hidden="true" />);
      }
      result.push(childrenArray[i]);
    }

    return result;
  };

  const content = renderChildren();

  const linkProps = {
    ...props,
    className: baseClasses,
    ...(external && {
      target: '_blank',
      rel: 'noopener noreferrer',
    }),
  };

  return <a {...linkProps}>{content ?? children}</a>;
};

export default Link;
