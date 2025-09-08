import { HTMLAttributes, ReactNode } from 'react';

export interface FormProps extends HTMLAttributes<HTMLFormElement> {
  children?: ReactNode;
}
