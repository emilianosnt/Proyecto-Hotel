import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss' // <--- CAMBIO 1: El import correcto
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // <--- CAMBIO 2: Se llaman como funciones
        autoprefixer(), // <--- CAMBIO 2: Se llaman como funciones
      ],
    },
  },
})