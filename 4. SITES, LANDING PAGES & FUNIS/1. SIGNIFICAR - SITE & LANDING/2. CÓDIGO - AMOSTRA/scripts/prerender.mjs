import { access, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

async function resolveServerEntry() {
  const dir = path.resolve('dist/server')
  const files = await readdir(dir)
  const file = files.find((name) => /^entry-server\.(m?js)$/.test(name)) || files.find((name) => name.endsWith('.js'))
  if (!file) throw new Error('Bundle SSR não encontrado em dist/server')
  return path.join(dir, file)
}

export async function prerender() {
  const templatePath = path.resolve('dist/index.html')
  await access(templatePath)
  const template = await readFile(templatePath, 'utf8')
  const entry = await resolveServerEntry()
  const mod = await import(`${pathToFileURL(entry).href}?t=${Date.now()}`)
  const routes = mod.getPrerenderRoutes()

  for (const route of routes) {
    const appHtml = mod.render(route)
    const headHtml = mod.getHead(route)
    const html = template
      .replace('<!--seo-head-->', headHtml)
      .replace('<!--app-html-->', appHtml)

    const output = route === '/' ? path.resolve('dist/index.html') : path.resolve(`dist${route}/index.html`)
    await mkdir(path.dirname(output), { recursive: true })
    await writeFile(output, html, 'utf8')
  }

  const notFoundHtml = template
    .replace('<!--seo-head-->', mod.getHead('/pagina-nao-encontrada'))
    .replace('<!--app-html-->', mod.render('/pagina-nao-encontrada'))
  await writeFile(path.resolve('dist/404.html'), notFoundHtml, 'utf8')
  await rm(path.resolve('dist/server'), { recursive: true, force: true })
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  prerender().catch((error) => {
    console.error(error)
    process.exit(1)
  })
}
