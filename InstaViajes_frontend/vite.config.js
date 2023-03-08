import { defineConfig } from 'vite'

// https://vitejs.dev/config/

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: `8080`,
    hmr: {
      path: '/sockjs-node',
      clientPort: `80`,
    },
  },
  plugins: [],
})