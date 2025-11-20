import { useScreenSize } from '@pages/CustomHook/getScreenSizeHook';

export function useIsMobile(breakpoint = 400): boolean {
  const { width } = useScreenSize();
  return width <= breakpoint;
}
