import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { pwaOptions } from './src/pwa/config';

export default defineConfig({
  base: './',
  plugins: [react(), VitePWA(pwaOptions)],
  build: {
    rollupOptions: {
      output: { manualChunks: (id) => (id.includes('/node_modules/katex/') ? 'latex' : undefined) },
    },
  },

  test: {
    environment: 'node',
    setupFiles: ['tests/setup.ts'],
    include: ['tests/**/*.test.{ts,tsx}'],
  },
});
