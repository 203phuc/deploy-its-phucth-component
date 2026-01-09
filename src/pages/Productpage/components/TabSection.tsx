import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { Rating } from '@components/Molecule/Rating';
import { useCallback, useState } from 'react';
import { Question, Review } from '../types';
import { ReviewCard } from './ReviewCard';

interface TabSectionProps {
  description: string;
  specifications: Record<string, string>;
  reviews: Review[];
  questions: Question[];
  reviewCount: number;
}

export const TabSection = ({
  description,
  specifications,
  reviews,
  questions,
  reviewCount,
}: TabSectionProps) => {
  const [activeTab, setActiveTab] = useState<'description' | 'additional-info' | 'reviews' | 'questions'>(
    'description',
  );

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'additional-info', label: 'Additional Information' },
    { id: 'reviews', label: `Reviews (${reviewCount})` },
    { id: 'questions', label: `Questions (${questions.length})` },
  ] as const;

  const handleTabClick = useCallback((id: typeof activeTab) => {
    setActiveTab(id);
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div>
            <Section pb={32}>
              <Text size="large">{description}</Text>
            </Section>
            <Section>
              <Heading font="spaceGrotesk" size="h7" weight="moderate" color="black-900">
                Information
              </Heading>
              <Section pt={16}>
                <Flex direction="column" gap={8}>
                  <Text>• Size: {specifications.Size}</Text>
                  <Text>• Material: {specifications.Material}</Text>
                  <Text>• Color: {specifications.Color}</Text>
                  <Text>• Weight: {specifications.Weight}</Text>
                </Flex>
              </Section>
            </Section>
          </div>
        );
      case 'additional-info':
        return (
          <Flex direction="row">
            <Flex gap={32} direction="column" width={120}>
              {Object.entries(specifications).map(([key]) => (
                <div key={key}>
                  <Text>
                    <strong>{key.toUpperCase()}:</strong>
                  </Text>
                </div>
              ))}
            </Flex>
            <Flex gap={32} direction="column">
              {Object.entries(specifications).map(([key, value]) => (
                <div key={key}>
                  <Text>{value}</Text>
                </div>
              ))}
            </Flex>
          </Flex>
        );
      case 'reviews':
        return (
          <Flex direction="column">
            <Flex direction="column" gap={32}>
              <Heading size="h5" weight="moderate" font="spaceGrotesk" color="black-900">
                Customer Reviews
              </Heading>
              <Rating rating={4} size={20} />
            </Flex>

            <Flex direction="column">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </Flex>
          </Flex>
        );
      case 'questions':
        return (
          <div>
            {questions.map((qa) => (
              <div key={qa.id}>
                <div>
                  <strong>Q:</strong> {qa.question}
                </div>
                <div>
                  <strong>A:</strong> {qa.answer}
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Section w={1108} my={52} mx={166}>
      <Position position="relative">
        <Position position="absolute" zIndex={-1} left={0} right={0} bottom={0}>
          <Section bgColor="var(--color-black-200)" w={1108} h={1}></Section>
        </Position>
        <Section overflow="auto">
          <Flex width="100%" gap={80}>
            {tabs.map(({ id, label }) => {
              const isActive = activeTab === id;

              return (
                <Flex
                  key={id}
                  onClick={() => handleTabClick(id)}
                  style={{ whiteSpace: 'nowrap', cursor: 'pointer' }}
                >
                  <Section>
                    <Heading
                      size="h7"
                      font="spaceGrotesk"
                      weight={isActive ? 'semiBold' : 'regular'}
                      color={isActive ? 'black-900' : 'black-600'}
                    >
                      {label}
                    </Heading>
                    <Section
                      mt={7}
                      h={1}
                      w="100%"
                      bgColor={isActive ? 'var(--color-black-900)' : 'transparent'}
                    />
                  </Section>
                </Flex>
              );
            })}
          </Flex>
        </Section>
      </Position>
      <Section pt={32}>{renderTabContent()}</Section>
    </Section>
  );
};
