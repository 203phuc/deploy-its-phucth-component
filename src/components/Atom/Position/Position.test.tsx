import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Position } from './Position';

describe('Position Component', () => {
  it('renders with default props', () => {
    render(
      <Position data-testid="position">
        <div>Test Content</div>
      </Position>,
    );

    const positionElement = screen.getByTestId('position');
    expect(positionElement).toBeInTheDocument();
    expect(positionElement).toHaveStyle('position: absolute');
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom position and styles', () => {
    render(
      <Position
        data-testid="position1"
        position="relative"
        top="10px"
        left="20px"
        style={{ backgroundColor: 'red' }}
      >
        <div>Positioned Content</div>
      </Position>,
    );

    const positionElement = screen.getByTestId('position1');
    expect(positionElement.style.position).toBe('relative');
    expect(positionElement.style.top).toBe('10px');
    expect(positionElement.style.left).toBe('20px');
    expect(positionElement.style.backgroundColor).toBe('red');
  });

  it('converts number values to pixels', () => {
    render(<Position data-testid="position2" top={10} left={20} right={30} bottom={40} />);

    const positionElement = screen.getByTestId('position2');
    expect(positionElement).toHaveStyle({
      top: '10px',
      left: '20px',
      right: '30px',
      bottom: '40px',
    });
  });

  it('applies zIndex when provided', () => {
    render(
      <Position data-testid="position4" zIndex={100} style={{ position: 'fixed' }}>
        <div>Content with zIndex</div>
      </Position>,
    );

    const positionElement = screen.getByTestId('position4');
    expect(positionElement.style.zIndex).toBe('100');
    expect(positionElement.style.position).toBe('fixed');
  });
});
