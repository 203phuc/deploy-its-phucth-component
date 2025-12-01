import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useCallback, useEffect, useRef, useState } from 'react';
import { knob, sliderWrapper, trackBase, trackRange, valueTextWrapper } from './style';
import { type SliderBarProps, Dragging } from './type';

export const SliderBar = ({ min: initialMin = 0, max: initialMax = 1000, onChange }: SliderBarProps) => {
  // Ensure initial values are not negative
  const min = Math.max(0, initialMin);
  // Allow max to be equal to min initially
  const max = Math.max(0, initialMax, min);

  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<Dragging>(null);
  const animationFrameId = useRef<number>();
  const lastMoveTime = useRef<number>(0);
  const lastX = useRef<number>(0);

  // Throttle the mouse move handler
  const updateValues = useCallback(
    (clientX: number) => {
      if (!sliderRef.current || !dragging) return;

      const now = Date.now();
      // Skip processing if the last update was too recent (throttle to ~60fps)
      if (now - lastMoveTime.current < 16) {
        // ~60fps
        return;
      }
      lastMoveTime.current = now;

      const rect = sliderRef.current.getBoundingClientRect();
      let percent = (clientX - rect.left) / rect.width;
      percent = Math.min(Math.max(percent, 0), 1);
      let value = Math.max(0, Math.round(min + percent * (max - min)));

      // Use requestAnimationFrame for smooth updates
      animationFrameId.current = requestAnimationFrame(() => {
        if (dragging === 'min') {
          value = Math.min(value, maxValue);
          setMinValue(Math.max(0, value));
        } else if (dragging === 'max') {
          value = Math.max(value, minValue);
          setMaxValue(Math.max(0, value));
        }
      });
    },
    [dragging, max, maxValue, min, minValue],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      // Only process if mouse has moved significantly (improves performance)
      if (Math.abs(e.clientX - lastX.current) < 2) return;
      lastX.current = e.clientX;

      updateValues(e.clientX);
    },
    [updateValues],
  );

  const handleMouseUp = useCallback(() => {
    setDragging(null);
    lastMoveTime.current = 0;
    lastX.current = 0;
  }, []);

  useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [dragging, handleMouseMove, handleMouseUp]);

  useEffect(() => {
    if (onChange) onChange(minValue, maxValue);
  }, [minValue, maxValue, onChange]);

  const minPercent = ((minValue - min) / (max - min)) * 100;
  const maxPercent = ((maxValue - min) / (max - min)) * 100;

  return (
    <div ref={sliderRef} className={sliderWrapper()}>
      <div className={trackBase()} />
      <div
        className={trackRange()}
        style={{
          left: `${minPercent}%`,
          width: `${maxPercent - minPercent}%`,
        }}
      />

      <Section onMouseDown={() => setDragging('min')} className={knob()} style={{ left: `${minPercent}%` }} />

      <Section onMouseDown={() => setDragging('max')} className={knob()} style={{ left: `${maxPercent}%` }} />

      <div className={valueTextWrapper()}>
        <Text size="small">
          ${minValue.toLocaleString()} - ${maxValue.toLocaleString()}
        </Text>
      </div>
    </div>
  );
};
