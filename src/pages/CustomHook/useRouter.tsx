import { useEffect, useState } from 'react';

// Lightweight client-side router hook
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
