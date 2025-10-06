import { Outlet } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"
import Header from "./components/layout/Header"
import Aside from "./components/layout/Aside"
import Footer from "./components/layout/Footer"


export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme === "dark" ? "dark" : ""}`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}