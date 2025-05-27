import { defineConfig } from 'vite'; // Esta linha é crucial
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/meu-portfolio-aiuka/',
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
