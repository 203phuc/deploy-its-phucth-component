import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import Icons from '@components/Atom/Icons';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Input } from '@components/Atom/Input';
import { Overlay } from '@components/Atom/Overlay';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { Rating } from '@components/Molecule/Rating';
import { useCallback } from 'react';
import { useWriteReviewModal } from '../hooks/useWriteReviewModal';

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (review: {
    rating: number;
    comment: string;
    author: string;
    email: string;
    images?: string[];
  }) => void;
}

const ModalHeader = ({ isMobile, onClose }: { isMobile: boolean; onClose: () => void }) => (
  <>
    <Flex justify="space-between" align="center">
      <Heading size={isMobile ? 'h6' : 'h5'} weight="semiBold" color="black-900">
        Leave a review
      </Heading>
      <Button variant="text" size="small" onClick={onClose}>
        <Icons iconName="CloseIcon" iconSize={isMobile ? 32 : 40} />
      </Button>
    </Flex>
    <Section pt={isMobile ? 12 : 16}>
      <Text color="black-600" size={isMobile ? 'xsmall' : 'small'}>
        Your email address will not be published. Required fields are marked *
      </Text>
    </Section>
  </>
);

const RatingSection = ({
  isMobile,
  rating,
  onRatingChange,
}: {
  isMobile: boolean;
  rating: number;
  onRatingChange: (value: number) => void;
}) => (
  <Section pt={isMobile ? 24 : 32} pb={isMobile ? 16 : 24}>
    <Flex direction={isMobile ? 'column' : 'row'} gap={8} align={isMobile ? 'start' : 'center'}>
      <Text size={isMobile ? 'small' : 'medium'} color="black-900">
        Your Rating *
      </Text>
      <Rating
        rating={rating as 0 | 1 | 2 | 3 | 4 | 5 | undefined}
        size={isMobile ? 16 : 20}
        onRatingChange={onRatingChange}
      />
    </Flex>
  </Section>
);

const ImagePreview = ({
  images,
  isMobile,
  onRemoveImage,
}: {
  images: string[];
  isMobile: boolean;
  onRemoveImage: (index: number) => void;
}) => {
  if (images.length === 0) return null;

  return (
    <Section pt={16} pb={8}>
      <Flex direction="row" gap={8} wrap="wrap">
        {images.map((image, index) => (
          <Section
            key={index}
            w={isMobile ? 77 : 128}
            h={isMobile ? 102 : 170}
            borderRadius={4}
            overflow="hidden"
            border="1px solid #e5e7eb"
          >
            <Position position="relative">
              <Section
                key={index}
                w={isMobile ? 77 : 128}
                h={isMobile ? 102 : 170}
                borderRadius={4}
                overflow="hidden"
                border="1px solid #e5e7eb"
              >
                <Section w="100%" h="100%">
                  <ImagePlaceholder src={image} alt={`Preview ${index + 1}`} objectFit="cover" size="full" />
                </Section>
                <Position position="absolute" top={8} right={8}>
                  <Button variant="text" size="small" onClick={() => onRemoveImage(index)}>
                    <Icons iconName="CloseIcon" iconSize={12} />
                  </Button>
                </Position>
              </Section>
            </Position>
          </Section>
        ))}
      </Flex>
    </Section>
  );
};

const FormFields = ({
  isMobile,
  author,
  email,
  comment,
  images,
  onAuthorChange,
  onEmailChange,
  onCommentChange,
  onRemoveImage,
}: {
  isMobile: boolean;
  author: string;
  email: string;
  comment: string;
  images: string[];
  onAuthorChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onCommentChange: (value: string) => void;
  onRemoveImage: (index: number) => void;
}) => (
  <Flex direction="column" gap={isMobile ? 12 : 16}>
    <Input
      textSize={isMobile ? 'small' : 'medium'}
      type="text"
      variant="line"
      value={author}
      onChange={(e) => onAuthorChange(e.target.value)}
      placeholder="Fullname *"
      size={isMobile ? 'large' : 'xlarge'}
    />
    <Input
      textSize={isMobile ? 'small' : 'medium'}
      type="text"
      variant="line"
      value={email}
      onChange={(e) => onEmailChange(e.target.value)}
      placeholder="Email address *"
      size={isMobile ? 'large' : 'xlarge'}
    />
    <Input
      textSize={isMobile ? 'small' : 'medium'}
      rows={isMobile ? 4 : 5}
      as="textarea"
      variant="line"
      value={comment}
      onChange={(e) => onCommentChange(e.target.value)}
      placeholder="Your Review *"
      size={isMobile ? 'large' : 'xlarge'}
    />
    <ImagePreview images={images} isMobile={isMobile} onRemoveImage={onRemoveImage} />
  </Flex>
);

const SubmitButtons = ({
  isMobile,
  onSubmit,
}: {
  isMobile: boolean;
  onAddPhotos: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}) => (
  <Section bgColor="white" pt={isMobile ? 24 : 32}>
    <Flex direction={isMobile ? 'column' : 'row'} justify={isMobile ? 'center' : 'end'} gap={12}>
      <Button
        variant="solidGray"
        roundness="round"
        size={isMobile ? 'small' : 'medium'}
        onClick={() => document.getElementById('photo-upload')?.click()}
        fullWidth={isMobile}
      >
        <Icons iconName="PhotoIcon" iconSize={isMobile ? 20 : 24} /> Add Photos
      </Button>
      <Button
        variant="solidBlack"
        roundness="round"
        size={isMobile ? 'small' : 'medium'}
        onClick={onSubmit}
        fullWidth={isMobile}
      >
        Submit
      </Button>
    </Flex>
  </Section>
);

export const WriteReviewModal = ({ isOpen, onClose, onSubmit }: WriteReviewModalProps) => {
  const {
    rating,
    comment,
    author,
    email,
    isMobile,
    images,
    setRating,
    setComment,
    setAuthor,
    setEmail,
    handleImageUpload,
    removeImage,
    resetForm,
  } = useWriteReviewModal();

  const handleSubmit = useCallback(() => {
    if (rating === 0 || !comment.trim() || !author.trim() || !email.trim()) {
      alert('Please fill in all fields and select a rating');
      return;
    }

    onSubmit({
      rating,
      comment: comment.trim(),
      author: author.trim(),
      email: email.trim(),
      images,
    });

    resetForm();
    onClose();
  }, [rating, comment, author, email, images, onSubmit, onClose, resetForm]);

  if (!isOpen) return null;

  return (
    <Overlay isOpen={isOpen} onClose={onClose} zIndex={1000}>
      <Section w={isMobile ? 343 : 652} px={isMobile ? 16 : 32} py={isMobile ? 24 : 32} bgColor="white">
        <ModalHeader isMobile={isMobile} onClose={onClose} />
        <RatingSection isMobile={isMobile} rating={rating} onRatingChange={setRating} />
        <FormFields
          isMobile={isMobile}
          author={author}
          email={email}
          comment={comment}
          images={images}
          onAuthorChange={setAuthor}
          onEmailChange={setEmail}
          onCommentChange={setComment}
          onRemoveImage={removeImage}
        />
        <SubmitButtons isMobile={isMobile} onAddPhotos={handleImageUpload} onSubmit={handleSubmit} />
      </Section>
    </Overlay>
  );
};
