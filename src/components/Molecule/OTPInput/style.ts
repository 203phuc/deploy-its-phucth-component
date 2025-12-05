import { cva } from 'class-variance-authority';

export const otpInputStyles = cva(
  [
    // Base styles
    'font-space-grotesk rounded-full border border-gray-200',
    'bg-[#D9D9D987] text-center text-2xl outline-none',
    'transition-all duration-200 ease-in-out',
    'focus:border-black-500 focus:ring-2 focus:ring-black-100',
  ],
  {
    variants: {
      variant: {
        mobile: 'h-[40px] w-[40px] text-lg',
        desktop: 'h-[55px] w-[55px]',
      },
      hasError: {
        true: 'border-red-500 focus:border-red-500 focus:ring-red-100',
      },
    },
    defaultVariants: {
      variant: 'desktop',
    },
  },
);

export const nextButtonStyles = [
  'absolute right-0 top-1/2 -translate-y-1/2 translate-x-6',
  'h-0 w-0 opacity-0',
  'focus:h-auto focus:w-auto focus:opacity-100',
  'focus:outline-none',
].join(' ');
