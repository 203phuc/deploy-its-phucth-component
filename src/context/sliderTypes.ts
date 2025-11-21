export interface SlideData {
  id: number;
  category: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  imageUrl: string;
  imageAlt?: string;
  textColor?: 'white' | 'black-900';
}

export interface SliderState {
  desktopSlides: SlideData[];
  mobileImageSlides: SlideData[];
  mobileTextSlides: SlideData[];
  isLoading: boolean;
  error: Error | null;
}

// Example of what backend might send
export interface BackendSlideResponse {
  slides: SlideData[];
}
