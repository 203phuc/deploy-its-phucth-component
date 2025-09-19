import type { HeadingCvaProps } from './style';

export type HeadingWeight = 'Regular' | 'Moderate' | 'Semi Bold' | 'Bold';
export type HeadingFont = 'Space Grotesk' | 'Inter';
export type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7';

type HeadingCvaPropsWithoutSize = Omit<HeadingCvaProps, 'size' | 'color'>;

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
    | 'black400'
    | 'black500'
    | 'black600'
    | 'black700'
    | 'black800'
    | 'black900'
    | 'blue700'
    | 'red500'
    | 'teal600'
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
   * ClassName to apply custom styles for the component
   */
  readonly className?: string;
}
