import { Section } from '@components/Atom/Section';
import { SliderProvider } from '../../context/SliderContext';
import { HeroSection } from './components/HeroSection';
import { useAboutUsPage } from './hooks/useAboutUsPage';

const AboutUsPageContent = () => {
  const { isMobile } = useAboutUsPage();

  return (
    <Section>
      <HeroSection isMobile={isMobile} />
    </Section>
  );
};

export const AboutUsPage = () => {
  return (
    <SliderProvider>
      <AboutUsPageContent />
    </SliderProvider>
  );
};
