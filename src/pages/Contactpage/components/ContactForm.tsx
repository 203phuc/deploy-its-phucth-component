import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Input } from '@components/Atom/Input';
import { Section } from '@components/Atom/Section';

interface ContactFormProps {
  isMobile: boolean;
  formData: {
    name: string;
    email: string;
    message: string;
  };
  handleInputChange: (field: string, value: string) => void;
  handleSubmit: () => void;
}

export const ContactForm = ({ isMobile, formData, handleInputChange, handleSubmit }: ContactFormProps) => {
  return (
    <Section w="100%">
      <Section pt={24}>
        <Flex justify="space-between" width={isMobile ? '' : '100%'}>
          {/* Contact Form */}
          <Flex width={456} direction="column" gap={16}>
            <Input
              label="Full name*"
              textSize={isMobile ? 'small' : 'medium'}
              type="text"
              variant="solid"
              placeholder="Your Name *"
              size={isMobile ? 'large' : 'xlarge'}
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
            <Input
              label="Email address *"
              textSize={isMobile ? 'small' : 'medium'}
              type="email"
              variant="solid"
              placeholder="Your Email *"
              size={isMobile ? 'large' : 'xlarge'}
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
            <Input
              label="Your Message *"
              textSize={isMobile ? 'small' : 'medium'}
              rows={isMobile ? 4 : 6}
              as="textarea"
              variant="solid"
              placeholder="Your Message *"
              size={isMobile ? 'large' : 'xlarge'}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
            />
            {/* Submit Button */}
            <Section pt={24}>
              <Flex justify={isMobile ? 'center' : 'start'}>
                <Button
                  variant="solidBlack"
                  roundness="round"
                  size={isMobile ? 'small' : 'medium'}
                  onClick={handleSubmit}
                  fullWidth={isMobile}
                >
                  Send Message
                </Button>
              </Flex>
            </Section>
          </Flex>
          <Section w={570}>
            <ImagePlaceholder
              src="https://res.cloudinary.com/dnuicbze9/image/upload/v1768298218/map_a1khdj.png"
              alt=""
              size="full"
            />
          </Section>
        </Flex>
      </Section>
    </Section>
  );
};
