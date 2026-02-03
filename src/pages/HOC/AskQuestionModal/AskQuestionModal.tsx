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
import { useCallback, useEffect, useState } from 'react';
import { onSmallScreenChange } from 'src/util/mediaQueries';

interface AskQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (question: { question: string; author: string; email: string; images?: string[] }) => void;
}

const useAskQuestionModal = () => {
  const [question, setQuestion] = useState('');
  const [author, setAuthor] = useState('');
  const [email, setEmail] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    return onSmallScreenChange(setIsMobile);
  }, []);

  const resetForm = () => {
    setQuestion('');
    setAuthor('');
    setEmail('');
    setImages([]);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const handleLoad = (resolve: (value: string) => void) => (e: ProgressEvent<FileReader>) => {
      if (e.target?.result) {
        resolve(e.target.result as string);
      }
    };

    const createFileReader = (file: File): Promise<string> => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = handleLoad(resolve);
        reader.readAsDataURL(file);
      });
    };

    const processAllFiles = async () => {
      const filePromises = Array.from(files).map(createFileReader);
      const newImages = await Promise.all(filePromises);
      setImages((prev) => [...prev, ...newImages]);
    };

    void processAllFiles();
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    question,
    author,
    email,
    isMobile,
    images,
    setQuestion,
    setAuthor,
    setEmail,
    setImages,
    handleImageUpload,
    removeImage,
    resetForm,
  };
};

const ModalHeader = ({ isMobile, onClose }: { isMobile: boolean; onClose: () => void }) => (
  <>
    <Flex justify="space-between" align="center">
      <Heading font="spaceGrotesk" size={isMobile ? 'h6' : 'h5'} weight="semiBold" color="black-900">
        Leave a question
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
  question,
  images,
  onAuthorChange,
  onEmailChange,
  onQuestionChange,
  onRemoveImage,
}: {
  isMobile: boolean;
  author: string;
  email: string;
  question: string;
  images: string[];
  onAuthorChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onQuestionChange: (value: string) => void;
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
      value={question}
      onChange={(e) => onQuestionChange(e.target.value)}
      placeholder="Your Question *"
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
        onClick={() => document.getElementById('question-photo-upload')?.click()}
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

export const AskQuestionModal = ({ isOpen, onClose, onSubmit }: AskQuestionModalProps) => {
  const {
    question,
    author,
    email,
    isMobile,
    images,
    setQuestion,
    setAuthor,
    setEmail,
    handleImageUpload,
    removeImage,
    resetForm,
  } = useAskQuestionModal();

  const handleSubmit = useCallback(() => {
    if (!question.trim() || !author.trim() || !email.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    onSubmit({
      question: question.trim(),
      author: author.trim(),
      email: email.trim(),
      images,
    });

    resetForm();
    onClose();
  }, [question, author, email, images, onSubmit, onClose, resetForm]);

  if (!isOpen) return null;

  return (
    <>
      <input
        type="file"
        id="question-photo-upload"
        multiple
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
        aria-label="Upload photos"
        title="Upload photos"
      />
      <Overlay isOpen={isOpen} onClose={onClose} zIndex={1000}>
        <Section w={isMobile ? 343 : 652} px={isMobile ? 16 : 32} py={isMobile ? 24 : 32} bgColor="white">
          <ModalHeader isMobile={isMobile} onClose={onClose} />
          <FormFields
            isMobile={isMobile}
            author={author}
            email={email}
            question={question}
            images={images}
            onAuthorChange={setAuthor}
            onEmailChange={setEmail}
            onQuestionChange={setQuestion}
            onRemoveImage={removeImage}
          />
          <SubmitButtons isMobile={isMobile} onAddPhotos={handleImageUpload} onSubmit={handleSubmit} />
        </Section>
      </Overlay>
    </>
  );
};
