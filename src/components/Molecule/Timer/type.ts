import { type TimeBlockCvaProps, type LabelCvaProps } from './style';

export interface TimerProps
  extends Partial<TimeBlockCvaProps>,
    Partial<LabelCvaProps>,
    React.HTMLAttributes<HTMLDivElement> {
  /**
   * Text font family what font to use
   */
  readonly endDate?: string;
  /**
   * Text to input using as cta of the block
   */
  readonly label?: string;
  /**
   * Text to input using as cta of the block with highlight
   */
  readonly labelSpan?: string;
  /**
   * Text to input using as cta of the block with highlight
   */
  readonly start?: boolean;
}
