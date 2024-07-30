import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Cart from './pages/Cart.jsx';
import { useEffect } from 'react';
//importing error page
import Notfound from './pages/Notfound.jsx';
// Importing the necessary modules from react-router-dom for routing
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Importing redux-related modules
import { Provider } from 'react-redux';
import { store } from './redux/store.jsx';

// Creating the router with a single route that points to the App component
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Notfound />
  },
  {
    path:'/cart',
    element:<Cart/>
  }
]);

// Rendering the application into the root element
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* Navbar component to display the navigation bar */}
    <Navbar />
    {/* Wrapping the main application with the RouterProvider to enable routing */}
    <RouterProvider router={router}/>
    {/* Footer component to display the footer */}
    <Footer />
  </Provider>,
);
