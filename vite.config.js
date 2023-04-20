import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~bootstrap': path.resolve((__dirname, 'node_modules/bootstrap')),
      '@assets': path.resolve((__dirname, './src/assets/')),
      '@components': path.resolve((__dirname, './src/components/')),
      '@views': path.resolve((__dirname, './src/views/')),
      '@mocks': path.resolve((__dirname, './mocks/')),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
});
