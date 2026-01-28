import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    tsconfigPaths(),
    !process.env.VITEST &&
      checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint src/**/*.ts src/**/*.tsx',
          useFlatConfig: true,
        },
      }),
  ],
  build: {
    sourcemap: true,
  },
});
