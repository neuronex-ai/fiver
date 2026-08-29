import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './styles/tokens.css'
import './styles/globals.css'
import './styles/site.css'

const root = document.getElementById('root')
if (!root) throw new Error('Elemento #root não encontrado')

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

if (root.children.length > 0 || (root.textContent || '').trim().length > 0) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
