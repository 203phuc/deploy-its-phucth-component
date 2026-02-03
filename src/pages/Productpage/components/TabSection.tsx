import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import Icons from '@components/Atom/Icons';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { Rating } from '@components/Molecule/Rating';
import { AskQuestionModal } from '@pages/HOC/AskQuestionModal';
import { useQuestionSection } from '../hooks/useQuestionSection';
import { useReviewSection } from '../hooks/useReviewSection';
import { useTabState } from '../hooks/useTabState';
import { Question, Review } from '../types';
import { ReviewCard } from './ReviewCard';
import { WriteReviewModal } from './WriteReviewModal';

interface TabSectionProps {
  description: string;
  specifications: Record<string, string>;
  reviews: Review[];
  questions: Question[];
  reviewCount: number;
  isMobile: boolean;
}

interface RenderTabContentParams {
  tabId: 'description' | 'additional-info' | 'reviews' | 'questions';
  isMobileContent?: boolean;
}

export const TabSection = ({
  description,
  specifications,
  reviews,
  questions,
  reviewCount,
  isMobile,
}: TabSectionProps) => {
  const { activeTab, openDropdowns, handleTabClick, handleDropdownToggle } = useTabState();

  const {
    reviewsToShow,
    showAllReviews,
    isWriteReviewModalOpen,
    handleLoadMore,
    handleOpenWriteReviewModal,
    handleCloseWriteReviewModal,
  } = useReviewSection(reviews);

  const {
    questionsToShow,
    showAllQuestions,
    isAskQuestionOpen,
    handleLoadMoreQuestions,
    handleOpenAskQuestionModal,
    handleCloseAskQuestionModal,
  } = useQuestionSection(questions);

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'additional-info', label: 'Additional Information' },
    { id: 'reviews', label: `Reviews (${reviewCount})` },
    { id: 'questions', label: `Questions (${questions.length})` },
  ] as const;

  const renderDescriptionContent = (isMobileContent: boolean) => {
    const textSize = isMobileContent ? 'small' : 'medium';
    const sectionPadding = isMobileContent ? 16 : 24;

    return (
      <div>
        <Section pb={sectionPadding}>
          <Text size={isMobileContent ? 'medium' : 'large'}>{description}</Text>
        </Section>
        <Section>
          <Heading
            font="spaceGrotesk"
            size={isMobileContent ? 'h6' : 'h7'}
            weight="moderate"
            color="black-900"
          >
            Information
          </Heading>
          <Section pt={sectionPadding}>
            <Flex direction="column" gap={8}>
              <Text size={textSize}>• Size: {specifications.Size}</Text>
              <Text size={textSize}>• Material: {specifications.Material}</Text>
              <Text size={textSize}>• Color: {specifications.Color}</Text>
              <Text size={textSize}>• Weight: {specifications.Weight}</Text>
            </Flex>
          </Section>
        </Section>
      </div>
    );
  };

  const renderAdditionalInfoContent = (isMobileContent: boolean) => {
    const textSize = isMobileContent ? 'small' : 'medium';

    return (
      <Flex direction="row">
        <Flex gap={32} direction="column" width={isMobileContent ? 100 : 120}>
          {Object.entries(specifications).map(([key]) => (
            <div key={key}>
              <Text size={textSize}>
                <strong>{key.toUpperCase()}:</strong>
              </Text>
            </div>
          ))}
        </Flex>
        <Flex gap={32} direction="column">
          {Object.entries(specifications).map(([key, value]) => (
            <div key={key}>
              <Text size={textSize}>{value}</Text>
            </div>
          ))}
        </Flex>
      </Flex>
    );
  };

  const renderReviewsContent = (isMobileContent: boolean) => {
    const textSize = isMobileContent ? 'small' : 'medium';
    const headingSize = isMobileContent ? 'h6' : 'h5';
    const gapSize = isMobileContent ? 12 : 16;

    return (
      <Flex direction="column">
        <Flex direction="column" gap={isMobileContent ? 24 : 32}>
          <Heading size={headingSize} weight="moderate" font="spaceGrotesk" color="black-900">
            Customer Reviews
          </Heading>
          <Flex justify="space-between">
            <Flex align="center" gap={8}>
              <Rating rating={4} size={isMobileContent ? 16 : 20} />{' '}
              <Text size={textSize} color="black-600">
                ({reviewCount} reviews)
              </Text>
            </Flex>
            <Button
              roundness="sharp"
              variant="outlined"
              size={isMobileContent ? 'small' : 'medium'}
              onClick={handleOpenWriteReviewModal}
            >
              Write review
            </Button>
          </Flex>
        </Flex>

        <Flex direction="column" gap={gapSize}>
          {reviewsToShow.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </Flex>
        <Section mt={isMobileContent ? 24 : 32}>
          {reviews.length > 6 && !showAllReviews && (
            <Flex justify="center">
              <Button roundness="round" size={isMobileContent ? 'small' : 'medium'} onClick={handleLoadMore}>
                Load More
              </Button>
            </Flex>
          )}
        </Section>
      </Flex>
    );
  };

  const renderQuestionsContent = (isMobileContent: boolean) => {
    const textSize = isMobileContent ? 'small' : 'medium';
    const headingSize = isMobileContent ? 'h6' : 'h5';
    const sectionPadding = isMobileContent ? 16 : 24;
    const gapSize = isMobileContent ? 12 : 16;

    return (
      <Flex direction="column">
        <Flex direction="column" gap={isMobileContent ? 24 : 32}>
          <Heading size={headingSize} weight="moderate" font="spaceGrotesk" color="black-900">
            Customer Questions
          </Heading>
          <Flex justify="space-between">
            <Flex align="start" gap={8}>
              <Text size={textSize} color="black-600">
                ({questions.length} questions)
              </Text>
            </Flex>
            <Button
              roundness="sharp"
              variant="outlined"
              size={isMobileContent ? 'small' : 'medium'}
              onClick={handleOpenAskQuestionModal}
            >
              Ask question
            </Button>
          </Flex>
        </Flex>
        <Section py={isMobileContent ? 24 : 32}>
          <Flex direction="column" gap={gapSize}>
            {questionsToShow.map((qa) => (
              <>
                <Section bgColor="var(--color-black-300)" h={1} mb={isMobileContent ? 24 : 32}></Section>
                <Section key={qa.id} w="100%" p={sectionPadding} borderRadius={8}>
                  {/* First Section: Question */}
                  <Section mb={sectionPadding}>
                    <Flex gap={16}>
                      <Text size={textSize} color="black-900">
                        Question:
                      </Text>
                      <Text size={textSize} weight="semiBold" color="black-900">
                        {qa.question}
                      </Text>
                    </Flex>
                  </Section>

                  {/* Second Section: Question Images */}
                  {qa.id.includes('1') ||
                    (qa.id.includes('3') && (
                      <Section mt={16} w="100%" overflow="auto hidden">
                        <Section w="max-content">
                          <Flex gap={19}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <Section
                                key={num}
                                w={isMobileContent ? 80 : 128}
                                h={isMobileContent ? 100 : 170}
                                borderRadius={8}
                                bgColor="var(--color-gray-200)"
                              >
                                <ImagePlaceholder
                                  size="full"
                                  src={`https://picsum.photos/seed/review${num}/80/80.jpg`}
                                  alt={`Review image ${num}`}
                                />
                              </Section>
                            ))}
                          </Flex>
                        </Section>
                      </Section>
                    ))}

                  {/* Third Section: Answer */}
                  <Section mb={sectionPadding}>
                    <Flex gap={12}>
                      <Text size={textSize} color="black-900">
                        Answer:
                      </Text>
                      <Text size={textSize} color="black-900">
                        {qa.answer}
                      </Text>
                    </Flex>
                  </Section>

                  {/* Fourth Section: Author Name */}
                  <Section mb={sectionPadding}>
                    <Text size="small" color="black-600">
                      By {qa.answer ? 'Customer' : 'Pending Customer'}
                    </Text>
                  </Section>
                </Section>
              </>
            ))}
          </Flex>

          {questions.length > 2 && !showAllQuestions && (
            <Flex justify="center">
              <Button
                roundness="round"
                size={isMobileContent ? 'small' : 'medium'}
                onClick={handleLoadMoreQuestions}
              >
                Load More
              </Button>
            </Flex>
          )}
        </Section>
      </Flex>
    );
  };

  const renderTabContentForId = ({ tabId, isMobileContent = false }: RenderTabContentParams) => {
    switch (tabId) {
      case 'description':
        return renderDescriptionContent(isMobileContent);
      case 'additional-info':
        return renderAdditionalInfoContent(isMobileContent);
      case 'reviews':
        return renderReviewsContent(isMobileContent);
      case 'questions':
        return renderQuestionsContent(isMobileContent);
      default:
        return null;
    }
  };

  const renderTabContent = () => {
    return renderTabContentForId({ tabId: activeTab });
  };

  return (
    <Section w={isMobile ? 343 : 1108} my={isMobile ? 24 : 52} mx={isMobile ? 16 : 166}>
      {/* Mobile Individual Dropdowns */}
      {isMobile ? (
        <Flex direction="column" gap={16}>
          {tabs.map(({ id, label }) => {
            const isOpen = openDropdowns.has(id);

            return (
              <Section key={id} w="100%">
                <Section w="100%" p={16}>
                  <Flex justify="space-between" align="center" onClick={() => handleDropdownToggle(id)}>
                    <Text font="spaceGrotesk" size="special2" weight="moderate" color="black-900">
                      {label}
                    </Text>
                    <Icons
                      color="black"
                      iconSize={24}
                      iconName={isOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                    />
                  </Flex>
                  <Section
                    h={1}
                    mt={8}
                    w="100%"
                    bgColor={isOpen ? 'var(--color-black-900)' : 'var(--color-black-200)'}
                  />
                </Section>

                {isOpen && (
                  <Section w="100%" pt={16}>
                    {renderTabContentForId({ tabId: id, isMobileContent: true })}
                  </Section>
                )}
              </Section>
            );
          })}
        </Flex>
      ) : (
        /* Desktop Tabs */
        <>
          <Position position="relative">
            <Position position="absolute" zIndex={-1} left={0} right={0} bottom={0}>
              <Section bgColor="var(--color-black-200)" w={1108} h={1}></Section>
            </Position>
            <Section overflow="auto">
              <Flex width="100%" gap={80}>
                {tabs.map(({ id, label }) => {
                  const isActive = activeTab === id;

                  return (
                    <Flex key={id} onClick={() => handleTabClick(id)}>
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
        </>
      )}

      {/* Write Review Modal */}
      <WriteReviewModal isOpen={isWriteReviewModalOpen} onClose={handleCloseWriteReviewModal} />
      {/* Ask Question Modal */}
      <AskQuestionModal
        isOpen={isAskQuestionOpen}
        onClose={handleCloseAskQuestionModal}
        onSubmit={(question) => {
          console.log('Question submitted:', question);
          // Handle question submission logic here
        }}
      />
    </Section>
  );
};
