import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => ({
  base: '/meu-portfolio-aiuka/',
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [
    react(),
    // Remove componentTagger for now, as it may not be installed or configured
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
