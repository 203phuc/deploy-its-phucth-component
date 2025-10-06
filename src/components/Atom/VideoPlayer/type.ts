export type TrackKind = 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';

export interface VideoTrack {
  src: string;
  srclang: string;
  label?: string;
  kind?: TrackKind;
  default?: boolean;
}

export type VideoPlayerSize = 'small' | 'medium' | 'large';

export interface VideoPlayerProps {
  /**
   * Source URL of the video media
   */
  src: string;
  /**
   * Additional class names merged after size preset; overrides width/height if provided
   */
  className?: string;
  /**
   * Poster image URL shown before playback starts
   */
  poster?: string;
  /**
   * Optional list of text tracks (captions/subtitles/chapters)
   */
  tracks?: VideoTrack[];
  /**
   * Visual size of the video container
   */
  size?: VideoPlayerSize;
  /**
   * Pixel size of the central play/close icon
   */
  iconSize?: number;
  /**
   * Pixel size of the icon's surrounding box
   */
  iconBoxSize?: number;
}
