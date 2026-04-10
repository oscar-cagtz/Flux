import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Flux/', // Tells Vite we are hosted in a sub-directory
})