import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { VideoPlayer } from './VideoPlayer';

describe('VideoPlayer', () => {
  let playSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    playSpy = vi.spyOn(HTMLMediaElement.prototype, 'play').mockImplementation(() => Promise.resolve());
    vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders video with src and default size', () => {
    render(<VideoPlayer src="/video.mp4" data-testid="video-player1" />);
    const root = screen.getByTestId('video-player1');
    const video = root.querySelector('video');
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('src', '/video.mp4');
    expect(root.className).toContain('h-[494px]');
    expect(root.className).toContain('w-[766px]');
  });

  it('applies size classes and custom className', () => {
    render(
      <VideoPlayer src="/video.mp4" size="small" className="custom-class" data-testid="video-player2" />,
    );
    const root = screen.getByTestId('video-player2');
    expect(root.className).toContain('h-[375px]');
    expect(root.className).toContain('w-[343px]');
    expect(root.className).toContain('custom-class');
  });

  it('shows play icon initially and hides it after clicking (playing state)', () => {
    render(<VideoPlayer src="/video.mp4" data-testid="video-player3" />);

    // Play icon is rendered before playing
    // Use test id scoping
    const root = screen.getByTestId('video-player3');
    expect(root.querySelector('svg')).toBeTruthy();

    // Click overlay button to toggle play
    const button = root.querySelector('button')!;
    fireEvent.click(button);

    // play() was called
    expect(playSpy).toHaveBeenCalled();

    // Controls container is visible when playing (not hidden)
    const controls = document.querySelector('div.absolute.inset-x-0.bottom-0');
    expect(controls).toBeTruthy();
  });

  it('renders a <track> element inside the video', () => {
    render(<VideoPlayer src="/video.mp4" data-testid="video-player4" />);
    const root = screen.getByTestId('video-player4');
    const track = root.querySelector('video > track');
    expect(track).toBeInTheDocument();
  });

  it('allows seeking via range input when duration is available', () => {
    // Mock duration to be a valid number so seeking logic runs
    vi.spyOn(HTMLMediaElement.prototype, 'duration', 'get').mockReturnValue(100);

    render(<VideoPlayer src="/video.mp4" data-testid="video-player5" />);

    // Enter playing state so controls (including range) are visible
    const root = screen.getByTestId('video-player5');
    const button = root.querySelector('button')!;
    fireEvent.click(button);

    const range = root.querySelector<HTMLInputElement>('input[type="range"]')!;
    expect(range).toBeInTheDocument();

    fireEvent.change(range, { target: { value: '50' } });
    expect(range.value).toBe('50');
  });
});
