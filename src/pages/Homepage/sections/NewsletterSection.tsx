import { Button } from '@components/Atom/Button/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading/Heading';
import { Icons } from '@components/Atom/Icons/Icons';
import { Input } from '@components/Atom/Input/Input';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import React from 'react';
import { useNewsletterSection } from './hooks/NewLettersSectionHook';
import { type MutualProps } from './types';

export const NewsletterSection: React.FC<MutualProps> = ({ isMobile }) => {
  const { inputRef, error, handleSubmit, setError } = useNewsletterSection();
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
