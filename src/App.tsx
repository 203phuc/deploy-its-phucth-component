import { memo } from 'react';

import { FailPopUp } from '@pages/SignInpage/FailPopUp';
import './styles/tailwind.css';

const AppComponent = () => {
  return <FailPopUp />;
};

export const App = memo(AppComponent);
