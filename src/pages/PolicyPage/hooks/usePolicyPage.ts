import { useEffect, useState } from 'react';
import { onSmallScreenChange } from 'src/util/mediaQueries';
import { policyFaqData } from '../mockData/policyFaqData';

export type PolicyType =
  | 'shopping'
  | 'payment'
  | 'shipping'
  | 'return'
  | 'refunds'
  | 'cookies'
  | 'privacy'
  | 'terms';

interface PolicyConfig {
  title: string;
  subtitle: string;
  backgroundImage: string;
  sections: PolicyType[];
}

const policyConfigs: Record<PolicyType, PolicyConfig> = {
  shopping: {
    title: 'Shopping Policy',
    subtitle: 'Everything you need to know about shopping with us',
    backgroundImage:
      'https://res.cloudinary.com/dnuicbze9/image/upload/v1768298653/contactuspageheader_ctbvke.jpg',
    sections: ['shopping', 'payment'],
  },
  payment: {
    title: 'Payment Policy',
    subtitle: 'Secure payment methods and billing information',
    backgroundImage:
      'https://res.cloudinary.com/dnuicbze9/image/upload/v1768298653/contactuspageheader_ctbvke.jpg',
    sections: ['payment'],
  },
  shipping: {
    title: 'Shipping Policy',
    subtitle: 'Delivery options and shipping information',
    backgroundImage:
      'https://res.cloudinary.com/dnuicbze9/image/upload/v1768298653/contactuspageheader_ctbvke.jpg',
    sections: ['shipping'],
  },
  return: {
    title: 'Return & Refund Policy',
    subtitle: 'Our return policy and refund process',
    backgroundImage:
      'https://res.cloudinary.com/dnuicbze9/image/upload/v1768298653/contactuspageheader_ctbvke.jpg',
    sections: ['return', 'refunds'],
  },
  refunds: {
    title: 'Refund Policy',
    subtitle: 'How refunds are processed',
    backgroundImage:
      'https://res.cloudinary.com/dnuicbze9/image/upload/v1768298653/contactuspageheader_ctbvke.jpg',
    sections: ['refunds'],
  },
  cookies: {
    title: 'Cookies Policy',
    subtitle: 'How we use cookies and your privacy',
    backgroundImage:
      'https://res.cloudinary.com/dnuicbze9/image/upload/v1768298653/contactuspageheader_ctbvke.jpg',
    sections: ['cookies'],
  },
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'How we protect your personal information',
    backgroundImage:
      'https://res.cloudinary.com/dnuicbze9/image/upload/v1768298653/contactuspageheader_ctbvke.jpg',
    sections: ['privacy'],
  },
  terms: {
    title: 'Terms & Conditions',
    subtitle: 'Terms of service and usage guidelines',
    backgroundImage:
      'https://res.cloudinary.com/dnuicbze9/image/upload/v1768298653/contactuspageheader_ctbvke.jpg',
    sections: ['terms'],
  },
};

export const usePolicyPage = (policyType: PolicyType = 'shopping') => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    return onSmallScreenChange(setIsMobile);
  }, []);

  const policyConfig = policyConfigs[policyType];
  const faqSections = policyConfig.sections.map((section) => ({
    title: section.charAt(0).toUpperCase() + section.slice(1),
    data: policyFaqData[section],
  }));

  return {
    isMobile,
    policyConfig,
    faqSections,
  };
};
