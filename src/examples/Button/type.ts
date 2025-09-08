import { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

type FlexProperties = {
  [K in keyof CSSProperties as K extends `flex${string}` ? K : never]: CSSProperties[K];
};

// Extends `flex` properties from `CSSProperties` interface
export interface ButtonProps extends FlexProperties, ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Is this the principal call to action on the page?
   */
  readonly primary?: boolean;
  /**
   * What background color to use
   */
  readonly backgroundColor?: string;
  /**
   * How large should the button be?
   */
  readonly size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  readonly children?: ReactNode;
  /**
   * Optional click handler
   */
  readonly onClick?: () => void;
}

export interface ButtonV100DevelopProps extends ButtonProps {
  /**
   * @deprecated Use `children` instead.
   */
  label?: string;
}
