import { seoRoutes } from './seo-routes.mjs'

const siteUrl = (process.env.VITE_SITE_URL || '').replace(/\/$/, '')
const key = process.env.INDEXNOW_KEY || ''

if (!siteUrl || !key) {
  console.error('Defina VITE_SITE_URL e INDEXNOW_KEY antes de enviar URLs ao IndexNow.')
  process.exit(1)
}

const host = new URL(siteUrl).host
const urlList = seoRoutes.map((route) => `${siteUrl}${route === '/' ? '/' : route}`)
const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation: `${siteUrl}/${key}.txt`, urlList }),
})

console.log(`IndexNow: HTTP ${response.status}`)
if (!response.ok) process.exit(1)
