import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base: the build works at the domain root (Vercel) or under any subpath.
export default defineConfig({
  base: './',
  plugins: [react()],
  // The native file watcher sometimes misses edits on Windows; polling keeps HMR reliable.
  server: { watch: { usePolling: true, interval: 200 } },
})
