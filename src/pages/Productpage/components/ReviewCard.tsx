import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import Rating from '@components/Molecule/Rating/Rating';
import { Review } from '../types';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Section w="100%" pt={32}>
      <Section bgColor="var(--color-black-300)" h={1} mb={32}></Section>
      {/* First Section: User Info and Rating */}
      <Flex align="start" width="100%">
        {/* Left side: Avatar, Name, Rating */}
        <Flex gap={16} align="center">
          {/* Avatar */}
          <Section w={78} h={78} borderRadius="50%" overflow="hidden" bgColor="var(--color-gray-200)">
            <ImagePlaceholder size="full" src={review.avatar ?? ''} alt={`${review.author} avatar`} />
          </Section>

          {/* Name and Rating */}

          {/* Right side: Date */}

          <Flex direction="column" gap={8}>
            <Flex align="center" justify="center" gap={8}>
              <Heading size="h7" weight="semiBold" color="black-900">
                {review.author}
              </Heading>
              <Text align="center" size="small" color="black-600">
                {review.date}
              </Text>
            </Flex>

            <Rating rating={review.rating as 0 | 1 | 2 | 3 | 4 | 5} size={16} />
          </Flex>
        </Flex>
      </Flex>

      {/* Second Section: Review Text */}
      <Section mt={12}>
        <Text size="medium" color="black-900">
          {review.comment}
        </Text>
      </Section>

      {/* Third Section: Review Images */}
      <Section mt={16} w="100%" overflow="auto hidden">
        <Section w="max-content">
          <Flex gap={19}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <Section key={num} w={128} h={170} borderRadius={8} bgColor="var(--color-gray-200)">
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
    </Section>
  );
};
