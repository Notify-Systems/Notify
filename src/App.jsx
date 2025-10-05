import { Outlet } from "react-router-dom"
import { useContext } from "react"
import Header from "./components/layout/Header"
import Aside from "./components/layout/Aside"
import Footer from "./components/layout/Footer"

export default function App() {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Aside />
      <Footer />
    </div>
  )
}