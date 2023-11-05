import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Homepage/Home/Home.jsx';
import Layout from './Components/Layout/Layout.jsx';
import Login from './Components/RegisterLogin/Login/Login.jsx';
import Register from './Components/RegisterLogin/Register/Register.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import AddJob from './Components/AddJob/AddJob.jsx';
import MyPostedJob from './Components/MyPostedJob/MyPostedJob.jsx';
import TabData from './Components/Homepage/TabData/TabData.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/job')
      },
      {
        path: "/job",
        element: <AddJob></AddJob>,
      },
      {
        path: "/jobdata",
        element: <TabData></TabData>,
        loader: ()=> fetch('http://localhost:5000/job')
      },
      {
        path: "/my-posted-job",
        element: <MyPostedJob></MyPostedJob>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
)
