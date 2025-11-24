export interface SliderBarProps {
  min?: number;
  max?: number;
  onChange?: (min: number, max: number) => void; // callback for updated values.
}

export type Dragging = 'min' | 'max' | null;
