export interface ContentSectionProps {
  isMobile: boolean;
}

export interface ContentData {
  tagline: string;
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
}

const contentData: ContentData = {
  tagline: 'Tagline',
  title: 'Product made with love',
  description:
    'Morning light spills through a half-open window while a kettle clicks itself off in the kitchen, forgotten for a moment because a thought wandered too far. Somewhere outside, a motorbike coughs to life, arguing with birds that never seem to care about schedules.',
  images: [
    {
      src: 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766379463/hompage2_pfkexw.png',
      alt: 'Content Image 1',
    },
    {
      src: 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766379463/hompage2_pfkexw.png',
      alt: 'Content Image 2',
    },
  ],
};

export const useContentSection = () => {
  return {
    contentData,
  };
};
