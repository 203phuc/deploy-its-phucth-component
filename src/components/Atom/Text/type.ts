import type { TextCvaProps } from './style';

export type TextWeight = 'Regular' | 'Semi Bold' | 'Bold';
export type TextFont = 'Space Grotesk' | 'Inter';

type TextCvaPropsWithoutSize = Omit<TextCvaProps, 'size' | 'colorToken'>;

//the below code is for extending the type from the cva type adding it with <div/> props
export interface TextProps extends Partial<TextCvaPropsWithoutSize>, React.HTMLAttributes<HTMLDivElement> {
  readonly weight?: TextWeight;
  readonly font?: TextFont;
  readonly color?: string;
  readonly size?: number;
  readonly children?: React.ReactNode;
  readonly className?: string;
  readonly style?: React.CSSProperties;
}
