import { cva, type VariantProps } from 'class-variance-authority';

export const iconsCva = cva(
  'inline-flex shrink-0 items-center justify-center', // base styles
  {
    variants: {
      box: {
        true: '', // has box wrapper
        false: '', // no box wrapper
      },

      // 2. Box fill color
      boxFill: {
        red: 'bg-red-300',
        green: 'bg-teal-600',
        white: 'bg-white',
        gray: 'bg-[#F5F5F5]',
        none: 'bg-transparent',
      },

      // 3. Box border
      boxBorder: {
        true: 'border',
        false: '',
      },

      boxBorderWidth: {
        /**
         * border width in px
         * 1px, 2px, 3px, 4px, 5px, 6px, 7px, 8px, 9px, 10px
         */
        '1': 'border-[1px]',
        '2': 'border-[1.5px]',
      },

      // 4. Stroke/outline color
      color: {
        'black-600': 'text-black-600',
        'black-400': 'text-black-400',
        blue: 'text-blue-500',
        black: 'text-black',
        white: 'text-white',
      },

      // 6. Roundness for box
      boxRoundness: {
        pill: 'rounded-full',
        round: 'rounded-md',
        sharp: 'rounded-none',
      },
    },

    compoundVariants: [
      {
        box: false,
        boxBorder: true,
        className: 'border-0', // no border if box=false
      },
    ],
    defaultVariants: {
      box: false,
      boxFill: 'none',
      boxBorder: false,
      color: 'black',
      boxRoundness: 'round',
    },
  },
);

export type IconCvaProps = VariantProps<typeof iconsCva>;
