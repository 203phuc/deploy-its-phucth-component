import { RouterProvider, useSharedRouter } from '@pages/CustomHook/navigateHook';
import { HBZ0000 } from '@pages/HBZ0000';
import { NavigationBar } from '@pages/Homepage/sections/NavigationBar';
import { ProductPage } from '@pages/Product/ProductPage';
import { ReactNode, useEffect } from 'react';

const routes: Record<string, ReactNode> = {
  '/': <HBZ0000 />,
  '/product': <ProductPage />,
  '/contact': <h1>Contact Page</h1>,
};

// --- App content (uses router) ---
function AppContent() {
  const { path } = useSharedRouter();
  useEffect(() => {
    if (path) {
      console.log(path);
    }
  }, [path]);
  return (
    <div>
      <NavigationBar />
      <main>{routes[path] ?? <h1>404 - Not Found</h1>}</main>
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
