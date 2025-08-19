import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Homecontent from './Components/Homecontent.jsx';
import Singledata from './Components/Singledata.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Faq from './Components/Faq.jsx';
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';
import Cart from './Components/Cart.jsx';
import Wishlist from './Components/Wishlist.jsx';
import Shop from './Components/Shop.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homecontent />,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/shop/:category',
        element: <Shop />,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/shop',
        element: <Shop />,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/shop/product/:product_id',
        element: <Singledata />,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/shop/:category/product/:product_id',
        element: <Singledata />,
        loader: () => fetch('/data.json'),
      },

      {
        path: '/cart',
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: '/wishlist',
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },

      {
        path: '/faq',
        element: <Faq />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
