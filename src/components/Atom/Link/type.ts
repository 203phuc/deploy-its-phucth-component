import { VariantProps } from 'class-variance-authority';
import { linkCva } from './style';

export type LinkSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | '2xlarge' | '3xlarge' | '4xlarge';

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

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The size of the link text
   * @default 'medium'
   */
  size?: LinkSize;
  /**
   * The spacing between child elements
   * @default 'small'
   */
  spacing?: 'none' | 'xsmall' | 'small' | 'medium' | 'large';
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
   * The gap between the text and the underline
   * @default 'default'
   */
  gap?: 'none' | 'small' | 'medium' | 'large';
  /**
   * Whether to show the underline on hover only
   * @default false
   */
  hoverUnderline?: boolean;
  /**
   * Optional class name to add to the link
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
 * Type for the Link component's variant props
 * @see {@link Link} component for usage
 */
export type LinkCvaProps = VariantProps<typeof linkCva>;
