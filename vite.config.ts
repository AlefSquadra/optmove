import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
      include: ['@optmove/design-system'], // Garanta que a dependência local esteja otimizando.
  },
})
