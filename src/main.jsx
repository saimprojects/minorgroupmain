import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const container = document.getElementById('root')
const app = <React.StrictMode><App /></React.StrictMode>
if (container.dataset.prerendered === 'true') {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
