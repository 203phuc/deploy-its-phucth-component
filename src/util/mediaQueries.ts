export const onSmallScreenChange = (callback: (isSmall: boolean) => void) => {
  const mq = window.matchMedia('(max-width: 600px)');
  callback(mq.matches); // initial check
  mq.addEventListener('change', (e) => callback(e.matches));
};
