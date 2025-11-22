import { useState } from 'react';
import { imagePlaceholderCva } from './style';
import type { ImagePlaceholderProps } from './type';

export const ImagePlaceholder = ({
  size = 's1',
  gap = 'none',
  className = '',
  children,
  src,
  alt,
  fallbackText,
  objectFit = 'cover',
  objectPosition = 'center',
  ...rest
}: ImagePlaceholderProps) => {
  const [hasError, setHasError] = useState(false);

  // Combine CVA classes with user className
  const classes = [imagePlaceholderCva({ size, gap, objectFit, objectPosition }), className]
    .filter(Boolean)
    .join(' ');

  // Show fallback if error or no src
  if (hasError || !src) {
    return (
      <div
        className={`${classes} flex items-center justify-center bg-gray-100 text-gray-500`}
        role="img"
        aria-label={alt}
        {...rest}
      >
        {fallbackText ?? children ?? 'Image'}
      </div>
    );
  }

  // Render image
  return <img src={src} alt={alt} className={classes} onError={() => setHasError(true)} {...rest} />;
};

export default ImagePlaceholder;
