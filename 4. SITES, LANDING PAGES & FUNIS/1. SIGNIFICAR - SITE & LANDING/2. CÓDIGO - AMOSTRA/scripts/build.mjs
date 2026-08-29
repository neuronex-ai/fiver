import { build } from 'vite'
import { prerender } from './prerender.mjs'

await build()
await build({
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: 'dist/server',
    emptyOutDir: true,
  },
})
await prerender()
console.log('Build concluído: cliente + SSR temporário + páginas estáticas prerenderizadas.')
