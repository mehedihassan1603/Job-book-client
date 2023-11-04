import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Homepage/Navbar/Navbar.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    children: [
      {
        path: "/navbar",
        element: <Navbar></Navbar>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
