export interface ImageRightSectionProps {
  isMobile: boolean;
}

export interface ImageRightData {
  tagline: string;
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
    position: {
      bottom?: number;
      top?: number;
      left?: number;
      right?: number;
      zIndex?: number;
    };
    dimensions: {
      width: number;
      height: number;
    };
    mobileDimensions?: {
      width: number;
      height: number;
    };
  }[];
}

const imageRightData: ImageRightData = {
  tagline: 'TRENDING',
  title: 'Crafted with excellence',
  description:
    'Every piece is carefully selected and crafted to meet the highest standards of quality and design excellence. Our commitment to perfection ensures that each item not only meets but exceeds your expectations.',
  images: [
    {
      src: 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766379463/hompage2_pfkexw.png',
      alt: 'Quality Image 1',
      position: {
        bottom: 0,
        zIndex: 1,
        left: 0,
      },
      dimensions: {
        width: 337,
        height: 408,
      },
      mobileDimensions: {
        width: 146,
        height: 177,
      },
    },
    {
      src: 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766379462/homepage1_omytqz.png',
      alt: 'Quality Image 2',
      position: {
        top: 0,
        right: 0,
      },
      dimensions: {
        width: 570,
        height: 570,
      },
      mobileDimensions: {
        width: 248,
        height: 248,
      },
    },
  ],
};

export const useImageRightSection = () => {
  return {
    imageRightData,
  };
};
