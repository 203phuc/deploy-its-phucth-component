import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading/Heading';
import { Icons } from '@components/Atom/Icons';
import { Input } from '@components/Atom/Input';
import type { InputChangeEvent } from '@components/Atom/Input/type';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text/Text';
import { useSharedRouter } from '@context/RouterContext';
import type { KeyboardEvent } from 'react';
import { useState } from 'react';
import { PageHeader } from './PageHeader';

interface SearchNoResultsProps {
  searchQuery: string;
  isMobile: boolean;
}

export const SearchNoResults = ({ searchQuery, isMobile }: SearchNoResultsProps) => {
  const [newSearchValue, setNewSearchValue] = useState('');
  const { navigate } = useSharedRouter();

  const handleNewSearch = (value: string) => {
    if (value.trim()) {
      navigate('/search-product-page', { q: value });
    }
  };

  const handleInputChange = (e: InputChangeEvent) => {
    setNewSearchValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleNewSearch(newSearchValue);
    }
  };

  return (
    <Flex direction="column">
      <PageHeader searchQuery={searchQuery} isMobile={isMobile} />

      <Section w="100%" pt={isMobile ? 80 : 120} pb={isMobile ? 160 : 250} px={isMobile ? 16 : 0}>
        <Flex width="100%" direction="column" align="center" gap={12}>
          <Heading
            font="spaceGrotesk"
            size={isMobile ? 'h6' : 'h5'}
            align="center"
            color="black-900"
            weight="moderate"
          >
            Nothing Found!
          </Heading>

          <Text align="center" size={isMobile ? 'medium' : 'large'}>
            Nothing matched your search terms. Please try again with different keywords.
          </Text>

          <Section w="100%" pt={20}>
            <Flex
              width="100%"
              justify="center"
              gap={16}
              direction={isMobile ? 'column' : 'row'}
              align="center"
            >
              <Section w={isMobile ? '100%' : 450}>
                <Input
                  iconStart={<Icons iconName="SearchIcon" iconSize={28} />}
                  value={newSearchValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Search products..."
                  variant="solid"
                  size={isMobile ? 'large' : 'xlarge'}
                  width="100%"
                  color="white"
                />
              </Section>

              <Button
                roundness="round"
                size="medium"
                onClick={() => handleNewSearch(newSearchValue)}
                disabled={!newSearchValue.trim()}
                fullWidth={isMobile}
              >
                Search
              </Button>
            </Flex>
          </Section>
        </Flex>
      </Section>
    </Flex>
  );
};
