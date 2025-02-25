import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    open: true,
    port: 5173,
    allowedHosts: ["4c205873-02fb-499b-8056-479bbc85f312-00-2mpnjhrcvh6ry.pike.repl.co"]
  }
})
