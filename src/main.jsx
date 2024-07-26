import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//redux packages
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* wraps app with provider */}
      <RouterProvider store={store}>

        <App />
      
      </RouterProvider>
  </React.StrictMode>,
)
