import { Flex } from '@components/Atom/Flex';
import { Section } from '@components/Atom/Section';
import { PageHeader } from '@pages/HOC/PageHeader';
import { BrandingSection } from './components/BrandingSection';
import { ContactForm } from './components/ContactForm';
import { useContactPage } from './hooks/useContactPage';

export const ContactPage = () => {
  const { isMobile, formData, handleInputChange, handleSubmit } = useContactPage();

  return (
    <Flex direction="column">
      <PageHeader
        isMobile={isMobile}
        title="Contact Us"
        subtitle="We'd love to hear from you! Send us a message and we'll get back to you soon."
        backgroundImage="https://res.cloudinary.com/dnuicbze9/image/upload/v1768298653/contactuspageheader_ctbvke.jpg"
        breadcrumbItems={[
          { id: 'home', label: 'Home', path: '/' },
          { id: 'contact', label: 'Contact' },
        ]}
      />

      <Section w={isMobile ? 343 : 1108} my={isMobile ? 24 : 52} mx={isMobile ? 16 : 166}>
        <Flex direction="column" gap={32}>
          <ContactForm
            isMobile={isMobile}
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </Flex>
      </Section>

      <BrandingSection isMobile={isMobile} />
    </Flex>
  );
};
