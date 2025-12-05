import { SliderBarCvaProps } from './style';

export interface SliderBarProps extends SliderBarCvaProps {
  min?: number;
  max?: number;
  onChange?: (min: number, max: number) => void; // callback for updated values.
}

export type Dragging = 'min' | 'max' | null;
