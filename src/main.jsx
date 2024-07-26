import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider
}
  from 'react-router-dom'
import Root from './components/Root/Root'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import AuthPrivater from './privater/AuthPrivater'
import Orders from './components/Orders/Orders'
import PrivetRoute from './PrivetRoute/PrivetRoute'
import Profile from './components/Profile/Profile'
import Dashboard from './components/Dashboard/Dashboard'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/orders",
        element: <PrivetRoute> <Orders></Orders></PrivetRoute>
      },
      {
        path: "/profile",
        element: <PrivetRoute><Profile></Profile> </PrivetRoute>
      },
      {
        path: "/dashboard",
        element: <PrivetRoute><Dashboard></Dashboard> </PrivetRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthPrivater>
      <RouterProvider router={router}></RouterProvider>
    </AuthPrivater>
  </React.StrictMode>,
)
