import { RouterProvider, useSharedRouter } from '@context/RouterContext';
import { SearchPage } from '@pages/SearchProductpage/SearchPage';
import { ShopPage } from '@pages/Shoppage/ShopPage';
import { memo } from 'react';
import './styles/tailwind.css';

const AppRouter = () => {
  const { path } = useSharedRouter();

  if (path === '/search-product-page' || path.startsWith('/search-product-page')) {
    return <SearchPage />;
  }

  return <ShopPage />;
};

const AppComponent = () => {
  return (
    <RouterProvider>
      <AppRouter />
    </RouterProvider>
  );
};

export const App = memo(AppComponent);
