import { Section } from '@components/Atom/Section';
import { IconBox } from '../HOC/IconBox';
import { CommentSection } from './components/CommentSection';
import { ContentSection } from './components/ContentSection';
import { HeroSection } from './components/HeroSection';
import { ImageRightSection } from './components/ImageRightSection';
import { LogoSection } from './components/LogoSection';
import { VideoSection } from './components/VideoSection';
import { useAboutUsPage } from './hooks/useAboutUsPage';

const AboutUsPageContent = () => {
  const { isMobile } = useAboutUsPage();

  return (
    <Section w="100%">
      <HeroSection isMobile={isMobile} />
      <LogoSection isMobile={isMobile} />
      <ContentSection isMobile={isMobile} />
      <CommentSection isMobile={isMobile} />
      <ImageRightSection isMobile={isMobile} />
      <VideoSection isMobile={isMobile} />
      <IconBox isMobile={isMobile} />
    </Section>
  );
};

export const AboutUsPage = () => {
  return <AboutUsPageContent />;
};
