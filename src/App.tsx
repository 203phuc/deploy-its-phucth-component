import { OTPInput } from './components/Molecule/OTPInput/OTPInput';
import { memo } from 'react';

import './styles/tailwind.css';

const AppComponent = () => {
  return <OTPInput />;
};

export const App = memo(AppComponent);
