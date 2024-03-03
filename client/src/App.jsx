import { Outlet, createBrowserRouter } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Homepage from "./Pages/Homepage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  

])

function App() {

  return (
    <div className=' bg-black text-white h-screen sm:px-0'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
