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
import Faq from './Components/FAQ.jsx';


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
        element: <Dashboard />,
      },
      
      {
        path: '/statistics',
        element: <Statistics/>,
      },

      {
        path: '/faq',
        element: <Faq/>,
      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
