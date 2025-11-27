// sliderBar.cva.ts
import { cva } from 'class-variance-authority';

export const sliderWrapper = cva('relative w-[262px] py-10');

export const trackBase = cva('absolute top-1/2 h-[1px] w-full -translate-y-1/2 rounded-[3px] bg-black-300');

export const trackRange = cva('absolute top-1/2 h-[1px] -translate-y-1/2 rounded-[3px] bg-black-900');

export const knob = cva(
  'absolute top-1/2 z-[2] h-4 w-4 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full bg-black-900',
);

export const valueTextWrapper = cva('mt-8 flex justify-center');
