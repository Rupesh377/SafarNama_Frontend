import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';

export default defineConfig(() => {
  // Cross-platform absolute path resolution for ES modules (Windows/Linux safe)
  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  // Access environment variables safely with string fallback checks
  const disableHmr = typeof process !== 'undefined' && process.env && process.env.DISABLE_HMR 
    ? process.env.DISABLE_HMR 
    : 'false';

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          secure: false,
        },
        '/public': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          secure: false,
        }
      },
      // Safely toggle HMR boolean behavior based on your string flag
      hmr: disableHmr !== 'true',
      // FIX: Use undefined instead of null to align with Vite's strict type requirements
      watch: disableHmr === 'true' ? undefined : {},
    },
  };
});