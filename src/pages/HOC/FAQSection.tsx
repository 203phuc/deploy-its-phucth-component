import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import { Icons } from '@components/Atom/Icons';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { FAQItem } from '@pages/Contactpage/mockData/faqData';
import { useState } from 'react';

export interface FAQSectionProps {
  isMobile?: boolean;
  faqData?: FAQItem[];
  title?: string;
}

const FAQAccordion = ({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <Section w="100%" bgColor="white" borderRadius="medium" mb={12}>
    <Flex direction="column" width="100%" onClick={onToggle}>
      <Section w="100%" py={16}>
        <Flex justify="space-between" align="center" width="100%">
          <Text font="inter" weight="semiBold" size="large" color="black-900">
            {item.question}
          </Text>
          <Icons iconName={isOpen ? 'MinusIcon' : 'PlusIcon'} iconSize={28} />
        </Flex>
      </Section>

      {isOpen && (
        <Section pb={16} borderRadius="medium">
          <Text font="inter" weight="regular" size="large">
            {item.answer}
          </Text>
        </Section>
      )}
    </Flex>
  </Section>
);

export const FAQSection = ({
  isMobile,
  faqData = [],
  title = 'Frequently Asked Questions',
}: FAQSectionProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  return (
    <Section w={isMobile ? 343 : 1108} my={isMobile ? 24 : 52} mx={isMobile ? 16 : 166}>
      <Flex direction="column" gap={24}>
        {/* Section Header */}
        <Section w="100%">
          <Heading font="spaceGrotesk" color="black-900" weight="moderate" size={isMobile ? 'h5' : 'h4'}>
            {title}
          </Heading>
        </Section>

        {/* FAQ Accordion */}
        <Section w="100%">
          <Flex direction="column" gap={8}>
            {faqData.map((item) => (
              <FAQAccordion
                key={item.id}
                item={item}
                isOpen={openItems.includes(item.id)}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </Flex>
        </Section>
      </Flex>
    </Section>
  );
};
