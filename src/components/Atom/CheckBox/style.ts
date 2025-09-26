import { cva } from 'class-variance-authority';

export const checkboxCva = cva(
  'inline-flex items-center justify-center border-[1.5px] bg-transparent p-[2px] transition-colors',
  {
    variants: {
      size: {
        small: 'h-4 w-4',
        medium: 'h-5 w-5',
        large: 'h-6 w-6',
      },
      roundness: {
        square: 'rounded-[6px]',
        rounded: 'rounded-[8px]',
        pill: 'rounded-full',
      },
      disabled: {
        true: 'pointer-events-none cursor-not-allowed opacity-50',
        false: 'cursor-pointer',
      },
      checked: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      size: 'medium',
      roundness: 'square',
      disabled: false,
      checked: false,
    },
  },
);

export const checkIconCva = cva('stroke-current transition-transform', {
  variants: {
    size: {
      small: 'h-3 w-3',
      medium: 'h-3.5 w-3.5',
      large: 'h-4 w-4',
    },
    checked: {
      true: 'scale-100',
      false: 'scale-0',
    },
  },
  defaultVariants: {
    size: 'medium',
    checked: false,
  },
});

export const labelCva = cva(
  'inline-flex items-center gap-2 font-["Inter"] text-base leading-[26px] font-normal tracking-[0px] not-italic',
  {
    variants: {
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export const inputStyles = 'sr-only';
export const labelTextClasses = 'text-gray-700 dark:text-gray-300';
