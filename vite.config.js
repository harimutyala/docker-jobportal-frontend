import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // default, where npm run build will output
  },
  base: '/frontapp1/', // 👈 important: matches your Tomcat context path
})
