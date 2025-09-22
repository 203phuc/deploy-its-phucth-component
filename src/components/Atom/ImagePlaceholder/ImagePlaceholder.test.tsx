import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ImagePlaceholder } from './ImagePlaceholder';

describe('ImagePlaceholder', () => {
  it('renders with default size', () => {
    render(<ImagePlaceholder alt="Default size" data-testid="placeholder" src={''} />);
    const element = screen.getByTestId('placeholder');
    expect(element).toHaveClass('w-[128px] h-[170px]');
  });

  it('renders with custom size', () => {
    render(<ImagePlaceholder alt="Custom size" size="s2" data-testid="custom size" src={''} />);
    const element = screen.getByTestId('custom size');
    expect(element).toHaveClass('w-[163px] h-[217px]');
  });

  it('applies custom className', () => {
    render(
      <ImagePlaceholder alt="Custom class" className="custom-class" data-testid="Custom class" src={''} />,
    );
    const element = screen.getByTestId('Custom class');
    expect(element).toHaveClass('custom-class');
  });

  it('renders children', () => {
    render(
      <ImagePlaceholder alt="Children" data-testid="Children" src={''}>
        <span>Test Content 1</span>
      </ImagePlaceholder>,
    );
    expect(screen.getByText('Test Content 1')).toBeInTheDocument();
  });

  it('passes through additional props', () => {
    render(
      <ImagePlaceholder alt="Test alt text" data-testid="placeholder" src={''} aria-label="Test Label" />,
    );
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });
});
