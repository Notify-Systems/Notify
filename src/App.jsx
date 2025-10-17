import { Outlet } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Config from "./components/layout/Config"


export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme === "dark" ? "dark" : ""}`}>
      <Config />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}