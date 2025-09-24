import { cva, type VariantProps } from 'class-variance-authority';

export const overlayCva = cva(
  [
    'fixed inset-0 bg-black-900/90', // Fixed positioning to viewport
    'flex items-center justify-center',
    'transition-opacity duration-200 ease-in-out',
  ],
  {
    variants: {
      isOpen: {
        true: 'pointer-events-auto',
        false: 'pointer-events-none',
      },
      backgroundColor: {
        'black-900': 'bg-black-900/90',
      },
      backgroundOpacity: {
        90: 'bg-black-900/90',
      },
      zIndex: {
        1: 'z-10',
        2: 'z-20',
        3: 'z-30',
        4: 'z-40',
        5: 'z-50',
        6: 'z-60',
        7: 'z-70',
        8: 'z-80',
        9: 'z-90',
        10: 'z-100',
      },
    },
    defaultVariants: {
      isOpen: false,
      backgroundColor: 'black-900',
      zIndex: 5,
    },
  } as const,
);

export type OverlayCvaProps = VariantProps<typeof overlayCva>;
