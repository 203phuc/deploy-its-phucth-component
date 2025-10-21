import { cva } from 'class-variance-authority';

export const inputCva = cva('flex items-center bg-white transition-all focus-within:border-black ', {
  variants: {
    variant: {
      solid: 'rounded-md border border-gray-300',
      line: 'rounded-none border-b border-gray-400',
    },
    size: {
      small: 'h-8 gap-1 px-2 text-sm',
      medium: 'h-10 gap-2 px-3 text-sm',
      large: 'h-13 gap-2 px-4 text-base',
    },
    error: {
      true: 'border-red-500 focus-within:border-red-500 focus-within:ring-red-500',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'line',
      size: 'small',
      className: '!px-0',
    },
    {
      variant: 'line',
      size: 'medium',
      className: '!px-0',
    },
    {
      variant: 'line',
      size: 'large',
      className: '!px-0',
    },
  ],
  defaultVariants: {
    variant: 'solid',
    size: 'medium',
    error: false,
  },
});

export const inputElementCva = cva(
  'w-full bg-transparent placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        small: 'py-1 text-sm placeholder:text-sm',
        medium: 'py-2 text-sm placeholder:text-sm',
        large: 'py-2 text-base placeholder:text-base',
      },
      fontFamily: {
        inter: 'font-inter placeholder:font-inter',
        grotesk: 'font-space-grotesk placeholder:font-space-grotesk',
      },
    },
    defaultVariants: {
      size: 'medium',
      fontFamily: 'inter',
    },
  },
);

export const labelCva = cva('font-semibold text-gray-700', {
  variants: {
    size: {
      small: 'text-sm',
      medium: 'text-sm',
      large: 'text-base',
    },
    fontFamily: {
      inter: 'font-inter',
      grotesk: 'font-space-grotesk',
    },
    required: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    size: 'medium',
    fontFamily: 'inter',
    required: false,
  },
});

export const textareaCva = cva(
  'w-full resize-y bg-white transition-all placeholder:text-gray-400 focus:border-black focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        solid: 'rounded-md border border-gray-300',
        line: 'rounded-none border-b border-gray-400',
      },
      size: {
        small: 'p-2 text-sm placeholder:text-sm',
        medium: 'p-3 text-sm placeholder:text-sm',
        large: 'p-4 text-base placeholder:text-base',
      },
      error: {
        true: 'border-red-500 focus:border-red-500 focus:ring-red-500',
        false: '',
      },
      fontFamily: {
        inter: 'font-inter placeholder:font-inter',
        grotesk: 'font-space-grotesk placeholder:font-space-grotesk',
      },
    },
    compoundVariants: [
      {
        variant: 'line',
        size: 'small',
        className: '!px-0',
      },
      {
        variant: 'line',
        size: 'medium',
        className: '!px-0',
      },
      {
        variant: 'line',
        size: 'large',
        className: '!px-0',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'medium',
      error: false,
      fontFamily: 'inter',
    },
  },
);

export const dropdownMenuClasses = {
  dropdownMenu:
    'absolute left-0 top-full z-50 mt-1 max-h-60 w-64 overflow-y-auto rounded-md border border-gray-200 bg-white',
};
