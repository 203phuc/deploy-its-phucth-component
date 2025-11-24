export const isValidEmail = (email: string): boolean => {
  const trimmed = email.trim();
  return trimmed.includes('@') && trimmed.includes('.') && trimmed.indexOf('@') < trimmed.lastIndexOf('.');
};
