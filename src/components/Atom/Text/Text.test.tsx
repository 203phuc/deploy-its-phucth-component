import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Text } from './Text';

describe('Text', () => {
  const SAMPLE_TEXT = 'Hello World';

  it('should render children', () => {
    render(<Text>{SAMPLE_TEXT}</Text>);
    expect(screen.getByText(SAMPLE_TEXT)).toBeInTheDocument();
  });

  it('should apply weight class', () => {
    const { container } = render(<Text weight="Bold">{SAMPLE_TEXT}</Text>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('font-bold');
  });

  it('should apply font class', () => {
    const { container } = render(<Text font="Space Grotesk">{SAMPLE_TEXT}</Text>);
    const el = container.firstChild as HTMLElement;
    expect(el.className).toContain('font-space-grotesk');
  });

  it('should apply numeric size as inline style', () => {
    render(
      <Text size={24} data-testid="text-element">
        {SAMPLE_TEXT}
      </Text>,
    );
    const el = screen.getByTestId('text-element');
    expect(el).toHaveStyle({ fontSize: '24px' });
  });

  it('should apply color as inline style', () => {
    render(
      <Text color="red" data-testid="color-test">
        {SAMPLE_TEXT}
      </Text>,
    );
    const el = screen.getByTestId('color-test');
    expect(el).toHaveStyle({ color: 'rgb(255, 0, 0)' });
  });

  it('should merge additional className', () => {
    render(
      <Text className="custom-class" data-testid="additional-class">
        {SAMPLE_TEXT}
      </Text>,
    );
    const el = screen.getByTestId('additional-class');
    expect(el.className).toContain('custom-class');
  });

  it('should pass through additional props', () => {
    render(
      <Text data-testid="props-test" aria-label="label">
        {SAMPLE_TEXT}
      </Text>,
    );
    const el = screen.getByTestId('props-test');
    expect(el).toHaveAttribute('data-testid', 'props-test');
    expect(el).toHaveAttribute('aria-label', 'label'); // tests pass-through props
    expect(el).toHaveTextContent(SAMPLE_TEXT);
  });
});
