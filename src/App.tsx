import { memo } from 'react';

import { SignUpPage } from '@pages/SignUpPage/SignUpPage';
import './styles/tailwind.css';

const AppComponent = () => {
  return <SignUpPage isOpen={true} />;
};

export const App = memo(AppComponent);
