import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import {PageNotFound} from '../pages/pagenotfound/PageNotFound';
import CountryInfo from '../pages/countryinfo/CountryInfo';


const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement:<PageNotFound/>,
      children: [
        {
          path: 'country/:countryname',
          element: <CountryInfo />,
        },
      ],
    },
  ])
  
  const Router = () => <RouterProvider router={router} />
  
  export { Router }