import { createBrowserRouter } from 'react-router-dom'
import Root from '../src/root/Root'
import Home from '../src/pages/home/Home'
import EstateGalleryDetails from '../src/pages/EstateGalleryDetails/EstateGalleryDetails'
import Register from '../src/pages/register/Register'
import Login from '../src/pages/login/Login'
import PrivateRouter from './PrivateRouter'
import ContactUs from '../src/pages/contactUs/ContactUs'


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
        element: <PrivateRouter><EstateGalleryDetails></EstateGalleryDetails></PrivateRouter>,
        loader: () => fetch('residential.json')
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/contact',
        element: <PrivateRouter><ContactUs></ContactUs></PrivateRouter>
      }
    ]
  }
])


export default router
