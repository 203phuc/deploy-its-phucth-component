import { Button } from '@components/Atom/Button/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading/Heading';
import { Icons } from '@components/Atom/Icons/Icons';
import { Input } from '@components/Atom/Input/Input';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useScreenSize } from '@pages/CustomHook/getScreenSizeHook';
import React, { useRef, useState } from 'react';
import { useNewsletter } from '../../../context/NewsletterContext';

export const NewsletterSection: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { width } = useScreenSize();
  const { onSignupSuccess } = useNewsletter();
  const isMobile = typeof width === 'number' && width < 400;
  const [error, setError] = useState<string>('');

  // Helper function to validate email format
  const isValidEmail = (email: string): boolean => {
    // Simple email validation: must have @ and at least one dot after @
    return email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.');
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const email = inputRef.current?.value ?? '';

    // Validate email
    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Email is incorrect');
      return;
    }

    // Clear error on successful validation
    setError('');
    console.log('Newsletter signup:', email);

    // Call the success callback to show message modal
    onSignupSuccess();

    // clear input
    if (inputRef.current) inputRef.current.value = '';
  };
  if (isMobile) {
    return (
      <Section w="100%" h={432} px={16} py={16}>
        <Section w="100%" h={400} bgColor="var(--color-black-100)" pt={131}>
          <Flex direction="column" align="center" gap={8}>
            <Heading font="spaceGrotesk" size="h5" weight="moderate" color="black-900">
              Join our Newsletter
            </Heading>

            <Text font="inter" size="small" color="black-900" align="center">
              Big discounts and right to your inbox.
            </Text>
          </Flex>
          <form onSubmit={handleSubmit}>
            <Flex justify="center" align="center">
              <Section pt={24} w={311}>
                <Input
                  ref={inputRef}
                  placeholder="Your email"
                  iconStart={<Icons iconName="EmailIcon" color="black" iconSize={24} />}
                  placeholderColor="gray"
                  bgColor="transparent"
                  size="large"
                  required
                  variant="line"
                  error={error}
                  onChange={() => error && setError('')}
                  buttonEnd={
                    <Button type="submit" variant="solid" size="medium">
                      Signup
                    </Button>
                  }
                />
              </Section>
            </Flex>
          </form>
        </Section>
      </Section>
    );
  }
  return (
    <Section w="100%" h={438} px={52} py={52}>
      <Section w="100%" h={334} bgColor="var(--color-black-100)" pt={88}>
        <Flex direction="column" align="center" gap={8}>
          <Heading font="spaceGrotesk" size="h4" weight="moderate" color="black-900">
            Join our Newsletter
          </Heading>

          <Text font="inter" size="large" color="black-900" align="center">
            Big discounts and right to your inbox.
          </Text>
        </Flex>
        <form onSubmit={handleSubmit}>
          <Flex justify="center" align="center">
            <Section pt={32} w={488}>
              <Input
                ref={inputRef}
                placeholder="Email address"
                iconStart={<Icons iconName="EmailIcon" color="black" iconSize={24} />}
                placeholderColor="black"
                bgColor="transparent"
                size="large"
                required
                variant="line"
                error={error}
                onChange={() => error && setError('')}
                buttonEnd={
                  <Button type="submit" variant="solid" size="medium">
                    Signup
                  </Button>
                }
              />
            </Section>
          </Flex>
        </form>
      </Section>
    </Section>
  );
};

export default NewsletterSection;
