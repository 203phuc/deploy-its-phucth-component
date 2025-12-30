import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useCallback, useEffect, useRef, useState } from 'react';
import { knob, sliderWrapper, trackBase, trackRange, valueTextWrapper } from './style';
import { type SliderBarProps, Dragging } from './type';

export const SliderBar = ({
  min: initialMin = 0,
  max: initialMax = 1000,
  size = 'desktop',
  onChange,
}: SliderBarProps) => {
  const CLICK_MOVE_THRESHOLD = 3; // px
  const CLICK_TIME_THRESHOLD = 200; // ms
  const THROTTLE_INTERVAL = 16; // ms (~60fps)
  const MIN_MOVE_DELTA = 2; // px

  const min = Math.max(0, initialMin);
  const max = Math.max(0, initialMax, min);
  const [trigger, setTrigger] = useState(false);

  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const sliderRef = useRef<HTMLButtonElement>(null);
  const [dragging, setDragging] = useState<Dragging>(null);
  const animationFrameId = useRef<number>(0);
  const lastMoveTime = useRef<number>(0);
  const lastX = useRef<number>(0);
  const clickStartX = useRef(0);
  const clickStartTime = useRef(0);

  // Sync internal state when props change
  useEffect(() => {
    setMinValue(min);
    setMaxValue(max);
  }, [min, max]);

  const handleMouseDownSlider = (e: React.MouseEvent) => {
    clickStartX.current = e.clientX;
    clickStartTime.current = Date.now();
    setTrigger(true);
  };

  const handleMouseUpSlider = (e: React.MouseEvent) => {
    const dx = Math.abs(e.clientX - clickStartX.current);
    const dt = Date.now() - clickStartTime.current;
    const isClick = dx < CLICK_MOVE_THRESHOLD && dt < CLICK_TIME_THRESHOLD;

    if (!isClick) return;

    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return;

    // Get click percentage
    let percent = (e.clientX - rect.left) / rect.width;
    percent = Math.min(Math.max(percent, 0), 1);
    const value = Math.floor(min + percent * (max - min));

    // ✔️ Determine which knob is closer
    const distToMin = Math.abs(value - minValue);
    const distToMax = Math.abs(value - maxValue);

    if (distToMin < distToMax) {
      // Move MIN knob
      const newMin = Math.min(value, maxValue);
      setMinValue(newMin);
      onChange?.(newMin, maxValue);
    } else {
      // Move MAX knob
      const newMax = Math.max(value, minValue);
      setMaxValue(newMax);
      onChange?.(minValue, newMax);
    }
  };

  const updateValues = useCallback(
    (clientX: number) => {
      if (!sliderRef.current || !dragging) return;

      const now = Date.now();
      if (now - lastMoveTime.current < THROTTLE_INTERVAL) return;
      lastMoveTime.current = now;

      animationFrameId.current = requestAnimationFrame(() => {
        const rect = sliderRef.current!.getBoundingClientRect();
        let percent = (clientX - rect.left) / rect.width;
        percent = Math.min(Math.max(percent, 0), 1);

        const rawValue = min + percent * (max - min);
        let value = Math.floor(rawValue);

        if (dragging === 'min') {
          value = Math.min(value, maxValue);
          setMinValue(value);
        } else if (dragging === 'max') {
          value = Math.max(value, minValue);
          setMaxValue(value);
        }
      });
    },
    [dragging, max, maxValue, min, minValue],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (Math.abs(e.clientX - lastX.current) < MIN_MOVE_DELTA) return;
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
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
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
      className={sliderWrapper({ size })}
    >
      <div className={trackBase({ colorBackground: trigger ? 'gray' : 'black' })} />
      <div
        className={trackRange({ colorBackground: trigger ? 'black' : 'gray' })}
        style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }}
      />

      <Section
        onMouseDown={() => setDragging('min')}
        className={knob()}
        style={{ left: `calc(${minPercent} * (100% - 16px) / 100 + 8px)` }}
      />
      <Section
        onMouseDown={() => setDragging('max')}
        className={knob()}
        style={{ left: `calc(${maxPercent} * (100% - 16px) / 100 + 8px)` }}
      />

      <div className={valueTextWrapper()}>
        <Text size="small">
          ${minValue.toLocaleString()} - ${maxValue.toLocaleString()}
        </Text>
      </div>
    </button>
  );
};
