import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import { Icons } from '@components/Atom/Icons';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useState } from 'react';
import { AddAddressForm } from './AddAddressForm';

export interface AddressSectionProps {
  isMobile?: boolean;
}

export const AddressSection = ({ isMobile = false }: AddressSectionProps) => {
  const [showAddForm, setShowAddForm] = useState(false);

  const addresses = [
    {
      id: 'addr-001',
      type: 'Home',
      name: 'John Doe',
      street: '123 Main Street',
      city: 'New York, NY 10001',
      phone: '+1 (555) 123-4567',
      isDefault: true,
    },
    {
      id: 'addr-002',
      type: 'Office',
      name: 'John Doe',
      street: '456 Business Ave',
      city: 'New York, NY 10002',
      phone: '+1 (555) 987-6543',
      isDefault: false,
    },
    {
      id: 'addr-002',
      type: 'Office',
      name: 'John Doe',
      street: '456 Business Ave',
      city: 'New York, NY 10002',
      phone: '+1 (555) 987-6543',
      isDefault: false,
    },
  ];

  return (
    <Section w="100%" bgColor="white" borderRadius="medium">
      <Flex direction="column" gap={32}>
        {showAddForm ? (
          <AddAddressForm isMobile={isMobile} />
        ) : (
          <>
            <Flex direction="row" gap={32} wrap="wrap">
              {addresses.map((address) => (
                <Section
                  borderRadius={6}
                  border="1px solid var(--color-black-300)"
                  key={address.id}
                  w={424}
                  px={32}
                  py={32}
                >
                  <Flex height="100%" justify="space-between" align="start">
                    <Flex direction="column" flex={1}>
                      <Section pb={10}>
                        <Text size={isMobile ? 'xsmall' : 'large'} weight="semiBold" color="black-900">
                          {address.type}
                        </Text>
                      </Section>

                      <Text size={isMobile ? 'small' : 'large'} weight="regular" color="black-900">
                        {address.name}
                      </Text>
                      <Text size={isMobile ? 'small' : 'large'} weight="regular" color="black-900">
                        {address.phone}
                      </Text>
                      <Text size={isMobile ? 'small' : 'large'} weight="regular" color="black-900">
                        {address.street}
                      </Text>
                      <Text size={isMobile ? 'small' : 'large'} weight="regular" color="black-900">
                        {address.city}
                      </Text>
                    </Flex>

                    <Flex direction="column" height="100%">
                      <Flex direction="column" height="100%" align="end" gap={1.67}>
                        <Flex gap={4} align="center">
                          <Icons iconName="EditIcon" />
                          <Text size={isMobile ? 'xsmall' : 'special1'} color="black-900">
                            Edit
                          </Text>
                        </Flex>
                        <Icons iconName="TrashIcon" iconSize={24} />
                      </Flex>
                      <Flex width="100%" justify="end">
                        <Icons
                          box
                          boxSize={18}
                          boxBorder
                          boxRoundness="pill"
                          boxFill="green"
                          iconName="CheckIcon"
                          iconSize={10}
                        />
                      </Flex>
                    </Flex>
                  </Flex>
                </Section>
              ))}
            </Flex>
            <Flex width="100%" align="center" justify="center">
              <Flex align="center" gap={8} onClick={() => setShowAddForm(true)} style={{ cursor: 'pointer' }}>
                <Icons box boxSize={40} boxBorder boxRoundness="pill" iconSize={21.8} iconName="PlusIcon" />
                <Heading font="spaceGrotesk" size="h7" weight="moderate" color="black-900">
                  Add New Address
                </Heading>
              </Flex>
            </Flex>
          </>
        )}
      </Flex>
    </Section>
  );
};
