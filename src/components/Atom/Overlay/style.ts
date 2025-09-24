import { cva, type VariantProps } from 'class-variance-authority';

export const overlayCva = cva(
  [
    'fixed top-0 left-0',
    'h-screen w-screen',
    'bg-black-900/90',
    'flex items-center justify-center',
    'transition-opacity duration-200 ease-in-out',
  ],
  {
    variants: {
      isOpen: {
        true: 'pointer-events-auto opacity-100',
        false: 'pointer-events-none opacity-0',
      },
      backgroundColor: {
        'black-900/90': 'bg-black-900/90',
        'black-500/50': 'bg-black-500/50',
        'white-900/90': 'bg-white-900/90',
        'white-500/50': 'bg-white-500/50',
        'gray-900/80': 'bg-gray-900/80',
        'blue-900/70': 'bg-blue-900/70',
        'red-900/70': 'bg-red-900/70',
        'green-900/70': 'bg-green-900/70',
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
      backgroundColor: 'black-900/90',
      zIndex: 5,
    },
  } as const,
);

export type OverlayCvaProps = VariantProps<typeof overlayCva>;
