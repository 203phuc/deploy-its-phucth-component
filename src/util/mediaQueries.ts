export const onSmallScreenChange = (callback: (isSmall: boolean) => void) => {
  const mq = globalThis.matchMedia('(max-width: 600px)');

  const handler = (e: MediaQueryListEvent) => {
    callback(e.matches);
  };

  // initial check
  callback(mq.matches);

  mq.addEventListener('change', handler);

  // 🔑 cleanup
  return () => {
    mq.removeEventListener('change', handler);
  };
};
