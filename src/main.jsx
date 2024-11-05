import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Homecontent from './Components/Homecontent.jsx';
import Dashboard from './Components/Dashboard.jsx';
import Singledata from './Components/Singledata.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '/',
        element: <Homecontent />,
        loader: () => fetch('/src/data.json'),
      },
      {
        path: '/:category',
        element: <Homecontent />,
        loader: () => fetch('/src/data.json'),
      },
      {
        path: '/product/:product_id',
        element:<Singledata/>,
        loader: () => fetch('/src/data.json')
      },
      {
        path: '/:category/product/:product_id',
        element: <Singledata/>,
        loader: () => fetch('/src/data.json'),
      },
      

      {
        path: '/dashboard',
        element: <Dashboard />,
      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
