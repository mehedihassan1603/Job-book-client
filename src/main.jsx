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
import JobDetails from './Components/JobDetails/JobDeatils.jsx';
import MyBids from './Components/My Bids/MyBids.jsx';
import Update from './Components/Update/Update.jsx';
import BidRequests from './Components/BidRequests/BidRequests.jsx';
import NotFoundPage from './Components/NotFound/NotFoundPage.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('https://job-book-server.vercel.app/job')
      },
      {
        path: "/job",
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
      },
      {
        path: "/jobdata",
        element: <TabData></TabData>,
        loader: ()=> fetch('https://job-book-server.vercel.app/job')
      },
      {
        path: "/details/:_id",
        loader: () => fetch("https://job-book-server.vercel.app/job"),
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>
      },
      {
        path: "/my-posted-job",
        element: <PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>,
        loader: () => fetch("https://job-book-server.vercel.app/job"),
      },
      {
        path: "/my-bids",
        // loader: () => fetch('https://job-book-server.vercel.app/bidjob'),
        element: <PrivateRoute><MyBids></MyBids></PrivateRoute>,
      },
      {
        path: '/update/:_id',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params})=> fetch(`https://job-book-server.vercel.app/job/${params._id}`)
      },
      {
        path: "/bid-requests",
        element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>,
        // loader: () => fetch('https://job-book-server.vercel.app/bidjob'),
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
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
)
