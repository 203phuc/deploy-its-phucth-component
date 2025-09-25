// types.ts
import type { KnobCvaProps, TrackCvaProps } from './style';

type VisualProps = Pick<TrackCvaProps, 'size' | 'shape' | 'state'> & Pick<KnobCvaProps, 'checked'>;

export interface ToggleProps
  extends Partial<VisualProps>,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'type'> {
  /**
   * Controlled checked state (boolean)
   */
  checked?: boolean;

  /**
   * Uncontrolled default
   */
  defaultChecked?: boolean;

  /**
   * Called when checked toggles
   */
  onCheckedChange?: (checked: boolean) => void;
}
