import { Outlet } from "react-router-dom"
import { useContext } from "react"
import { NotesContext } from "./context/NotesContext"
import { TasksContext } from "./context/TasksContext"
import Header from "./components/layout/Header"
import Aside from "./components/layout/Aside"
import Footer from "./components/layout/Footer"

export default function App() {
  const { notes } = useContext(NotesContext);
  const { tasks } = useContext(TasksContext);

  return (
    <div className="container">
      <Header />
      <Outlet />
      <Aside />
      <Footer />
    </div>
  )
}