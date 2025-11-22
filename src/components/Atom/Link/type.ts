import { VariantProps } from 'class-variance-authority';
import { linkCva } from './style';

export type LinkSize =
  | 'special1'
  | 'xsmall'
  | 'smedium'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | '2xlarge'
  | '3xlarge'
  | '4xlarge';

export type LinkWeight = 'regular' | 'semiBold' | 'bold' | 'moderate';

export type LinkFont = 'inter' | 'spaceGrotesk';

export type LinkColor =
  | 'default'
  | 'black-400'
  | 'black-500'
  | 'black-600'
  | 'black-700'
  | 'black-800'
  | 'black-900'
  | 'blue-700'
  | 'red-500'
  | 'teal-600'
  | 'white';

export type LinkSpacing = 'none' | 'xsmall' | 'small' | 'medium' | 'large';

export type LinkUnderlineOffset = 'none' | 'small' | 'medium' | 'large';
export type LinkUnderlineThickness = 'thin' | 'medium' | 'thick';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The size of the link text
   * @default 'medium'
   */
  size?: LinkSize;

  /**
   * The spacing between icon and text
   * @default 'none'
   */
  spacing?: LinkSpacing;

  /**
   * Font weight of the link text
   * @default 'regular'
   */
  weight?: LinkWeight;

  /**
   * Font family
   * @default 'inter'
   */
  font?: LinkFont;

  /**
   * The color of the link text and underline
   * @default 'default'
   */
  color?: LinkColor;

  /**
   * Whether to show the underline only on hover
   * @default false
   */
  hoverUnderline?: boolean;

  /**
   * Controls the distance between text baseline and the underline
   * @default 'small'
   */
  underlineOffset?: LinkUnderlineOffset;

  /**
   * Controls the thickness of the underline
   * @default 'thin'
   */
  underlineThickness?: LinkUnderlineThickness;

  /**
   * Optional custom class name
   */
  className?: string;

  /**
   * Whether the link is external (adds target="_blank" and rel="noopener noreferrer")
   * @default false
   */
  external?: boolean;

  /**
   * The URL to link to
   */
  href: string;
}

/**
 * Type for the Link component’s variant props (from CVA)
 */
export type LinkCvaProps = VariantProps<typeof linkCva>;
