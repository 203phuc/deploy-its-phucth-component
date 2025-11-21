import { useState, useLayoutEffect } from 'react';

export function useScreenSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useLayoutEffect(() => {
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}
