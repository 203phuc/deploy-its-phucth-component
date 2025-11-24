import { memo } from 'react';

import { SignInPage } from '@pages/SingInpage/SignInPage';
import './styles/tailwind.css';

const AppComponent = () => {
  return <SignInPage />;
};

export const App = memo(AppComponent);
