import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Base necesaria para que los assets funcionen correctamente en GitHub Pages
  base: '/vue-directivas-spa/',
  plugins: [vue()],
})
