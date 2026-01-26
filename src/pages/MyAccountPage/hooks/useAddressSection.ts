import { useState } from 'react';

export interface Address {
  id: string;
  type: string;
  name: string;
  street: string;
  city: string;
  phone: string;
  isDefault: boolean;
}

export const useAddressSection = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const addresses: Address[] = [
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

  const handleShowAddForm = () => setShowAddForm(true);

  return {
    showAddForm,
    addresses,
    handleShowAddForm,
  };
};
