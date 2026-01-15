import { useState } from 'react';

export type AccountSection = 'dashboard' | 'orders' | 'address' | 'account' | 'wishlist' | 'logout';

export const useAccountDashboard = () => {
  const [activeSection, setActiveSection] = useState<AccountSection>('orders');

  const handleSectionChange = (section: AccountSection) => {
    setActiveSection(section);
  };

  return {
    activeSection,
    handleSectionChange,
  };
};
