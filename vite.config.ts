/// <reference types="vitest" />

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json',
      rollupTypes: true,
    }),
    !process.env.VITEST &&
      checker({
        typescript: true,
        eslint: {
          lintCommand: "eslint src/**/*.ts src/**/*.tsx",
          useFlatConfig: true,
        },
      }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: 'index',
    },
    sourcemap: true,
    assetsDir: './src/assets',
    copyPublicDir: false,
    rollupOptions: {
      external: ['react', 'react-dom'],
      input: {
        main: path.resolve(__dirname, 'src/index.ts'),
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        preserveModules: false,
        manualChunks: undefined,
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.prepare.ts',
    coverage: {
      reportsDirectory: './tests/unit/coverage',
      provider: 'istanbul',
    },
  },
});
