import { cva, type VariantProps } from 'class-variance-authority';
import { SelectDirection, SelectVariant } from './type';

const dropdownVariants = cva(
  'absolute z-50 max-h-60 overflow-auto bg-white shadow-[0px_8px_16px_0px_#00000009]',
  {
    variants: {
      direction: {
        up: 'bottom-full mb-1',
        down: 'top-full mt-1',
      },
    },
    defaultVariants: {
      direction: 'down',
    },
  },
);

const optionVariants = cva('cursor-pointer text-sm transition-colors duration-200', {
  variants: {
    variant: {
      default: 'px-4 py-3',
      'width-114': 'px-3 py-2',
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
      'width-228': 'w-[228px]',
      'width-173': 'w-[173px]',
      'width-114': 'w-[114px]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type DropdownVariants = VariantProps<typeof dropdownVariants>;
type OptionVariants = VariantProps<typeof optionVariants>;
type WidthVariants = VariantProps<typeof widthVariants>;

export const getSelectStyles = (variant: SelectVariant = 'default', direction: SelectDirection = 'down') => {
  const width = widthVariants({ variant });

  return {
    dropdown: dropdownVariants({ direction }),
    option: (selected?: boolean, disabled?: boolean) =>
      optionVariants({
        variant: variant === 'width-114' ? 'width-114' : 'default',
        selected,
        disabled,
      }),
    optionHover: 'hover:bg-[#F5F5F5]',
    width,
  };
};

export { optionVariants };
export type { DropdownVariants, OptionVariants, WidthVariants };
