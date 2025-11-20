// import Layout from '@pages/Layout';
import { HomePage } from '@pages/Homepage';
import { memo } from 'react';

import './styles/tailwind.css';

const AppComponent = () => {
  return <HomePage />;
};

export const App = memo(AppComponent);
