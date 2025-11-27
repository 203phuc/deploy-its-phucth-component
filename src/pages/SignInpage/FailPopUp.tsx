import { FailPopupBase } from './FailPopupBase';

export const FailPopUp = () => (
  <FailPopupBase
    message={'Login failed. Please ensure your username/email and password are correct!'}
    buttonLabel="Try again"
  />
);
