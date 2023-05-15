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
import { QueryClient, QueryClientProvider } from 'react-query'

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)
