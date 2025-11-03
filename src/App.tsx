import Layout from '@pages/Layout';
import { memo } from 'react';

import './styles/tailwind.css';

const AppComponent = () => {
  return <Layout />;
};

export const App = memo(AppComponent);
