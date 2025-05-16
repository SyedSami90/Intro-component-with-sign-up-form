import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/Intro-component-with-sign-up-form/',
  build: {
    assetsInlineLimit: 0  // Force JS/CSS to be separate files
  }
})