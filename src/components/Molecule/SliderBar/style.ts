// sliderBar.cva.ts
import { VariantProps, cva } from 'class-variance-authority';

export const sliderWrapper = cva('relative', {
  variants: {
    size: {
      desktop: '!w-[412px]',
      mobile: '!w-[278px]',
      special: '!w-[262px]',
    },
  },
});

export type SliderBarCvaProps = VariantProps<typeof sliderWrapper>;

export const trackBase = cva('absolute top-[8px] h-[1px] w-full rounded-[3px]', {
  variants: {
    colorBackground: {
      black: 'bg-black-900',
      gray: 'bg-[#CBCBCB]',
    },
  },
});

export const trackRange = cva('absolute top-[8px] h-[1px] rounded-[3px]', {
  variants: {
    colorBackground: {
      black: 'bg-black-900',
      gray: 'bg-[#CBCBCB]',
    },
  },
});

export const knob = cva(
  'absolute top-0 z-[2] h-4 w-4 -translate-x-1/2 cursor-grab rounded-full bg-black-900',
);

export const valueTextWrapper = cva('mt-[24px] flex justify-center');
