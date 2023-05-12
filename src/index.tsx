import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Diary from 'pages/Diary'
import Form from 'pages/Form'
import Login from 'pages/Login'
import Main from 'pages/Main'
import MyPage from 'pages/MyPage'
import 'styles/global.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/form',
    element: <Form />,
  },
  {
    path: '/my',
    element: <MyPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/diary/:id',
    element: <Diary />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
)
