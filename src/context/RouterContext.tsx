import React, { createContext, useContext } from 'react';
import { useRouter } from '../pages/CustomHook/useRouter';

type RouterReturn = ReturnType<typeof useRouter>;

const RouterContext = createContext<RouterReturn | null>(null);

export const RouterProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return <RouterContext.Provider value={router}>{children}</RouterContext.Provider>;
};

export const useSharedRouter = () => {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useSharedRouter must be used inside RouterProvider');
  return ctx;
};
export default RouterContext;
