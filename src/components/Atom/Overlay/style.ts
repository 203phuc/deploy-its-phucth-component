import { cva, type VariantProps } from 'class-variance-authority';

export const overlayCva = cva(
  [
    'fixed inset-0 bg-black-900/90', // Full-screen overlay
    'flex transition-opacity duration-200 ease-in-out', // Centering base
  ],
  {
    variants: {
      isOpen: {
        true: 'pointer-events-auto opacity-100',
        false: 'pointer-events-none opacity-0',
      },

      // 🔹 Position the modal inside overlay
      position: {
        center: 'items-center justify-center',
        top: 'items-start justify-center',
        bottom: 'items-end justify-center',
        left: 'items-center justify-start',
        right: 'items-center justify-end',
        topLeft: 'items-start justify-start',
        topRight: 'items-start justify-end',
        bottomLeft: 'items-end justify-start',
        bottomRight: 'items-end justify-end',
      },

      // 🔹 Optional: make modal take full height or width
      fullSize: {
        none: '', // default (fit content)
        width: 'items-center justify-center [&>*]:w-full',
        height: 'items-center justify-center [&>*]:h-full',
        both: 'items-center justify-center [&>*]:w-full [&>*]:h-full',
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
      position: 'center',
      fullSize: 'none',
      zIndex: 5,
    },
  } as const,
);

export type OverlayCvaProps = VariantProps<typeof overlayCva>;
