import App from '@pages/HOC/Layout';
import { memo } from 'react';
import './styles/tailwind.css';

const AppComponent = () => {
  return <App />;
};

export default memo(AppComponent);
