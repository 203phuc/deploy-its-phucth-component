import { Button } from '@components/Atom/Button/Button';
import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons/Icons';
import { Position } from '@components/Atom/Position/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import React from 'react';
import { useMessageModal } from './hooks/MessageModelHook';
import { type MessageModalProps } from './types';

export const MessageModal: React.FC<MessageModalProps> = ({
  type,
  message,
  isOpen,
  onClose,
  autoCloseDuration = 5000,
}) => {
  const { isVisible, isMobile, handleClose } = useMessageModal({ isOpen, onClose, autoCloseDuration });

  if (!isVisible) return null;

  const isSuccess = type === 'success';
  const bgColor = 'var(--color-black-200)';
  const borderColor = isSuccess ? '1px solid var(--color-black-900)' : '1px solid var(--color-red-500)';
  const textColor = 'black-900';
  const iconName = isSuccess ? 'CheckIcon' : 'CloseIcon';
  const iconColor = 'black';
  const boxColor = isSuccess ? 'green' : 'red';

  const positionProps = isMobile
    ? { position: 'fixed' as const, top: 0, left: 0, right: 0, zIndex: 9999 }
    : { position: 'fixed' as const, top: 20, right: 20, zIndex: 9999 };

  const outerWidth = isMobile ? '100%' : 450;
  const outerHeight = isMobile ? undefined : 70;
  const innerWidth = isMobile ? '100%' : 330;
  const innerPx = isMobile ? 12 : 5;

  return (
    // Position accepts numeric/string top/left/right props and will apply them as inline styles from the atom
    <Position {...positionProps}>
      <Section w={outerWidth} h={outerHeight} bgColor={bgColor}>
        <Flex align="center" justify="center" width="100%" height="100%">
          <Section bgColor={bgColor}>
            <Flex direction="column" align="end" gap={0} justify="space-between">
              <Button type="button" variant="text" size="medium" onClick={handleClose}>
                <Icons iconName="CloseIcon" box boxSize={24} color={iconColor} iconSize={20} />
              </Button>
              <Section
                bgColor={bgColor}
                border={borderColor}
                borderRadius={10}
                px={innerPx}
                py={4}
                w={innerWidth}
              >
                <Flex direction="row" width="100%" align="center" gap={12} flex={1}>
                  <Icons
                    box
                    boxRoundness="pill"
                    boxSize={24}
                    iconName={iconName}
                    color="white"
                    boxFill={boxColor}
                    iconSize={20}
                  />
                  <Text font="inter" size="medium" color={textColor} weight="semiBold">
                    {message}
                  </Text>
                </Flex>
              </Section>
            </Flex>
          </Section>
        </Flex>
      </Section>
    </Position>
  );
};

export default MessageModal;
