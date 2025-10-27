export default {
  '*.{ts,tsx}':
    "yarn eslint --report-unused-disable-directives --max-warnings 0 --no-warn-ignored 'src/**/*.ts' 'src/**/*.tsx'",
  '*.{json,md,yml}': 'yarn prettier --write --ignore-unknown',
};
