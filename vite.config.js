import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// E2B-compatible Vite configuration with Coolify deployment fixes
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: false,
    allowedHosts: ['.e2b.app', 'localhost', '127.0.0.1']
  },
  build: {
    // Fix for Coolify deployment - ensure proper base path
    base: './',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    },
    // Disable HTML inline proxy to avoid CSS processing issues
    minify: 'esbuild',
    cssCodeSplit: false,
    // Ensure assets are properly referenced
    assetsInlineLimit: 0
  },
  optimizeDeps: {
    exclude: ['public/about.html', 'public/areas-served.html']
  }
})
