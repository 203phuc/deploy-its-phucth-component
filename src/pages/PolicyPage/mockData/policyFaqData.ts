import { FAQItem } from '@pages/Contactpage/mockData/faqData';

export interface PolicyFAQData {
  shopping: FAQItem[];
  payment: FAQItem[];
  shipping: FAQItem[];
  return: FAQItem[];
  refunds: FAQItem[];
  cookies: FAQItem[];
  privacy: FAQItem[];
  terms: FAQItem[];
}

export const policyFaqData: PolicyFAQData = {
  shopping: [
    {
      id: 1,
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay.',
    },
    {
      id: 2,
      question: 'How do I know if my order was successful?',
      answer:
        'You will receive an order confirmation email within minutes of placing your order. You can also check your order status in your account dashboard.',
    },
    {
      id: 3,
      question: 'Can I modify or cancel my order after placing it?',
      answer:
        'Orders can be modified or cancelled within 1 hour of placement. After this time, the order enters our fulfillment process and cannot be changed.',
    },
  ],
  payment: [
    {
      id: 1,
      question: 'Is my payment information secure?',
      answer:
        'Yes, we use industry-standard SSL encryption to protect your payment information. We are PCI DSS compliant and never store your credit card details.',
    },
    {
      id: 2,
      question: 'When will I be charged for my order?',
      answer:
        'Your payment method will be charged immediately after you place your order. You will receive a confirmation email with your order details.',
    },
    {
      id: 3,
      question: 'What happens if my payment fails?',
      answer:
        'If your payment fails, you will be notified immediately and can try again with a different payment method. Your order will not be processed until payment is successful.',
    },
  ],
  shipping: [
    {
      id: 1,
      question: 'How long does shipping take?',
      answer:
        'Standard shipping takes 5-7 business days. Express shipping takes 2-3 business days. International shipping takes 10-15 business days.',
    },
    {
      id: 2,
      question: 'How much does shipping cost?',
      answer:
        'Standard shipping is $5.99 for orders under $50 and free for orders over $50. Express shipping is $12.99. International shipping rates vary by location.',
    },
    {
      id: 3,
      question: 'Do you ship internationally?',
      answer:
        'Yes, we ship to over 100 countries worldwide. International shipping rates and delivery times vary by destination.',
    },
  ],
  return: [
    {
      id: 1,
      question: 'What is your return policy?',
      answer:
        'We offer a 30-day return policy for unused items in original condition. Items must be returned with all tags attached and original packaging.',
    },
    {
      id: 2,
      question: 'How do I initiate a return?',
      answer:
        'You can initiate a return through your account dashboard or by contacting our customer service team. A return shipping label will be provided.',
    },
    {
      id: 3,
      question: 'Are there any items that cannot be returned?',
      answer:
        'Final sale items, perishable goods, and personalized items cannot be returned. Please check product descriptions for return eligibility.',
    },
  ],
  refunds: [
    {
      id: 1,
      question: 'How long do refunds take to process?',
      answer:
        'Refunds are typically processed within 5-7 business days after we receive your returned item. The timing depends on your payment provider.',
    },
    {
      id: 2,
      question: 'How will I receive my refund?',
      answer:
        'Refunds are issued to the original payment method used for the purchase. You will receive an email confirmation once the refund is processed.',
    },
    {
      id: 3,
      question: 'Are there any restocking fees?',
      answer:
        'No, we do not charge restocking fees for returns within the 30-day return window. However, return shipping costs may apply.',
    },
  ],
  cookies: [
    {
      id: 1,
      question: 'What are cookies and how do you use them?',
      answer:
        'Cookies are small text files stored on your device that help us improve your browsing experience. We use them for site functionality, analytics, and personalized content.',
    },
    {
      id: 2,
      question: 'Can I disable cookies?',
      answer:
        'Yes, you can disable cookies through your browser settings. However, some features of our website may not function properly without cookies.',
    },
    {
      id: 3,
      question: 'What types of cookies do you use?',
      answer:
        'We use essential cookies for site functionality, performance cookies for analytics, and marketing cookies for personalized advertising.',
    },
  ],
  privacy: [
    {
      id: 1,
      question: 'What information do you collect about me?',
      answer:
        'We collect personal information you provide directly (name, email, address) and information collected automatically (IP address, browsing behavior, device information).',
    },
    {
      id: 2,
      question: 'How do you protect my personal information?',
      answer:
        'We use industry-standard encryption and security measures to protect your data. Access to personal information is restricted to authorized personnel only.',
    },
    {
      id: 3,
      question: 'Do you share my information with third parties?',
      answer:
        'We only share your information with trusted third parties necessary for order fulfillment (payment processors, shipping carriers) and as required by law.',
    },
  ],
  terms: [
    {
      id: 1,
      question: 'What are the terms of service?',
      answer:
        'By using our website, you agree to our terms of service which include product information accuracy, pricing, order acceptance, and user conduct guidelines.',
    },
    {
      id: 2,
      question: 'Can your terms change?',
      answer:
        'We may update our terms of service periodically. Changes will be posted on this page with an updated effective date. Continued use of the site constitutes acceptance of changes.',
    },
    {
      id: 3,
      question: 'What happens if I violate the terms?',
      answer:
        'Violation of terms may result in account suspension or termination. We reserve the right to refuse service to anyone who violates our terms of service.',
    },
  ],
};
