# TODO: Add strokeWidth prop to all Icons

## Plan

- Update IconProps interface in icons/types.ts to include strokeWidth?: number;
- Update IconBaseProps in Icons/types.ts to include strokeWidth?: number;
- Update Icons.tsx to accept and pass strokeWidth to icon components;
- Update each individual icon component to accept strokeWidth in props and use it where applicable (for stroked paths).

## Steps

1. [x] Update icons/types.ts
2. [x] Update Icons/types.ts
3. [x] Update Icons.tsx
4. Update all icon components (list below)

## Icon Components to Update

- AmericanFlagIcon.tsx
- ArrowDownIcon.tsx (already has, but ensure)
- ArrowLeftIcon.tsx
- ArrowRightIcon.tsx
- ArrowUpIcon.tsx
- BagIcon.tsx
- BrandingIcon.tsx
- CheckIcon.tsx (already has)
- ChevronDownIcon.tsx
- ChevronLeftIcon.tsx
- ChevronRightIcon.tsx
- ChevronUpIcon.tsx
- ClockIcon.tsx
- CloseIcon.tsx
- CouponIcon.tsx
- CreditCardIcon.tsx
- EditIcon.tsx
- EgyptianFlagIcon.tsx
- EmailIcon.tsx
- EyeCloseIcon.tsx
- FacebookIcon.tsx
- FiveColumnsIcon.tsx
- FourColumnsIcon.tsx
- GermanFlagIcon.tsx
- HamburgerMenuIcon.tsx
- HeartFilledIcon.tsx
- HeartIcon.tsx
- HelpIcon.tsx
- InstagramIcon.tsx
- ItalianFlagIcon.tsx
- JapaneseFlagIcon.tsx
- ListIcon.tsx
- LockIcon.tsx
- LogoutIcon.tsx
- MessageIcon.tsx
- MoneyIcon.tsx
- NotFoundIcon.tsx
- PhoneIcon.tsx
- PlayIcon.tsx
- PlusIcon.tsx
- QuoteIcon.tsx
- SearchIcon.tsx
- SettingIcon.tsx
- ShareIcon.tsx
- StarFilledIcon.tsx
- StarOutlinedIcon.tsx
- ThreeColumnsIcon.tsx
- TrashIcon.tsx
- TruckIcon.tsx
- TwitterIcon.tsx
- TwoColumnsIcon.tsx
- UserIcon.tsx
- ViewIcon.tsx
