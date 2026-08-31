import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        shop: 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  resolve: {
    alias: {
      '@mfe/types': path.resolve(__dirname, '../../libs/types/src'),
      '@mfe/ui': path.resolve(__dirname, '../../libs/ui/src'),
    },
  },
  server: {
    port: 5000,
    cors: true,
  },
  preview: {
    port: 5000,
    cors: true,
  },
  build: {
    target: 'esnext',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
  },
});
