import { useEffect, useState } from 'react';
import { onSmallScreenChange } from 'src/util/mediaQueries';

export const useWriteReviewModal = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('');
  const [email, setEmail] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    return onSmallScreenChange(setIsMobile);
  }, []);

  const resetForm = () => {
    setRating(0);
    setComment('');
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
    setImages,
    handleImageUpload,
    removeImage,
    resetForm,
  };
};
