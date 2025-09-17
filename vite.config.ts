import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["quill-mention"],
  },
  server: {
    host: '0.0.0.0',     // listen on all network interfaces inside Docker for dev mode
    allowedHosts: 'all'  // allow all hosts for dev server access
  }
})
