import { RouterProvider } from '@context/RouterContext';
import { ShopPage } from '@pages/Shoppage/ShopPage';
import { memo } from 'react';
import './styles/tailwind.css';

const AppComponent = () => {
  return (
    <RouterProvider>
      <ShopPage />
    </RouterProvider>
  );
};

export const App = memo(AppComponent);
