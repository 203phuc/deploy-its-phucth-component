export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'What are your business hours?',
    answer: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed',
  },
  {
    id: 2,
    question: 'How can I contact customer support?',
    answer:
      'You can reach our customer support team through:\n• Email: hello@haibazo.com\n• Phone: +1 (555) 123-4567\n• Live chat on our website\n• Contact form on this page',
  },
  {
    id: 3,
    question: 'Do you offer international shipping?',
    answer:
      'Yes, we offer worldwide shipping to over 100 countries. Shipping costs and delivery times vary by location. You can check shipping rates at checkout.',
  },
  {
    id: 4,
    question: 'What is your return policy?',
    answer:
      'We offer a 30-day return policy for unused items in original packaging. Simply contact our support team to initiate a return. Refunds are processed within 5-7 business days.',
  },
  {
    id: 5,
    question: 'How do I track my order?',
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can track your package on our website or the carrier's website using this number.",
  },
];
