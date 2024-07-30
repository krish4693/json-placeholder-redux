import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Album from './components/Album.jsx';
import './index.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Cart from './pages/Cart.jsx';
import Notfound from './pages/Notfound.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Album />,
    errorElement: <Notfound />
  },
  {
    path: '/cart',
    element: <Cart />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <Navbar /> */}
    <RouterProvider router={router} />
    <Footer />
  </Provider>,
);
