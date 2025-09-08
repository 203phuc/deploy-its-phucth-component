import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withScreenshot } from 'storycap';

import '../src/styles/globals.scss';
import './preview.scss';

const customViewports = {
  pc: {
    name: 'PC',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  sp: {
    name: 'Smartphone',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
};

/**
 * customViewports -> storycapCustomViewports (tripped `px` from width and height)
 */
const storycapCustomViewports = Object.entries(customViewports).reduce(
  (acc, [key, value]) => {
    acc[key.toUpperCase()] = {
      width: Number(value.styles.width.replace('px', '')),
      height: Number(value.styles.height.replace('px', '')),
    };
    return acc;
  },
  {} as Record<string, Record<string, number>>,
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: { viewports: customViewports },
    screenshot: {
      viewports: storycapCustomViewports,
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
  decorators: [
    // @ts-expect-error - Storybook types are incorrect
    withScreenshot,
  ],
};

export default preview;
