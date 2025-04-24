import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { EquipoProvider } from './context/EquipoContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EquipoProvider>
      <App />
      <ToastContainer />
    </EquipoProvider>
  </StrictMode>,
)
