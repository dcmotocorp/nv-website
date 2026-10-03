import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project site from /nv-website/. Override with
// BASE_PATH=/ when deploying to a root domain or another host.
const base = process.env.BASE_PATH ?? '/nv-website/'

// GitHub Pages has no SPA rewrite rule, so a deep link like /nv-website/about
// would 404. Serving a copy of index.html as 404.html boots the app at that
// URL with the address bar intact, and the router then renders the right page.
function spaFallback() {
  return {
    name: 'spa-404-fallback',
    closeBundle() {
      const dir = resolve(__dirname, 'dist')
      copyFileSync(resolve(dir, 'index.html'), resolve(dir, '404.html'))
    },
  }
}

export default defineConfig({
  base,
  plugins: [react(), spaFallback()],
})
