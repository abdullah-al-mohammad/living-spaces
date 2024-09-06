import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../route/Router.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from '../route/Router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
