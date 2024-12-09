import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Makes the server accessible on your local network
    port: 3000  // You can specify a different port if needed
  }
})
