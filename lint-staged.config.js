export default {
  '*.{ts,tsx}': 'yarn run lint:fix',
  '*.{json,md,yml}': 'yarn run prettier:fix',
  '*.{css,scss}': 'yarn run stylelint:fix',
};
