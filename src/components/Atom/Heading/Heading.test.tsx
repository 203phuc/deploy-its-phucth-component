import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Heading } from './Heading';

describe('Heading', () => {
  const SAMPLE_Heading = 'Hello World';

  it('should render children', () => {
    render(<Heading>{SAMPLE_Heading}</Heading>);
    expect(screen.getByText(SAMPLE_Heading)).toBeInTheDocument();
  });

  it('should apply weight class', () => {
    const { container } = render(<Heading weight="Bold">{SAMPLE_Heading}</Heading>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('font-bold');
  });

  it('should apply font class', () => {
    const { container } = render(<Heading font="Space Grotesk">{SAMPLE_Heading}</Heading>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('font-space-grotesk');
  });

  it('should apply numeric size as inline style', () => {
    render(
      <Heading size="h6" data-testid="Heading-element">
        {SAMPLE_Heading}
      </Heading>,
    );
    const el = screen.getByTestId('Heading-element');
    expect(el).toHaveStyle({ fontSize: 'Heading-xl' });
  });

  it('should apply the correct Tailwind class for color', () => {
    render(
      <Heading color="default" data-testid="color-test">
        {SAMPLE_Heading}
      </Heading>,
    );

    const el = screen.getByTestId('color-test');

    // Check the class that corresponds to "default" color
    expect(el).toHaveClass('text-text-blue');
  });

  it('should merge additional className', () => {
    render(
      <Heading className="custom-class" data-testid="additional-class">
        {SAMPLE_Heading}
      </Heading>,
    );
    const el = screen.getByTestId('additional-class');
    expect(el.className).toContain('custom-class');
  });

  it('should pass through additional props', () => {
    render(
      <Heading data-testid="props-test" aria-label="label">
        {SAMPLE_Heading}
      </Heading>,
    );
    const el = screen.getByTestId('props-test');
    expect(el).toHaveAttribute('data-testid', 'props-test');
    expect(el).toHaveAttribute('aria-label', 'label'); // tests pass-through props
    expect(el).toHaveTextContent(SAMPLE_Heading);
  });
});
