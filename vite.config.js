import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// E2B-compatible Vite configuration
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
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    },
    // Disable HTML inline proxy to avoid CSS processing issues
    minify: 'esbuild',
    cssCodeSplit: false
  },
  optimizeDeps: {
    exclude: ['public/about.html', 'public/areas-served.html']
  }
})
