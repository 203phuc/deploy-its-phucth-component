import { memo } from 'react';

import { FormProps } from './type';

const FormComponent = ({ children, ...props }: FormProps) => {
  return <form {...props}>{children}</form>;
};

const Form = memo(FormComponent);

export { Form };
