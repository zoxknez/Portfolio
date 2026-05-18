import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Removed incorrect `exclude: ['lucide-react']` — that prevented Vite from
  // pre-bundling lucide-react, causing hundreds of individual module requests in dev
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split heavy dependencies into their own chunks
          'react-vendor': ['react', 'react-dom'],
          'motion': ['framer-motion'],
          'lucide': ['lucide-react'],
        },
      },
    },
  },
});
