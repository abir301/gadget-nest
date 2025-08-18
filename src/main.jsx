import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Homecontent from './Components/Homecontent.jsx';
import Dashboard from './Components/Dashboard.jsx';
import Singledata from './Components/Singledata.jsx';
import Statistics from './Components/Statistics.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Faq from './Components/Faq.jsx';
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Homecontent />,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/:category',
        element: <Homecontent />,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/product/:product_id',
        element:<Singledata/>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/:category/product/:product_id',
        element: <Singledata/>,
        loader: () => fetch('/data.json'),
      },
      

      {
        path: '/dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      
      {
        path: '/statistics',
        element: <Statistics/>,
      },

      {
        path: '/faq',
        element: <Faq/>,
      },
      {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/signup',
        element: <Signup/>,
      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
