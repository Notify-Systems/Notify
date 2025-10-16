import { useContext } from "react"
import { useParams, Link } from "react-router-dom"
import { SubjectContext } from "../context/SubjectContext"
import { NotesContext } from "../context/NotesContext"
import { TasksContext } from "../context/TasksContext"
import Aside from "../components/layout/Aside"
import BarraPesquisa from "../components/layout/BarraPesquisa"
import Info from "../components/ui/Info"
import Anotacao from "../components/ui/Anotacao"
import Tarefa from "../components/ui/Tarefa"

export default function Materias() {
    const { id } = useParams();
    const { returnSubject } = useContext(SubjectContext);
    const { notes } = useContext(NotesContext);
    const { tasks } = useContext(TasksContext);
    const subjectId = Number(id);
    const subjectTitle = returnSubject(subjectId).title;

    return(
        <>
            <main>
                <BarraPesquisa />
                <Info type="subject" nome={subjectTitle} id={id} />
                <section id="anotacoes" className="estudos-container">
                    <div className="container-title">
                        <h2>Anotações</h2>
                        <Link to="add/note"><img src="/btnAdd.svg" alt="Adicionar Anotação"/></Link>
                    </div>
                    {Array.isArray(notes) && notes.map(note =>
                        note.subject === subjectId ?
                        <Anotacao key={`anotacao${note.id}`} id={note.id} nome={note.title} />
                        : ""
                    )}
                </section>
                <section id="tarefas" className="estudos-container">
                    <div className="container-title">
                        <h2>Tarefas</h2>
                        <Link to="add/task"><img src="/btnAdd.svg" alt="Adicionar Tarefa"/></Link>
                    </div>
                    {Array.isArray(tasks) && tasks.map(task =>
                        task.subject === subjectId && task.done === false ?
                        <Tarefa key={`tarefa${task.id}`} id={task.id} nome={task.title} prazo={`${task.date} - ${task.title}`} done={task.done} />
                        : ""
                    )}
                    {Array.isArray(tasks) && tasks.map(task =>
                        task.subject === subjectId && task.done === true ?
                        <Tarefa key={`tarefa${task.id}`} id={task.id} nome={task.title} prazo={`${task.date} - ${task.title}`} done={task.done} />
                        : ""
                    )}
                </section>
            </main>
            <Aside />
        </>
    )
}