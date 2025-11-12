// Backwards-compatible re-exports
export { RouterProvider, useSharedRouter } from '../../context/RouterContext';
export { useRouter } from './useRouter';

// NOTE: The hook implementation now lives in `src/pages/CustomHook/useRouter.tsx`.
// The React context/provider is in `src/context/RouterContext.tsx`.
// This file re-exports both so existing imports continue to work.
