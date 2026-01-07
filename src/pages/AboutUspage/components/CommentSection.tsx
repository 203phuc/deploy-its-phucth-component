import { Button } from '@components/Atom/Button/Button';
import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons/Icons';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder/ImagePlaceholder';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text/Text';
import { Rating } from '@components/Molecule/Rating/Rating';
import React from 'react';
import { CommentSectionProps, useCommentSection } from '../hooks/useCommentSection';

export const CommentSection: React.FC<CommentSectionProps> = ({ isMobile }) => {
  const { currentComment, handleNextComment, handlePrevComment } = useCommentSection();

  const renderStars = (rating: number) => {
    return <Rating rating={rating as 0 | 1 | 2 | 3 | 4 | 5} size={16} noFillColor="black-400" />;
  };

  if (isMobile) {
    return (
      <Section px={16} py={48} w="100%" bgColor="white">
        <Flex direction="column" align="center" gap={24}>
          {/* Avatar, name and rating */}
          <Flex direction="row" align="center" gap={12}>
            <Section w={60} h={60} borderRadius="50%" overflow="hidden">
              <ImagePlaceholder src={currentComment.avatar} alt={currentComment.name} size="full" />
            </Section>
            <Flex direction="column" gap={4}>
              <Text font="spaceGrotesk" size="medium" weight="semiBold" color="black-900">
                {currentComment.name}
              </Text>
              {renderStars(currentComment.rating)}
            </Flex>
          </Flex>

          {/* Comment with quote */}
          <Section w={343}>
            <Flex direction="column" align="center" gap={16}>
              <Text font="inter" size="small" weight="semiBold" color="black-900" align="center">
                {currentComment.comment}
              </Text>
            </Flex>
          </Section>

          {/* Navigation button */}
          <Flex direction="row" align="center" gap={24}>
            <Button variant="text">
              <Section
                w={44}
                h={44}
                bgColor="var(--color-black-100)"
                onClick={handlePrevComment}
                borderRadius="50%"
                overflow="hidden"
              >
                <Flex height="100%" align="center" justify="center">
                  <Icons iconName="ArrowLeftIcon" iconSize={20} />
                </Flex>
              </Section>
            </Button>
            <Button variant="text">
              <Section
                w={44}
                h={44}
                bgColor="var(--color-black-100)"
                onClick={handleNextComment}
                borderRadius="50%"
                overflow="hidden"
              >
                <Flex height="100%" align="center" justify="center">
                  <Icons iconName="ArrowRightIcon" iconSize={20} />
                </Flex>
              </Section>
            </Button>
          </Flex>
        </Flex>
      </Section>
    );
  }

  return (
    <Section px={52} py={52} w="100%" bgColor="white">
      <Flex direction="column" align="center" gap={48}>
        {/* Avatar, name and rating */}
        <Flex direction="row" align="center" gap={24}>
          <Section w={60} h={60} borderRadius="50%" overflow="hidden">
            <ImagePlaceholder src={currentComment.avatar} alt={currentComment.name} size="full" />
          </Section>
          <Flex direction="column" gap={8}>
            <Text font="spaceGrotesk" size="large" weight="semiBold" color="black-900">
              {currentComment.name}
            </Text>
            {renderStars(currentComment.rating)}
          </Flex>
        </Flex>

        {/* Comment with quote */}
        <Section w={800}>
          <Flex direction="column" align="center" gap={20}>
            <Text font="inter" size="4xlarge" weight="semiBold" color="black-900" align="center">
              {currentComment.comment}
            </Text>
          </Flex>
        </Section>

        {/* Navigation button */}
        <Flex direction="row" align="center" gap={24}>
          <Button variant="text">
            <Section
              w={44}
              h={44}
              bgColor="var(--color-black-100)"
              onClick={handlePrevComment}
              borderRadius="50%"
              overflow="hidden"
            >
              <Flex height="100%" align="center" justify="center" gap={24}>
                <Icons iconName="ArrowLeftIcon" iconSize={20} />
              </Flex>
            </Section>
          </Button>
          <Button variant="text">
            <Section
              w={44}
              h={44}
              bgColor="var(--color-black-100)"
              onClick={handleNextComment}
              borderRadius="50%"
              overflow="hidden"
            >
              <Flex height="100%" align="center" justify="center" gap={24}>
                <Icons iconName="ArrowRightIcon" iconSize={20} />
              </Flex>
            </Section>
          </Button>
        </Flex>
      </Flex>
    </Section>
  );
};
