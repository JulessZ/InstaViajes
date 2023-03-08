import { defineConfig } from 'vite'

// https://vitejs.dev/config/

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: `${FRONTEND_INTERNAL_PORT}`,
    hmr: {
      path: '/sockjs-node',
      clientPort: `${FRONTEND_EXTERNAL_PORT}`,
    },
  },
  plugins: [],
})