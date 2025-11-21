import { Text } from '@components/Atom/Text';
import { useEffect, useRef, useState } from 'react';
import { knob, sliderWrapper, trackBase, trackRange, valueTextWrapper } from './style';
import { type SliderBarProps, Dragging } from './type';

export const SliderBar = ({ min = 0, max = 1000, onChange }: SliderBarProps) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<Dragging>(null);

  const handleMouseUp = () => setDragging(null);

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (!dragging || !sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      let percent = (e.clientX - rect.left) / rect.width;
      percent = Math.min(Math.max(percent, 0), 1);
      const value = Math.round(min + percent * (max - min));

      if (dragging === 'min' && value < maxValue) setMinValue(value);
      if (dragging === 'max' && value > minValue) setMaxValue(value);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, minValue, maxValue, max, min]);

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

      <div
        role="slider"
        tabIndex={0}
        aria-valuemin={min}
        aria-valuemax={maxValue}
        aria-valuenow={minValue}
        onMouseDown={() => setDragging('min')}
        className={knob()}
        style={{ left: `${minPercent}%` }}
      />

      <div
        role="slider"
        tabIndex={0}
        aria-valuemin={minValue}
        aria-valuemax={max}
        aria-valuenow={maxValue}
        onMouseDown={() => setDragging('max')}
        className={knob()}
        style={{ left: `${maxPercent}%` }}
      />

      <div className={valueTextWrapper()}>
        <Text size="small">
          ${minValue.toLocaleString()} - ${maxValue.toLocaleString()}
        </Text>
      </div>
    </div>
  );
};
