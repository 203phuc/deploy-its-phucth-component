import { cva, type VariantProps } from 'class-variance-authority';
import { DropdownDirection, DropdownVariant } from './type';

const dropdownVariants = cva('absolute z-50 w-full bg-white text-left shadow-[0px_8px_16px_0px_#00000009]', {
  variants: {
    direction: {
      up: 'bottom-full mb-1',
      down: 'top-full mt-1',
    },
  },
  defaultVariants: {
    direction: 'down',
  },
});

const optionVariants = cva('w-full cursor-pointer text-left text-sm transition-colors duration-200', {
  variants: {
    variant: {
      default: 'px-4 py-3',
      xs: 'px-3 py-2',
      none: '',
    },
    selected: {
      true: 'bg-blue-50',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
    },
  },
  defaultVariants: {
    variant: 'default',
    selected: false,
    disabled: false,
  },
});

const widthVariants = cva('', {
  variants: {
    variant: {
      default: 'w-full',
      xs: 'w-[114px]', // 114px - compact width for language/currency selectors
      sm: 'w-[173px]', // 173px - small width
      md: 'w-[228px]', // 228px - medium width
      lg: 'w-[255px]', // 255px - large width
      other: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type DropdownVariants = VariantProps<typeof dropdownVariants>;
type OptionVariants = VariantProps<typeof optionVariants>;
type WidthVariants = VariantProps<typeof widthVariants>;

export const getSelectStyles = (
  variant: DropdownVariant = 'default',
  direction: DropdownDirection = 'down',
) => {
  const width = widthVariants({ variant });

  return {
    dropdown: dropdownVariants({ direction }),
    option: (selected?: boolean, disabled?: boolean) =>
      optionVariants({
        variant: variant === 'xs' ? 'xs' : 'default',
        selected,
        disabled,
      }),
    optionHover: 'hover:bg-[#F5F5F5]',
    width,
  };
};

export { optionVariants };
export type { DropdownVariants, OptionVariants, WidthVariants };
