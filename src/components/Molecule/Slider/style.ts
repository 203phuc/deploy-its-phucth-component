import { cva, VariantProps } from 'class-variance-authority';

export const sliderCva = cva('relative flex items-end justify-center', {
  variants: {
    widthFull: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    widthFull: false,
  },
});

export const navigationCva = cva('mb-[16px] flex items-center justify-center sm:mb-[32px]');

export const dotCva = cva('h-[6px] w-[6px] rounded-full transition-all sm:h-2 sm:w-2');

export type SliderCvaProps = VariantProps<typeof sliderCva>;

export type NavigationCvaProps = VariantProps<typeof navigationCva>;
