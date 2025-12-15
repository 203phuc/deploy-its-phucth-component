import React, { useEffect, useMemo, useRef, useState } from 'react';
import { addUniqueIds } from 'src/util/uniqueId';
import { cn } from '../../../util/tailwindClass';
import { dotCva, navigationCva, sliderCva } from './style';
import type { SliderProps } from './type';
/**
 * Carousel component with basic navigation
 * Features:
 * - Responsive design (desktop/mobile)
 * - Flexible sizing: small (200x200), medium (300x300), large (500x300), full (100% x 400px), or custom dimensions
 * - Basic navigation with prev/next buttons and dot indicators
 * - Auto-play support
 * - Touch/swipe support (can be added)
 * - Keyboard navigation support
 * - Aspect ratio support for maintaining proportions
 */
export const Slider: React.FC<SliderProps> = ({
  slides,
  autoPlay = 0,
  loop = true,
  className,
  widthFull = true,
  onSlideChange,
  width,
  height,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageHeight, setImageHeight] = useState<number>(0);
  useEffect(() => {
    if (imageRef.current) {
      const imgHeightRef = imageRef.current.clientHeight;
      setImageHeight(imgHeightRef);
    }
  }, [slides, currentIndex, width, imageLoaded]);
  // Auto-play functionality
  useEffect(() => {
    if (props.currentIndex !== undefined) {
      setCurrentIndex(props.currentIndex);
    }

    if (autoPlay <= 0) return; // Skip autoplay if disabled

    const autoLoopSlide = setInterval(() => {
      setCurrentIndex((prev) => {
        let next = prev + 1;

        if (next >= slides.length) {
          next = loop ? 0 : prev;
        }

        onSlideChange?.(next, slides[next]);
        return next;
      });
    }, autoPlay);

    return () => clearInterval(autoLoopSlide);
  }, [autoPlay, slides.length, loop, props.currentIndex, onSlideChange, slides]);

  const slidesWithIds = useMemo(() => addUniqueIds(slides, 'slide'), [slides]);
  // Handle slide change
  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
    if (onSlideChange && slides[index]) {
      onSlideChange(index, slides[index]);
    }
  };
  if (slides.length === 0 || !imageRef) {
    return null;
  }
  return (
    <div
      className={cn(sliderCva({ widthFull }), className)}
      style={{
        width: width,
        height: height ?? imageHeight,
      }}
      {...props}
    >
      {/* Main slide content */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${slides.length * 100}%`, // track width
            transform: `translateX(-${(currentIndex * 100) / slides.length}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {slidesWithIds.map((slide, index) => (
            <div key={slide.uid} className="w-full">
              {typeof slide.content === 'string' ? (
                <img
                  ref={imageRef}
                  src={slide.content}
                  alt={slide.alt ?? `Slide ${index + 1}`}
                  className="h-full w-full object-cover"
                  onLoad={() => setImageLoaded(true)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">{slide.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      {props.showDots !== false && (
        <div className={cn(navigationCva())}>
          {/* Dots Navigation */}
          <div className="z-1 flex gap-[10px] sm:gap-[16px]">
            {slidesWithIds.map((slide, index) => (
              <button
                key={slide.uid}
                onClick={() => handleSlideChange(index)}
                className={cn(
                  dotCva(),
                  index === currentIndex
                    ? 'bg-black-900 w-[26px] sm:w-[30px]'
                    : 'bg-black-900 hover:bg-gray-400',
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
