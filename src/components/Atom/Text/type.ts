import type { TextCvaProps } from './style';

export type TextWeight = 'Regular' | 'Semi Bold' | 'Bold' | 'Moderate';
export type TextFont = 'Space Grotesk' | 'Inter';
export type TextSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | '2xlarge' | '3xlarge' | '4xlarge';

type TextCvaPropsWithoutSize = Omit<TextCvaProps, 'size' | 'color'>;

//the below code is for extending the type from the cva type adding it with <div/> props
/**
 * Text component props
 */
export interface TextProps extends Partial<TextCvaPropsWithoutSize>, React.HTMLAttributes<HTMLDivElement> {
  /**
   * Text weight (font weight) boldness
   */
  readonly weight?: TextWeight;

  /**
   * Text font family what font to use
   */
  readonly font?: TextFont;
  /**
   * line through text or not
   */
  readonly line?: boolean;
  /**
   * Text color
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
   * Text size
   * @default 'medium'
   */
  readonly size?: TextSize;

  /**
   * Text children what the content
   */
  readonly children?: React.ReactNode;

  /**
   * ClassName for the component
   */
  readonly className?: string;
}
