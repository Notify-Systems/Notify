import { Outlet } from "react-router-dom"
import { useContext } from "react"
import { NotesContext } from "./context/NotesContext"
import { TasksContext } from "./context/TasksContext"
import { SubjectContext } from "./context/SubjectContext"
import { GradesContext } from "./context/GradesContext"
import Header from "./components/layout/Header"
import Aside from "./components/layout/Aside"
import Footer from "./components/layout/Footer"


export default function App() {
  const { notes } = useContext(NotesContext);
  const { tasks } = useContext(TasksContext);
  const { subjects } = useContext (SubjectContext);
  const { Grades } = useContext (GradesContext);
  

  return (
    <div className="container">
      <Header />
      <Outlet />
      <Aside />
      <Footer />
    </div>
  )
}