import { FailPopupBase } from '@pages/SignInpage/FailPopupBase';

export const RegisterFailPopUp = () => (
  <FailPopupBase
    message={'Registration failed!\nPlease check all fields for accuracy.'}
    buttonLabel="Close"
  />
);
