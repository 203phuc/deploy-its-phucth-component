import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { SliderBar } from './SliderBar';

function mockRect(left = 0, width = 200): DOMRect {
  return {
    left,
    width,
    right: left + width,
    top: 0,
    bottom: 0,
    height: 0,
    x: left,
    y: 0,
    toString() {
      return '';
    },
  } as unknown as DOMRect;
}

describe('SliderBar', () => {
  it('renders two knobs', () => {
    const { getAllByRole } = render(<SliderBar min={0} max={100} />);
    expect(getAllByRole('slider').length).toBe(2);
  });

  it('triggers onChange when dragging min knob', () => {
    const onChange = vi.fn();
    const { getAllByRole, container } = render(<SliderBar min={0} max={100} onChange={onChange} />);

    const slider = container.firstChild as HTMLElement;
    vi.spyOn(slider, 'getBoundingClientRect').mockReturnValue(mockRect());

    const minKnob = getAllByRole('slider')[0];

    fireEvent.mouseDown(minKnob);
    fireEvent.mouseMove(document, { clientX: 80 }); // ~40%
    fireEvent.mouseUp(document);

    expect(onChange).toHaveBeenCalled();
  });

  it('triggers onChange when dragging max knob', () => {
    const onChange = vi.fn();
    const { getAllByRole, container } = render(<SliderBar min={0} max={100} onChange={onChange} />);

    const slider = container.firstChild as HTMLElement;
    vi.spyOn(slider, 'getBoundingClientRect').mockReturnValue(mockRect());

    const maxKnob = getAllByRole('slider')[1];

    fireEvent.mouseDown(maxKnob);
    fireEvent.mouseMove(document, { clientX: 150 }); // ~75%
    fireEvent.mouseUp(document);

    expect(onChange).toHaveBeenCalled();
  });
});
