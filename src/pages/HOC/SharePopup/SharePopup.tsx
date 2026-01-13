import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import Icons from '@components/Atom/Icons';
import { Overlay } from '@components/Atom/Overlay';
import { Section } from '@components/Atom/Section';

interface SharePopupProps {
  isOpen: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

export const SharePopup = ({ isOpen, onClose, isMobile = false }: SharePopupProps) => {
  const shareOptions = [
    { name: 'Facebook', icon: 'FacebookIcon', color: '#1877f2' },
    { name: 'Twitter', icon: 'TwitterIcon', color: '#1da1f2' },
    { name: 'WhatsApp', icon: 'WhatsAppIcon', color: '#25d366' },
    { name: 'Copy Link', icon: 'CopyIcon', color: '#6b7280' },
  ];

  const handleShare = (platform: string) => {
    const currentUrl = window.location.href;

    switch (platform) {
      case 'Facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
          '_blank',
        );
        break;
      case 'Twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`, '_blank');
        break;
      case 'WhatsApp':
        window.open(`https://wa.me/?text=${encodeURIComponent(currentUrl)}`, '_blank');
        break;
      case 'Copy Link':
        void navigator.clipboard.writeText(currentUrl);
        break;
    }
  };

  if (!isOpen) return null;

  return (
    <Overlay position={isMobile ? 'bottom' : 'center'} isOpen={isOpen} onClose={onClose} zIndex={1000}>
      <Section w={isMobile ? '100%' : 647} px={isMobile ? 24 : 32} py={isMobile ? 20 : 24} bgColor="white">
        {/* Header */}
        <Flex justify="space-between" align="center">
          <Heading font="spaceGrotesk" size={isMobile ? 'h7' : 'h6'} weight="semiBold" color="black-900">
            Share with your friends & family
          </Heading>
          <Icons iconName="CloseIcon" box={true} onClick={() => onClose?.()} iconSize={isMobile ? 32 : 40} />
        </Flex>
        <Section h={isMobile ? 16 : 21} />

        {/* Share Options */}
        <Flex direction="row" gap={isMobile ? 12 : 16}>
          {shareOptions.map((option) => (
            <Icons
              key={option.name}
              onClick={() => handleShare(option.name)}
              iconName={option.icon as keyof typeof Icons}
              iconSize={isMobile ? 18 : 20}
              box={true}
              boxSize={isMobile ? 32 : 36}
              boxRoundness="pill"
              boxFill="gray"
            />
          ))}
        </Flex>
      </Section>
    </Overlay>
  );
};
