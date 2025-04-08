import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
      port: 5173,
      proxy: {
          '/albums': {
            target: 'http://localhost:3000'
          }, 
          '/rankings': {
            target: 'http://localhost:8000'
          },
          '/spotify-album': {
            target: 'http://localhost:3001'
          },
          '/albumbot': {
            target: 'http://localhost:7000'
          },
          '/billboard': {
            target: 'http://localhost:2000'
          }
      }
    }
  })