import { Flex } from '@components/Atom/Flex';
import { RouterProvider, useSharedRouter } from '@pages/CustomHook/navigateHook';
import { HomePage } from '@pages/Homepage/HomePage';
import { NavigationBar } from '@pages/Homepage/sections/NavigationBar';
import { ProductPage } from '@pages/Product/ProductPage';
import { ReactNode } from 'react';

const routes: Record<string, ReactNode> = {
  '/': <HomePage />,
  '/product': <ProductPage />,
  '/contact': <h1>Contact Page</h1>,
};

// --- App content (uses router) ---
function AppContent() {
  const { path } = useSharedRouter();
  return (
    <div>
      <NavigationBar />
      <Flex width="100%">{routes[path] ?? <h1>404 - Not Found</h1>}</Flex>
    </div>
  );
}

// --- Root wrapper (provides router) ---
export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
