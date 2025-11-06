import { useState } from 'react';
import { imagePlaceholderCva } from './style';
import type { ImagePlaceholderProps } from './type';

export const ImagePlaceholder = ({
  size = 's1',
  className = '',
  children,
  src,
  alt,
  fallbackText,
  objectFit = 'cover',
  objectPosition = 'center',
  display = 'block',
  style,
  ...rest
}: ImagePlaceholderProps) => {
  const [hasError, setHasError] = useState(false);
  const classes = [imagePlaceholderCva({ size }), className].filter(Boolean).join(' ');

  // If there's an error or no src is provided, show the fallback
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

  // Otherwise, render the image
  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      onError={() => setHasError(true)}
      style={{
        objectFit,
        objectPosition,
        display,
        ...style, // allow user to override via props
      }}
      {...rest}
    />
  );
};

export default ImagePlaceholder;
