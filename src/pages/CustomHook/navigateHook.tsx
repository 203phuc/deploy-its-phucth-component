import { useEffect, useState } from 'react';
// RouterContext.tsx
import { createContext, useContext } from 'react';

export function useRouter() {
  const [path, setPath] = useState(globalThis.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(globalThis.location.pathname);
    globalThis.addEventListener('popstate', onPopState);
    return () => globalThis.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (to: string) => {
    globalThis.history.pushState({}, '', to);
    setPath(to);
  };

  return { path, navigate };
}

const RouterContext = createContext<ReturnType<typeof useRouter> | null>(null);

export const RouterProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return <RouterContext.Provider value={router}>{children}</RouterContext.Provider>;
};

export const useSharedRouter = () => {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useSharedRouter must be used inside RouterProvider');
  return ctx;
};
