import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons';
import { Input } from '@components/Atom/Input';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section/Section';
import { Text } from '@components/Atom/Text';
import { Dropdown } from '@components/Molecule/Dropdown';

import { useIconBlock } from './hooks/useIconBlock';
import type { IconBlockProps } from './types';

export const IconBlock = ({ cartItem, setFlyoutCartOpen, setLoginModalOpen }: IconBlockProps) => {
  const {
    background,
    searchInput,
    searchValue,
    showSuggestions,
    suggestions,
    inputRef,
    dropdownRef,
    setBackground,
    setSearchInput,
    setShowSuggestions,
    handleInputChange,
    handleKeyDown,
    handleInputBlur,
    handleSuggestionSelect,
  } = useIconBlock();
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
        <Icons iconSize={28} iconName="UserIcon" box onClick={() => setLoginModalOpen?.(true)} />
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
