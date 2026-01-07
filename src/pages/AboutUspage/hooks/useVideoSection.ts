export interface VideoSectionProps {
  isMobile: boolean;
}

export interface VideoData {
  title: string;
  description: string;
  buttonText: string;
  video: {
    src: string;
    poster: string;
    size: 'specialPage';
  };
}

const videoData: VideoData = {
  title: 'Feature Title',
  description:
    'Take a glimpse into our meticulous crafting process where every detail matters and quality is paramount.',
  buttonText: 'See collection',
  video: {
    src: 'https://res.cloudinary.com/dnuicbze9/video/upload/v1766379463/sample-video.mp4',
    poster: 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766383908/videoHome_bzkzdh.png',
    size: 'specialPage',
  },
};

export const useVideoSection = () => {
  return {
    videoData,
  };
};
