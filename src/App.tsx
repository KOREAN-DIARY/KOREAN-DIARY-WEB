import CompletePage from 'pages/Complete'
import Diary from 'pages/Diary'
import Form from 'pages/Form'
import Login from 'pages/Login'
import Main from 'pages/Main'
import MyPage from 'pages/MyPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/form/:date',
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
  {
    path: '/complete',
    element: <CompletePage />,
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
