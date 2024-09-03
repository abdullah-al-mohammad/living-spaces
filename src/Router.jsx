import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Root from './root/Root'
import Home from './pages/home/Home'
import EstateGalleryDetails from './pages/EstateGalleryDetails/EstateGalleryDetails'
import Register from './pages/register/Register'
import Login from './pages/login/Login'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('residential.json')
      },
      {
        path: '/estate/:id',
        element: <EstateGalleryDetails></EstateGalleryDetails>,
        loader: () => fetch('residential.json')
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])


export default router
