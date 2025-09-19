import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
    // Add the assetsInclude option to treat .JPG files as static assets
  assetsInclude: ['**/*.JPG'],
  base: "/thanapong-portfolio",
})
