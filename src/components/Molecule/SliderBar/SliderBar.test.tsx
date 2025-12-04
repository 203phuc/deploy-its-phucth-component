import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
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
  it('updates values when dragging max knob', () => {
    const onChange = vi.fn<(min: number, max: number) => void>();
    const { container } = render(<SliderBar min={0} max={1000} onChange={onChange} />);

    const slider = container.firstChild as HTMLElement;
    vi.spyOn(slider, 'getBoundingClientRect').mockReturnValue(mockRect());

    // Get all Section components that are direct children of the slider
    const sections = container.querySelectorAll('div');
    expect(sections.length).toBeGreaterThanOrEqual(2); // Should have at least 2 sections (min and max knobs)

    // The last section is the max knob
    const maxKnob = sections[sections.length - 1];

    fireEvent.mouseDown(maxKnob);
    fireEvent.mouseMove(document, { clientX: 80 }); // ~75% of 200px width = 750 in 0-1000 range
    fireEvent.mouseUp(document);
    expect(onChange).toHaveBeenCalled();
  });

  it('handles click on track to move nearest knob', () => {
    const onChange = vi.fn<(min: number, max: number) => void>();
    const { container } = render(<SliderBar min={0} max={1000} onChange={onChange} />);

    const slider = container.firstChild as HTMLElement;
    vi.spyOn(slider, 'getBoundingClientRect').mockReturnValue(mockRect());

    // Click near the end of the track (should move max knob)
    fireEvent.mouseDown(slider, { clientX: 180 });
    fireEvent.mouseUp(slider);

    expect(onChange).toHaveBeenCalled();
    const [min, max] = onChange.mock.calls[0] as [number, number];
    expect(min).toBe(0);
    expect(max).toBeGreaterThan(500); // Should be closer to 900 (90% of 1000)
  });
});
