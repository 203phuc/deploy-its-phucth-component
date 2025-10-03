import type { Preview } from '@storybook/react-vite';
import { themes } from 'storybook/theming';

import '../src/styles/tailwind.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      dark: themes.dark,
      light: themes.normal,
      darkClass: 'lights-out',
      lightClass: 'lights-in',
      stylePreview: true,
      classTarget: 'html',
    },
  },
};

export default preview;
