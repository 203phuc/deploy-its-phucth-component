/** @type {import('@eslint/js').Linter.FlatConfig[]} */

import { fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';
import globals from 'globals';
import { dirname } from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

import cspell from '@cspell/eslint-plugin/configs';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import sonarjs from 'eslint-plugin-sonarjs';
import storybook from 'eslint-plugin-storybook';
import tailwind from 'eslint-plugin-tailwindcss';

import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    settings: {
      react: {
        version: 'detect',
      },
      tailwindcss: {
        config: dirname(fileURLToPath(import.meta.url)) + '/src/styles/tailwind.css',
      },
    },
  },

  js.configs.recommended,

  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  cspell.recommended,

  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.es2024,
      },
    },
    plugins: {
      react: fixupPluginRules(react),
      'react-hooks': fixupPluginRules(reactHooks),
      'jsx-a11y': jsxA11y,
      sonarjs,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...jsxA11y.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...sonarjs.configs.recommended.rules,
    },
  },

  ...storybook.configs['flat/recommended'],

  prettierRecommended,
  ...tailwind.configs['flat/recommended'],

  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.yarn/**',
      'lib/**',
      'storybook/**',
      '.storybook/**',
      '**/*.config.*',
      '*.cjs',
      '*.prepare.*',
    ],
  },
];
