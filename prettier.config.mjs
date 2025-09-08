/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */

export default {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/styles/tailwind.scss',
  printWidth: 110,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'auto',
};
