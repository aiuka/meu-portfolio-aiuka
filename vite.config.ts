import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import componentTagger from 'vite-plugin-component-tagger'; // Adjust if this is a custom plugin or different package

export default defineConfig(({ mode }) => ({
  base: '/meu-portfolio-aiuka/',
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
