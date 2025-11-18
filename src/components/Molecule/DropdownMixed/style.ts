// style.ts
import type { TextSize } from '@components/Atom/Text/type';
import type { TextColor } from './type';

export interface DropdownMixedVariantStyle {
  width?: number | string;
  height?: number | string;
  paddingTop?: number;
  paddingBot?: number;
  paddingLeft?: number;
  paddingRight?: number;
  gap?: number;
  textSize?: TextSize;
  textColor?: TextColor;
  style?: object;
  sectionStyle?: object;
}

export const dropdownMixedVariants: Record<'navigation' | 'searchPanel', DropdownMixedVariantStyle> = {
  searchPanel: {
    width: 255,
    paddingTop: 16,
    paddingBot: 16,
    paddingLeft: 16,
    paddingRight: 16,
    gap: 16,
    height: 204,
    textColor: 'black-900',
    style: {
      fontSize: '14px',
      lineHeight: '22px',
    },
    sectionStyle: {
      overflowY: 'auto',
    },
  },
  navigation: {
    width: 301,
    paddingTop: 0,
    paddingBot: 12,
    paddingLeft: 0,
    paddingRight: 0,
    gap: 12,
    textColor: 'default',
    style: { fontSize: '14px', lineHeight: '22px' }, // <-- single {}
  },
};
