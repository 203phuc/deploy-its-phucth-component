import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Section } from './Section';

describe('Section', () => {
  it('renders with default props', () => {
    render(<Section data-testid="section-default">Content</Section>);
    const section = screen.getByTestId('section-default');
    expect(section).toBeInTheDocument();
    expect(section).toHaveTextContent('Content');
  });

  it('applies width and height correctly', () => {
    render(
      <Section data-testid="section-size" w={200} h={150}>
        Sized Section
      </Section>,
    );
    const section = screen.getByTestId('section-size');
    expect(section).toHaveStyle({ width: '200px', height: '150px' });
  });

  it('applies margin and padding correctly', () => {
    render(
      <Section
        data-testid="section-spacing"
        m={10}
        mt={5}
        mb={15}
        ml={20}
        mr={25}
        p={8}
        pt={4}
        pb={12}
        pl={16}
        pr={24}
      >
        Spaced Section
      </Section>,
    );
    const section = screen.getByTestId('section-spacing');
    expect(section).toHaveStyle({
      margin: '5px 25px 15px 20px',
      padding: '4px 24px 12px 16px',
    });
  });

  it('applies background color', () => {
    render(
      <Section data-testid="section-bg" bgColor="red">
        Colored Section
      </Section>,
    );
    const section = screen.getByTestId('section-bg');
    expect(section).toHaveStyle({ backgroundColor: 'rgb(255, 0, 0)' });
  });

  it('renders children correctly', () => {
    render(
      <Section data-testid="section-children">
        <span>Child Content</span>
      </Section>,
    );
    const section = screen.getByTestId('section-children');
    expect(section.querySelector('span')).toHaveTextContent('Child Content');
  });

  it('passes through additional className', () => {
    render(
      <Section data-testid="section-class" className="custom-class">
        Styled Section
      </Section>,
    );
    const section = screen.getByTestId('section-class');
    expect(section).toHaveClass('custom-class');
  });
});
