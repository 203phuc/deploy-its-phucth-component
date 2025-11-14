import { useEffect, useMemo, useState } from 'react';

export function useRouter() {
  const [path, setPath] = useState(globalThis.location.pathname);
  const [search, setSearch] = useState(globalThis.location.search);

  useEffect(() => {
    const onPopState = () => {
      setPath(globalThis.location.pathname);
      setSearch(globalThis.location.search);
    };
    globalThis.addEventListener('popstate', onPopState);
    return () => globalThis.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (to: string, query?: Record<string, string>) => {
    let url = to;
    if (query) {
      const params = new URLSearchParams(query).toString();
      url += params ? `?${params}` : '';
    }
    globalThis.history.pushState({}, '', url);
    setPath(to);
    setSearch(globalThis.location.search);
  };

  const query = useMemo(() => Object.fromEntries(new URLSearchParams(search)), [search]);

  return { path, query, navigate };
}
