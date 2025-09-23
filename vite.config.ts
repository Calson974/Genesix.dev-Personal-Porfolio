import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    open: true,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: false,
    rollupOptions: {
      external: ['@hookform/resolvers/yup']
    }
  },
  optimizeDeps: {
    exclude: [
      '@emotion/react', 
      '@emotion/styled'
    ],
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      '@hookform/resolvers',
      'yup',
      'react-helmet-async'
    ],
    esbuildOptions: {
      target: 'es2020',
      supported: { 
        'top-level-await': true 
      }
    }
  }
})