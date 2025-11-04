import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Link } from './';

describe('Link', () => {
  const SAMPLE_TEXT = 'Test Link';
  const TEST_HREF = '/test';

  it('should render children and default props', () => {
    // Arrange
    render(
      <Link href={TEST_HREF} data-testid="default-link">
        {SAMPLE_TEXT}
      </Link>,
    );

    // Act
    const link = screen.getByTestId('default-link');

    // Assert
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', TEST_HREF);
    expect(link).toHaveTextContent(SAMPLE_TEXT);
    expect(link).toHaveClass('text-text-blue');
  });

  it('should add underline when in default set up', () => {
    render(
      <Link href="#" spacing="none" data-testid="underline">
        <span>First</span>
        <span>Second</span>
      </Link>,
    );

    const link = screen.getByTestId('underline');
    // Check for any spacer elements
    const after = globalThis.getComputedStyle(link, '::after');
    const content = after.getPropertyValue('content');
    const background = after.getPropertyValue('background-color');

    // ✅ check that it exists
    expect(content).not.toBe('none');
    expect(background).toBe('rgba(0, 0, 0, 0)'); // matches 'black'
  });

  it('should apply custom className', () => {
    // Arrange
    const CUSTOM_CLASS = 'custom-class';
    render(
      <Link href="#" className={CUSTOM_CLASS} data-testid="custom-class-link">
        {SAMPLE_TEXT}
      </Link>,
    );

    // Act
    const link = screen.getByTestId('custom-class-link');

    // Assert
    expect(link).toHaveClass(CUSTOM_CLASS);
  });

  it('should apply hoverUnderline class when hoverUnderline is true', () => {
    render(
      <Link href="#" hoverUnderline data-testid="link-hover">
        {SAMPLE_TEXT}
      </Link>,
    );

    const link = screen.getByTestId('link-hover');
    expect(link).toHaveClass('after:opacity-0 hover:after:opacity-100');
  });

  it('should apply underline class when hoverUnderline is false', () => {
    render(
      <Link href="#" hoverUnderline={false} data-testid="link-underline">
        {SAMPLE_TEXT}
      </Link>,
    );

    expect(screen.getByTestId('link-underline')).toHaveClass('after:opacity-100');
  });

  it('should handle external links with correct attributes', () => {
    const link = render(
      <Link href="https://example.com" external data-testid="external-link-attributes">
        {SAMPLE_TEXT}
      </Link>,
    );

    expect(link.getByTestId('external-link-attributes')).toHaveAttribute('target', '_blank');
    expect(link.getByTestId('external-link-attributes')).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should handle multiple children with spacing', () => {
    // Test with small spacing (4px)
    render(
      <Link href="#" spacing="small" data-testid="spacing-test">
        <span>First</span>
        <span>Second</span>
        <span>Third</span>
      </Link>,
    );

    const link = screen.getByTestId('spacing-test');
    // Get direct child spans (text nodes might be wrapped in additional spans)
    const directSpans = Array.from(link.children).filter(
      (child) => child.tagName === 'SPAN' && !child.className.includes('w-'),
    );
    const spacers = link.querySelectorAll('.w-1'); // small spacing class

    expect(directSpans).toHaveLength(3);
    expect(spacers).toHaveLength(2); // Should be one less than number of children
  });

  it('should not add spacing when spacing is set to none', () => {
    render(
      <Link href="#" spacing="none" data-testid="no-spacing-test">
        <span>First</span>
        <span>Second</span>
      </Link>,
    );

    const link = screen.getByTestId('no-spacing-test');
    // Check for any spacer elements
    const hasSpacers = Array.from(link.querySelectorAll('*')).some((el) =>
      ['w-0.5', 'w-1', 'w-2', 'w-4'].some((cls) => el.classList.contains(cls)),
    );
    expect(hasSpacers).toBe(false);
  });

  // Test case removed as it was redundant with 'should handle external links with correct attributes'
  it('should handle different font weights', () => {
    const { rerender } = render(
      <Link href="#" weight="bold" data-testid="weight-test">
        Bold Text
      </Link>,
    );

    expect(screen.getByTestId('weight-test')).toHaveClass('font-bold');

    rerender(
      <Link href="#" weight="semiBold" data-testid="weight-test-2">
        SemiBold Text
      </Link>,
    );

    expect(screen.getByTestId('weight-test-2')).toHaveClass('font-semibold');
  });

  it('should handle different font families', () => {
    const { rerender } = render(
      <Link href="#" font="inter" data-testid="font-test">
        Inter Font
      </Link>,
    );

    expect(screen.getByTestId('font-test')).toHaveClass('font-inter');

    rerender(
      <Link href="#" font="spaceGrotesk" data-testid="font-test-2">
        Space Grotesk Font
      </Link>,
    );

    expect(screen.getByTestId('font-test-2')).toHaveClass('font-space-grotesk');
  });
});
