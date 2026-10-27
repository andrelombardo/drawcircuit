import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  base: './',
  plugins: [
    react(),
    {
      name: 'bundled-font-css',
      enforce: 'pre',
      transform(source, id) {
        const path = id.split('?')[0];
        // MathText overrides all KaTeX faces with the local circuit font stack.
        // Retain KaTeX layout rules without publishing unused font binaries.
        if (path.endsWith('/katex/dist/katex.min.css'))
          return { code: source.replace(/@font-face\s*\{[^}]*\}/g, ''), map: null };
        // Supported browsers load WOFF2; the duplicate WOFF fallback is unused.
        if (/\/@fontsource\/inter\/latin-\d+\.css$/.test(path))
          return {
            code: source.replace(/,\s*url\([^)]*\.woff\)\s*format\(['"]woff['"]\)/g, ''),
            map: null,
          };
      },
    },
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) =>
          id.includes('/node_modules/katex/') ? 'latex' : undefined,
      },
    },
  },
});
