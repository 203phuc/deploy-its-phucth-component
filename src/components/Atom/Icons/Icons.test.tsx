import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Icons } from './Icons';

describe('Icons', () => {
  it('renders the correct icon', () => {
    const { container } = render(<Icons iconName="HeartIcon" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('applies the correct color', () => {
    const { container } = render(<Icons iconName="HeartIcon" color="black" />);
    const path = container.querySelector('path');
    expect(path).toHaveAttribute('stroke', 'black');
  });

  it('renders with box when box prop is true', () => {
    const { container } = render(<Icons iconName="HeartIcon" box boxFill="red" boxSize={40} />);
    const box = container.firstChild as HTMLElement;
    expect(box).toHaveStyle({ width: '40px', height: '40px' });
    expect(box).toHaveClass('bg-red-300');
  });

  it('applies the correct size', () => {
    const { container } = render(<Icons iconName="HeartIcon" iconSize={32} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
  });

  it('applies custom className', () => {
    const { container } = render(<Icons iconName="HeartIcon" className="custom-class" box={true} />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
