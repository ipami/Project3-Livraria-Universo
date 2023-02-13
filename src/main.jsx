import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/index.css'
import Header from './component/Header';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import ImgBanner from './images/bannerhome.jpg'
import Logo from './images/logo.png'
import Login from './pages/Login';
import Forgot from './pages/Forgot';

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Products from './pages/Products';
import Book from './pages/ProductDetail';
import UpdateBook from './pages/UpdateBook';
import NewBook from './pages/NewBook';
import AdminBook from './pages/AdminBook';
import SearchBook from './pages/SearchBook'
import Admin from './pages/Admin';
import Footer from './component/Footer';
import AdminEmployee from './pages/AdminEmployee';
import UpdateEmployee from './pages/UpdateEmployee';
import NewEmployee from './pages/NewEmployee';
import ShoppingCart from './pages/Cart';
import Contact from './pages/Contact';
import AdminClient from './pages/AdminClient';
import UpdateClient from './pages/UpdateClient';
import About from './pages/About';
import CheckOut from './pages/Checkout';
import Logged from './pages/Logged';
import RecoveryMsg from './pages/RecoveryMsg';





const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: [<Header model="default" logo={Logo} />, <Home chamada={"Confira nossas novidades literárias!"} imgbanner={ImgBanner} logo={Logo} />, <Footer logo={Logo} />],
      },
      {
        path: '/search',
        element: [<Header model="default" logo={Logo} />, <SearchBook />, <Footer logo={Logo} />],
      },
      {
        path: '/contact',
        element: [<Header model="default" logo={Logo} />, <Contact />, <Footer logo={Logo} />],
      },
      {
        path: '/about',
        element: [<Header model="default" logo={Logo} />, <About />, <Footer logo={Logo} />],
      },
      {
        path: '/products',
        element: [<Header model="default" logo={Logo} />, <Products />, <Footer logo={Logo} />],
      },
      {
        element: [<Header model="default" logo={Logo} />, <Book />, <Footer logo={Logo} />],
        path: '/products/:id',
      },
      {
        path: '/cart',
        element: [<Header model="default" logo={Logo} />, <ShoppingCart />]
      },
      {
        path: '/checkout',
        element: [<Header model="default" logo={Logo} />, <CheckOut />, <Footer logo={Logo} />]
      },
      {
        path: '/success',
        element: [<Header model="default" logo={Logo} />, <CheckOut />, <Footer logo={Logo} />]
      },
      {
        path: '/login',
        element: [<Header model="default" logo={Logo} />, <Login />, <Footer logo={Logo} />],
      },
      {
        path: '/logged',
        element: [<Header model="default" logo={Logo}/>, <Logged/>, <Footer logo={Logo}/>],
      },
      {
        path: '/login/forgot',
        element: [<Header model="default" logo={Logo} />, <Forgot />, <Footer logo={Logo} />],
      },
      {
        path: '/login/recovery',
        element: [<Header model="default" logo={Logo}/>, <RecoveryMsg />, <Footer logo={Logo}/>],
      },
      {
        path: '/admin',
        element: [<Header model="logged" logo={Logo} />, <Admin />],
      },

      {
        path: '/admin/updatebook/:id',
        element: [<Header model="logged" logo={Logo} />, <UpdateBook />],
      },
      {
        path: '/admin/newbook',
        element: [<Header model="logged" logo={Logo} />, <NewBook />],
      },
      {
        path: '/admin/book',
        element: [<Header model="logged" logo={Logo} />, <AdminBook />],
      },
      {
        path: '/admin/employee',
        element: [<Header model="logged" logo={Logo} />, <AdminEmployee />],
      },
      {
        path: '/admin/newemployee',
        element: [<Header model="logged" logo={Logo} />, <NewEmployee />],
      },
      {
        path: '/admin/updateemployee/:id',
        element: [<Header model="logged" logo={Logo} />, <UpdateEmployee />],
      },
      {
        path: '/admin/client',
        element: [<Header model="logged" logo={Logo} />, <AdminClient />],
      },
      {
        path: '/admin/updateclient/:id',
        element: [<Header model="logged" logo={Logo} />, <UpdateClient />],
      },
      {
        path: 'login?',
        element: <Navigate to="/login" />
      },
      {
        path: '/search?',
        element: <Navigate to="/search" />
      },

    ]
  }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
