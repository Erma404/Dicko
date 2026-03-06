import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DevisProvider } from './contexts/DevisContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DevisProvider>
      <App />
    </DevisProvider>
  </StrictMode>,
)
