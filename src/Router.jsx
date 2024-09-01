import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Root from './root/Root'
import Home from './pages/home/Home'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  }
])


export default router
