import { useEffect, useMemo, useRef, useState } from 'react';
import type { InputChangeEvent } from '@components/Atom/Input/type';
import { useSharedRouter } from '@context/RouterContext';
import { products as searchProducts } from '../../../../SearchProductpage/mockData/products';
import { products as shopProducts } from '../../../../Shoppage/mockData/products';

export const useIconBlock = () => {
  const [background, setBackground] = useState('transparent');
  const [searchInput, setSearchInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const { navigate } = useSharedRouter();

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const allProducts = useMemo(() => {
    const combined = [...shopProducts, ...searchProducts];
    const uniqueTitles = Array.from(new Set(combined.map((p) => p.title).filter(Boolean)));
    return uniqueTitles.map((title) => ({ label: title!, value: title! }));
  }, []);

  const suggestions = useMemo(() => {
    if (!searchValue.trim()) return [];
    const lower = searchValue.toLowerCase();
    return allProducts.filter((p) => p.label.toLowerCase().includes(lower)).slice(0, 5);
  }, [searchValue, allProducts]);

  const handleSearch = (query: string) => {
    if (!query.trim()) return;
    navigate('/search-product-page', { q: query });
    setSearchInput(false);
    setSearchValue('');
    setShowSuggestions(false);
  };

  const handleInputChange = (e: InputChangeEvent) => {
    const value = e.target.value;
    setSearchValue(value);
    setShowSuggestions(!!value.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch(searchValue);
    if (e.key === 'Escape') setShowSuggestions(false);
  };

  const handleInputBlur = () => {
    if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current);
    blurTimeoutRef.current = setTimeout(() => {
      setSearchInput(false);
      setSearchValue('');
      setShowSuggestions(false);
      blurTimeoutRef.current = null;
    }, 150);
  };

  const handleSuggestionSelect = (value: string | number) => {
    if (blurTimeoutRef.current) {
      clearTimeout(blurTimeoutRef.current);
      blurTimeoutRef.current = null;
    }
    handleSearch(String(value));
  };

  useEffect(() => {
    if (!showSuggestions) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSuggestions]);

  useEffect(() => {
    return () => {
      if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current);
    };
  }, []);

  return {
    // state
    background,
    searchInput,
    searchValue,
    showSuggestions,
    suggestions,

    // refs
    inputRef,
    dropdownRef,

    // setters
    setBackground,
    setSearchInput,
    setShowSuggestions,

    // handlers
    handleInputChange,
    handleKeyDown,
    handleInputBlur,
    handleSuggestionSelect,
  };
};
