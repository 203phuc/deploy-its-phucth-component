import React, { useRef, useState } from 'react';
import { cn } from '../../../util/tailwindClass';
import { Icons } from '../Icons';
import { videoPlayerCva } from './style';
import { VideoPlayerProps } from './type';

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  className = '',
  poster,
  size = 'default',
  ...props
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      if (v.paused) {
        await v.play();
        setIsPlaying(true);
      } else {
        v.pause();
        setIsPlaying(false);
      }
    } catch {
      /* autoplay or play() error - ignore */
    }
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v?.duration || Number.isNaN(v.duration)) return;
    setProgress((v.currentTime / v.duration) * 100);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v?.duration || Number.isNaN(v.duration)) return;
    const value = Number(e.target.value);
    v.currentTime = (value / 100) * v.duration;
    setProgress(value);
  };

  return (
    <div className={cn(videoPlayerCva({ size }), className)} {...props}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        onTimeUpdate={handleTimeUpdate}
        className="h-full w-full object-cover"
      >
        <track kind="captions" />
      </video>
      <button className="absolute inset-0 flex items-center justify-center" onClick={() => void togglePlay()}>
        {!isPlaying && (
          <Icons
            iconName="PlayIcon"
            boxClassName="lg:w-[95px] lg:h-[95px] w-[65px] h-[65px]"
            box
            iconClassName="lg:w-[21px] lg:h-[26px] w-[13.5px] h-[17.75px]"
            boxFill="white"
            boxRoundness="pill"
          />
        )}
      </button>

      {/* Controls (Tailwind only) */}
      <div
        hidden={!isPlaying}
        className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-black/60 px-3 py-2"
      >
        <input
          id="progress"
          type="range"
          min={0}
          max={100}
          step={0.1}
          value={progress}
          onChange={handleSeek}
          className="h-2 flex-1 cursor-pointer accent-black"
        />
        <label htmlFor="progress">hello</label>
      </div>
    </div>
  );
};

export default VideoPlayer;
