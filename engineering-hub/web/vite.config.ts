/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Static, no-backend build. Relative base so dist/ can be served from any path
// (important for AWS Amplify sub-path hosting of the Engineering Hub app).
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'es2020',
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
  },
});
