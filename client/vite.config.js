import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // proxy setup for backend to frontend PORT (majorly do in frontend side code)
  // server:{
  //   proxy:{
  //     "/api":{
  //       target: "http://localhost:4000",
  //       changeOrigin: true,
  //     }
  //   }
  // }
})
