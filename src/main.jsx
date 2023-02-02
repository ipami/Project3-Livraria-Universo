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


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   }, 
//   {
//     path: 'contact',
//     element: <Contact/>
//   }, 
// ])
const navDefault = ['Quem somos', 'Nossos Produtos', 'Carrinho', 'Login']
const navLogin = ['Sair']

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: [<Header model="default" logo={Logo}/>,<Home chamada={"Isso aqui é um teste!"} imgbanner={ImgBanner} logo={Logo} />]
      },
      {
        path: 'about',
        element: <Home />
      },
      {
        path: 'products',
        element: <Home />
      },
      {
        path: '/product/:id',
        element: <Home />
      },
      {
        path: 'cart',
        element: <Contact />
      },
      {
        path: 'checkout',
        element: <Contact />
      },
      {
        path: 'login',
        element: <Contact />
      },
      {
        path: 'user',
        element: <Contact />
      },
      {
        path: 'admin',
        element: <Contact />,
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
