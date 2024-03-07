import { Outlet, createBrowserRouter } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Homepage from "./Pages/Homepage"
import Header from "./Components/Footer"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    <div className=' bg-[#211951] text-white max-w-screen min-h-screen h-full sm:px-0'>
      <Header />
      <Outlet />
      <Navbar />
    </div>
  )
}

export default App
