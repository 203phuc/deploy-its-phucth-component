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
  const sliderRef = useRef<HTMLButtonElement>(null);
  const [dragging, setDragging] = useState<Dragging>(null);
  const animationFrameId = useRef<number>(null);
  const lastMoveTime = useRef<number>(0);
  const lastX = useRef<number>(0);
  const clickStartX = useRef(0);
  const clickStartTime = useRef(0);

  const handleMouseDownSlider = (e: React.MouseEvent) => {
    clickStartX.current = e.clientX;
    clickStartTime.current = Date.now();
  };

  const handleMouseUpSlider = (e: React.MouseEvent) => {
    const dx = Math.abs(e.clientX - clickStartX.current);
    const dt = Date.now() - clickStartTime.current;

    const isClick = dx < 3 && dt < 200; // movement < 3px and time < 200ms

    if (isClick) {
      const rect = sliderRef.current?.getBoundingClientRect();
      if (!rect) return;

      let percent = (e.clientX - rect.left) / rect.width;
      percent = Math.min(Math.max(percent, 0), 1);
      const value = min + percent * (max - min);

      setMinValue(Math.floor(value));
      setMaxValue(Math.floor(value));
      onChange?.(value, value);
    }
  };

  // Throttle the mouse move handler
  const updateValues = useCallback(
    (clientX: number) => {
      if (!sliderRef.current || !dragging) return;

      const now = Date.now();
      if (now - lastMoveTime.current < 16) return; // throttle ~60fps
      lastMoveTime.current = now;

      animationFrameId.current = requestAnimationFrame(() => {
        const rect = sliderRef.current!.getBoundingClientRect();
        let percent = (clientX - rect.left) / rect.width;
        percent = Math.min(Math.max(percent, 0), 1);

        const rawValue = min + percent * (max - min);
        let value = Math.floor(rawValue);

        if (dragging === 'min') {
          value = Math.min(value, maxValue); // prevent crossing
          setMinValue(value);
        } else if (dragging === 'max') {
          value = Math.max(value, minValue); // prevent crossing
          setMaxValue(value);
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
    <button
      ref={sliderRef}
      onMouseDown={handleMouseDownSlider}
      onMouseUp={handleMouseUpSlider}
      className={sliderWrapper()}
    >
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
    </button>
  );
};
