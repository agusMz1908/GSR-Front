import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from '../src/pages/Login'
import Layout from '../src/components/Layout'

const cambiarTexto = 'Modo Claro';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/home',
    element: <Layout />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
