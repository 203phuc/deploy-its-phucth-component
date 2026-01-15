import { Flex } from '@components/Atom/Flex';
import { FAQSection } from '@pages/HOC/FAQSection';
import { PageHeader } from '@pages/HOC/PageHeader';
import { PolicyType, usePolicyPage } from './hooks/usePolicyPage';

interface PolicyPageProps {
  policyType?: PolicyType;
}

export const PolicyPage = ({ policyType = 'shopping' }: PolicyPageProps) => {
  const { isMobile, policyConfig, faqSections } = usePolicyPage(policyType);

  return (
    <Flex direction="column">
      <PageHeader
        isMobile={isMobile}
        title={policyConfig.title}
        subtitle={policyConfig.subtitle}
        backgroundImage={policyConfig.backgroundImage}
        breadcrumbItems={[
          { id: 'home', label: 'Home', path: '/' },
          { id: 'policy', label: 'Policy' },
          { id: policyType, label: policyConfig.title },
        ]}
      />

      {faqSections.map((section, index) => (
        <FAQSection
          key={`${policyType}-${index}`}
          isMobile={isMobile}
          faqData={section.data}
          title={`${section.title} FAQ`}
        />
      ))}
    </Flex>
  );
};
