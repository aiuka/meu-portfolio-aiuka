<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/meu-portfolio-aiuka/', // 👈 caminho certo pro GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
=======
import { defineConfig } from 'vite'; export default defineConfig({});
>>>>>>> Salva alterações locais antes do pull
