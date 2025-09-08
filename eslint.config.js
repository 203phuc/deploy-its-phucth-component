/** @type {import('@eslint/js').Linter.FlatConfig[]} */

import { fixupPluginRules } from '@eslint/compat';
import pluginJs from '@eslint/js';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import pluginReactHook from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
import pluginSonarjs from 'eslint-plugin-sonarjs';
import globals from 'globals';
import pluginTs from 'typescript-eslint';

export default pluginTs.config(
  pluginJs.configs.recommended,
  pluginPrettierRecommended,

  {
    files: ['src/**/*.{ts,tsx}'],
  },

  {
    extends: [...pluginTs.configs.recommended],

    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react: fixupPluginRules(pluginReact),
      'react-hooks': fixupPluginRules(pluginReactHook),
      'react-refresh': pluginReactRefresh,
      'jsx-a11y': pluginJsxA11y,
      sonarjs: pluginSonarjs,
    },

    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReact.configs['jsx-runtime'].rules,
      ...pluginJsxA11y.configs.recommended.rules,
      ...pluginReactHook.configs.recommended.rules,
      ...pluginSonarjs.configs.recommended.rules,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  {
    ignores: [
      'node_modules/*',
      '**/*.config.*',
      'dist/*',
      '*.cjs',
      '*.prepare.*',
      '.yarn/*',
      'tests/*',
      '.storybook/*',
      'storybook/*',
      'lib/*',
    ],
  },
);
