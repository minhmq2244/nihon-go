import { cpSync, existsSync } from 'node:fs'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'
import { buildContent } from './scripts/build-content'

/** Rebuild public/data when a content .md file changes, then reload the page. */
function contentWatcher(): Plugin {
  return {
    name: 'content-watcher',
    configureServer(server) {
      server.watcher.add('content')
      let timer: ReturnType<typeof setTimeout> | undefined
      server.watcher.on('change', (file) => {
        if (!/[\\/]content[\\/].*\.md$/.test(file)) return
        clearTimeout(timer)
        timer = setTimeout(() => {
          const { errors } = buildContent()
          for (const e of errors) server.config.logger.error('content: ' + e)
          server.ws.send({ type: 'full-reload' })
        }, 200)
      })
    },
  }
}

/** Copy the font maps and decoders pdf.js loads at runtime into public/pdfjs (gitignored). */
function pdfjsAssets(): Plugin {
  return {
    name: 'pdfjs-assets',
    buildStart() {
      for (const dir of ['cmaps', 'standard_fonts', 'wasm', 'iccs']) {
        const to = `public/pdfjs/${dir}`
        if (!existsSync(to)) cpSync(`node_modules/pdfjs-dist/${dir}`, to, { recursive: true })
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), contentWatcher(), pdfjsAssets()],
  server: { watch: { ignored: ['**/public/data/**'] } },
})
