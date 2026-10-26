import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// Load Bootstrap before the local styles so they can override it.
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'// Mount the application in index.html and share one router across all pages.
createRoot(document.getElementById('root')).render(
  <StrictMode>    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
