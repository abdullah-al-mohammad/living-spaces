import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Root from './root/Root'
import Home from './pages/home/Home'
import Estate from './pages/estate-section/Estate'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/services',
        element: <Estate></Estate>,
        loader: () => fetch('residential.json')
      }
    ]
  }
])


export default router
