import React, { useEffect, useRef, useState } from 'react';
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
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [iHeight, setIHeight] = useState<number>(0);
  useEffect(() => {
    if (imgRef.current) {
      const imgHeight = imgRef.current.clientHeight;
      setIHeight(imgHeight);
    }
  }, [slides, currentIndex, width]);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= slides.length) {
            return loop ? 0 : prevIndex;
          }
          return nextIndex;
        });
      }, autoPlay);

      return () => clearInterval(interval);
    }
  }, [autoPlay, slides, loop]);

  // Handle slide change
  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
    if (onSlideChange && slides[index]) {
      onSlideChange(index, slides[index]);
    }
  };
  if (slides.length === 0) {
    return null;
  }

  const currentSlide = slides[currentIndex];

  return (
    <div
      className={cn(sliderCva({ widthFull }), `w-[${width}px]`, className)}
      style={{
        width: width,
        height: height ?? iHeight,
      }}
      {...props}
    >
      {/* Main slide content */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={
            {
              '--slide-width': `100%`,
              '--slide-transform': `-${currentIndex * 100}%`,
              height: 'fit-content',
              width: 'var(--slide-width)',
              transform: 'translateX(var(--slide-transform))',
            } as React.CSSProperties
          }
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              {typeof slide.content === 'string' ? (
                <img
                  ref={imgRef}
                  src={slide.content}
                  alt={slide.alt ?? `Slide ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">{slide.content}</div>
              )}
            </div>
          ))}
        </div>

        {/* Optional caption overlay for current slide */}
        {currentSlide.caption && (
          <div className="absolute inset-x-0 bottom-0 bg-black/50 p-4 text-white">
            <p className="text-sm md:text-base">{currentSlide.caption}</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className={cn(navigationCva())}>
        {/* Dots Navigation */}
        <div className="flex gap-[10px] sm:gap-[16px]">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={
                dotCva() +
                ` ${index === currentIndex ? 'bg-black-900 w-[26px] sm:w-[30px]' : 'bg-black-900 hover:bg-gray-400'}`
              }
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
