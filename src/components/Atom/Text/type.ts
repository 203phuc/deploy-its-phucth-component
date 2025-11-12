import type { TextCvaProps } from './style';

export type TextWeight = 'regular' | 'semiBold' | 'bold' | 'moderate';
export type TextFont = 'spaceGrotesk' | 'inter';
export type TextSize =
  | 'special1'
  | 'xsmall'
  | 'small'
  | 'smedium'
  | 'medium'
  | 'large'
  | 'xlarge'
  | '2xlarge'
  | '3xlarge'
  | '4xlarge';

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
   * Text size
   * @default 'medium'
   */
  readonly size?: TextSize;

  /**
   * Text alignment
   */
  readonly align?: 'left' | 'center' | 'right';

  /**
   * Text children what the content
   */
  readonly children?: React.ReactNode;

  /**
   * ClassName for the component
   */
  readonly className?: string;
}
