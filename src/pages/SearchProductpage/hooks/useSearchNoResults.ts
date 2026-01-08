import type { InputChangeEvent } from '@components/Atom/Input/type';
import { useSharedRouter } from '@context/RouterContext';
import type { KeyboardEvent } from 'react';
import { useCallback, useState } from 'react';

export const useSearchNoResults = () => {
  const [newSearchValue, setNewSearchValue] = useState('');
  const { navigate } = useSharedRouter();

  const handleNewSearch = useCallback(
    (value: string) => {
      if (value.trim()) {
        navigate('/search-product-page', { q: value });
      }
    },
    [navigate],
  );

  const handleInputChange = useCallback((e: InputChangeEvent) => {
    setNewSearchValue(e.target.value);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleNewSearch(newSearchValue);
      }
    },
    [handleNewSearch, newSearchValue],
  );

  const canSubmit = newSearchValue.trim().length > 0;

  return {
    newSearchValue,
    setNewSearchValue,
    canSubmit,
    handleNewSearch,
    handleInputChange,
    handleKeyDown,
  };
};
