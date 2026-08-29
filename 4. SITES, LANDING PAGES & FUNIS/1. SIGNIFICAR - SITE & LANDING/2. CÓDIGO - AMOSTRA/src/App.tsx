import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import ContentPage from './pages/ContentPage'
import SitemapPage from './pages/SitemapPage'
import NotFoundPage from './pages/NotFoundPage'
import { getRoute } from './router/routes'
import { useDeviceMode } from './hooks/useDeviceMode'
import { applyClientHead } from './seo/head'

export default function App({ path }: { path?: string }) {
  const currentPath = path || (typeof window !== 'undefined' ? `${window.location.pathname}${window.location.search}` : '/')
  const route = getRoute(currentPath)
  const device = useDeviceMode()

  useEffect(() => {
    applyClientHead(currentPath)
    document.documentElement.dataset.device = device
  }, [currentPath, device])

  if (route.kind === 'home') return <HomePage device={device} />
  if (route.kind === 'landing') return <LandingPage device={device} />
  if (route.kind === 'content') return <ContentPage path={route.path} device={device} />
  if (route.kind === 'sitemap') return <SitemapPage device={device} />
  return <NotFoundPage device={device} />
}
