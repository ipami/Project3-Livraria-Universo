import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/index.css'
import Header from './component/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import ContactDetails from './pages/ContactDetails';
import ImgBanner from './images/bannerhome.jpg'
import Logo from './images/logo.png'


import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Forgot from './pages/Forgot';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: [<Header model="default" logo={Logo}/>,<Home chamada={"Confira nossas novidades literárias!"} imgbanner={ImgBanner} logo={Logo} />]
      },
      {
        path: 'about',
        element: [<Header model="default" logo={Logo}/>]
      },
      {
        path: 'products',
        element: <Header model="default" logo={Logo}/>
      },
      {
        path: '/product/:id',
        element: <Header model="default" logo={Logo}/>
      },
      {
        path: 'cart',
        element: <Header model="default" logo={Logo}/>
      },
      {
        path: 'checkout',
        element: <Header model="default" logo={Logo}/>
      },
      {
        path: 'login',
        element: [<Header model="default" logo={Logo}/>, <Login />]
      },
      {
        path: 'login/forgot',
        element: [<Header model="default" logo={Logo}/>, <Forgot />]
      },
      {
        path: 'user',
        element: <Header model="login" logo={Logo}/>
      },
      {
        path: 'admin',
        element: <Header model="login" logo={Logo}/>,
        children: [
          {
            path: 'sales',
            element: <Contact />
          },
          {
            path: 'employee',
            element: <Contact />
          },
          {
            path: 'book',
            element: <Contact />
          },
        ]
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: '/contact/:id',
        element: <ContactDetails />
      },

      // Navigate para páginas não existentes
      {
        path: 'oldcontact',
        element: <Navigate to="/contact" />
      },
    ]
  }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
