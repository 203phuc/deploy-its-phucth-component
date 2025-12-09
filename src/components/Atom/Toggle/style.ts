// style.ts
import { cva, type VariantProps } from 'class-variance-authority';

export const trackCva = cva('relative inline-flex items-center transition-colors duration-300 select-none', {
  variants: {
    size: {
      small: 'h-[18px] w-[37.12px]',
      medium: 'h-[24px] w-[50px]',
      large: 'h-[32px] w-[66px]',
    },
    shape: {
      rounded: 'rounded-full',
      square: 'rounded-md',
    },
    state: {
      on: 'border-none bg-black data-[size=small]:h-[19px] data-[size=small]:w-[40px]',
      off: 'border-[2px] border-black-900 bg-white',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    size: 'medium',
    shape: 'rounded',
    state: 'off',
    disabled: false,
  },
});

export const knobCva = cva('absolute shadow-md transition-transform duration-300', {
  compoundVariants: [
    {
      size: 'small',
      class: 'left-[1.5px]',
    },
    {
      size: 'medium',
      class: 'left-[2px]',
    },
    {
      size: 'large',
      class: 'left-[3px]',
    },
  ],
  variants: {
    size: {
      small: 'top-[0.6px] h-[12.85px] w-[12.85px]',
      medium: 'top-[1.3px] h-[18px] w-[18px]',
      large: 'top-[2px] h-[24px] w-[24px]',
    },
    checked: {
      true: 'bg-white data-[size=large]:h-[23px] data-[size=large]:w-[23px] data-[size=large]:translate-x-[34.5px] data-[size=large]:translate-y-[1.5px] data-[size=medium]:h-[18px] data-[size=medium]:w-[18px] data-[size=medium]:translate-x-[26.5px] data-[size=medium]:translate-y-[2px] data-[size=small]:h-[13px] data-[size=small]:w-[13px] data-[size=small]:translate-x-[19.5px] data-[size=small]:translate-y-[1.5px]',
      false: 'translate-x-0 border-[2px] bg-black-900',
    },
    shape: {
      rounded: 'rounded-full',
      square: 'rounded-md',
    },
  },
  defaultVariants: {
    size: 'medium',
    checked: false,
    shape: 'rounded',
  },
});

export type TrackCvaProps = VariantProps<typeof trackCva>;
export type KnobCvaProps = VariantProps<typeof knobCva>;
