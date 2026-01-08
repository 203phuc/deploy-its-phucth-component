import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons';
import { Input } from '@components/Atom/Input';
import type { InputChangeEvent } from '@components/Atom/Input/type';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section/Section';
import { Text } from '@components/Atom/Text';
import { Dropdown } from '@components/Molecule/Dropdown';
import { useSharedRouter } from '@context/RouterContext';
import { useEffect, useMemo, useRef, useState } from 'react';
import { products as searchProducts } from '../../../SearchProductpage/mockData/products';
import { products as shopProducts } from '../../../Shoppage/mockData/products';

interface IconBlockProps {
  cartItem?: number;
  setFlyoutCartOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IconBlock = ({ cartItem, setFlyoutCartOpen }: IconBlockProps) => {
  const [background, setBackground] = useState('transparent');
  const [searchInput, setSearchInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { navigate } = useSharedRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Combine all products and get unique titles
  const allProducts = useMemo(() => {
    const combined = [...shopProducts, ...searchProducts];
    const uniqueTitles = Array.from(
      new Set(combined.map((p) => p.title).filter((title): title is string => !!title)),
    );
    return uniqueTitles.map((title) => ({ label: title, value: title }));
  }, []);

  // Filter suggestions based on search value
  const suggestions = useMemo(() => {
    if (!searchValue.trim()) return [];
    const lowerSearch = searchValue.toLowerCase();
    return allProducts.filter((product) => product.label?.toLowerCase().includes(lowerSearch)).slice(0, 5); // Limit to 5 suggestions
  }, [searchValue, allProducts]);

  // Handle search navigation
  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate('/search-product-page', { q: query });
      setSearchInput(false);
      setSearchValue('');
      setShowSuggestions(false);
    }
  };

  // Handle input change
  const handleInputChange = (e: InputChangeEvent) => {
    const value = e.target.value;
    setSearchValue(value);
    setShowSuggestions(value.trim().length > 0);
  };

  // Handle Enter key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(searchValue);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  // Handle input blur with delay to allow dropdown selection
  const handleInputBlur = () => {
    // Clear any existing timeout
    if (blurTimeoutRef.current) {
      clearTimeout(blurTimeoutRef.current);
    }

    // Delay blur handling to allow dropdown selection to complete
    blurTimeoutRef.current = setTimeout(() => {
      setSearchInput(false);
      setSearchValue('');
      setShowSuggestions(false);
      blurTimeoutRef.current = null;
    }, 150);
  };

  // Handle suggestion select
  const handleSuggestionSelect = (value: string | number) => {
    // Clear blur timeout when selecting to prevent closing
    if (blurTimeoutRef.current) {
      clearTimeout(blurTimeoutRef.current);
      blurTimeoutRef.current = null;
    }
    handleSearch(String(value));
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    if (showSuggestions) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showSuggestions]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Position position="relative">
      <Flex align="center" justify="end" gap={20} width={194}>
        {searchInput ? (
          <Position position="absolute" left={-218} zIndex={100}>
            <div ref={dropdownRef}>
              <Input
                ref={inputRef}
                iconEnd={<Icons iconName="SearchIcon" iconSize={28} />}
                variant="line"
                size="small"
                bgColor="transparent"
                placeholder="Search products..."
                placeholderColor="gray"
                value={searchValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={() => setShowSuggestions(searchValue.trim().length > 0)}
                onBlur={handleInputBlur}
              />
              {showSuggestions && suggestions.length > 0 && (
                <Position position="absolute" top="100%" left={0} right={0}>
                  <Section mt={4}>
                    <Dropdown
                      options={suggestions}
                      isOpen={true}
                      onClose={() => setShowSuggestions(false)}
                      onSelect={handleSuggestionSelect}
                      disabled={false}
                      variant="default"
                      direction="down"
                      align="left"
                    />
                  </Section>
                </Position>
              )}
            </div>
          </Position>
        ) : (
          <Icons iconSize={28} iconName="SearchIcon" box onClick={() => setSearchInput(true)} />
        )}
        <Icons iconSize={28} iconName="UserIcon" />
        <Icons iconSize={28} iconName="HeartIcon" />
        <Section
          bgColor={background}
          onClick={() => {
            if (!setFlyoutCartOpen) return;
            setFlyoutCartOpen((prev) => !prev);
          }}
          onMouseEnter={() => setBackground('gray')}
          onMouseLeave={() => setBackground('transparent')}
        >
          <Flex align="center" gap={2}>
            <Icons iconSize={28} iconName="BagIcon" />
            {cartItem ? (
              <Section w={20} bgColor="black" h={20} borderRadius="100%">
                <Flex width="100%" direction="row" height="100%" align="center" justify="center">
                  <Text font="inter" color="white" weight="bold" size="xsmall">
                    {cartItem}
                  </Text>
                </Flex>
              </Section>
            ) : null}
          </Flex>
        </Section>
      </Flex>
    </Position>
  );
};
