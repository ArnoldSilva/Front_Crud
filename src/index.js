import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import SignIn from './components/Sign_In';
import SignUp from "./components/Sign_up";
import Forget from "./components/Forgot";
import Reset from "./components/Reset";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Favorites from './components/Favorites';
import ProfilePage from './components/ProfilePage';
import Verify from './components/Verify';
import AddProduct from "./components/Product/AddProduct";
import EditProduct from "./components/Product/EditProduct";
import ConsultarById from "./components/Product/ConsultarById";
import UpdateImage from "./components/UpdateImage";
import GetAll from "./components/GetAll";
import Errorpage from "./components/ErrorPage";
import Productpage from "./components/ProductsPage";



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/reset',
        element: <Reset />,
      },
      {
        path: '/forget',
        element: <Forget />
      },
      {
        path:  "/productspage",
        element: <Productspage />
      },
      {
        path: '/verify',
        element: <Verify />
      },
      {
        path: '/addproduct',
        element: <AddProduct />,
      },
      {
        path: '/editproduct',
        element: <EditProduct />,
      },
      {
        path: '/consultar',
        element: <ConsultarById />,
      },
      {
        path: '/updateimage',
        element: <UpdateImage />,
      },
      {
        path: '/getall',
        element: <GetAll />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
      {
        path: '/profilepage',
        element: <ProfilePage />,
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
