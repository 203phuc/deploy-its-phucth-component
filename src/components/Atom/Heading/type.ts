import type { HeadingCvaProps } from './style';

export type HeadingWeight = 'regular' | 'moderate' | 'semiBold' | 'bold';
export type HeadingFont = 'spaceGrotesk' | 'inter';
export type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'hSpecial';
export type HeadingAlign = 'left' | 'center' | 'right';

type HeadingCvaPropsWithoutSize = Omit<HeadingCvaProps, 'size' | 'color' | 'align'>;

/**
 * Heading component props (children REQUIRED)
 * - Removed Partial<> so other props are explicit/controlled here
 */
export interface HeadingProps
  extends Partial<HeadingCvaPropsWithoutSize>,
    React.HTMLAttributes<HTMLDivElement> {
  /**
   * Heading weight keys matching headingCva
   */
  readonly weight?: HeadingWeight;
  /**
   * Heading font family what font to use
   */
  readonly font?: HeadingFont;

  /**
   * Heading color
   * @default 'default'
   */
  readonly color?:
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

  /**
   * Heading size keys matching headingCva
   * @default 'h7'
   */
  readonly size?: HeadingSize;

  /**
   * What the actual heading content is (required)
   */
  readonly children: React.ReactNode;
  /**
   * Text alignment
   * @default 'left'
   */
  readonly align?: HeadingAlign;

  /**
   * ClassName to apply custom styles for the component
   */
  readonly className?: string;
}
