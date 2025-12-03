export const validatePassword = (value: string): string => {
  const validations = [
    { test: (v: string) => !!v, message: 'Password is required' },
    {
      test: (v: string) => v.length >= 8 && v.length <= 128,
      message: 'Password must be 8-128 characters long',
    },
    {
      test: (v: string) => /[A-Z]/.test(v),
      message: 'Password must contain at least one uppercase letter',
    },
    {
      test: (v: string) => /[a-z]/.test(v),
      message: 'Password must contain at least one lowercase letter',
    },
    {
      test: (v: string) => /\d/.test(v),
      message: 'Password must contain at least one number',
    },
    {
      test: (v: string) => /[^A-Za-z\d]/.test(v),
      message: 'Password must contain at least one special character',
    },
  ];

  const failedValidation = validations.find((validation) => !validation.test(value));
  return failedValidation ? failedValidation.message : '';
};

export const passwordsMatch = (password: string, confirmPassword: string): boolean => {
  return password === confirmPassword;
};
