import React, { createContext, useContext, useMemo } from 'react';

interface NewsletterContextType {
  onSignupSuccess: () => void;
}

const NewsletterContext = createContext<NewsletterContextType | undefined>(undefined);

export const NewsletterProvider: React.FC<{
  children: React.ReactNode;
  onSignupSuccess: () => void;
}> = ({ children, onSignupSuccess }) => {
  const value = useMemo(() => ({ onSignupSuccess }), [onSignupSuccess]);
  return <NewsletterContext.Provider value={value}>{children}</NewsletterContext.Provider>;
};

export const useNewsletter = (): NewsletterContextType => {
  const context = useContext(NewsletterContext);
  if (!context) {
    throw new Error('useNewsletter must be used within NewsletterProvider');
  }
  return context;
};

export default NewsletterContext;
