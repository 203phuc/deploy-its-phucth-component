import { RouterProvider } from '@context/RouterContext';
import { NotFoundPage } from '@pages/NotFoundpage/NotFoundPage';
import { memo } from 'react';
import './styles/tailwind.css';

const AppComponent = () => {
  return (
    <RouterProvider>
      <NotFoundPage />
    </RouterProvider>
  );
};

export const App = memo(AppComponent);
