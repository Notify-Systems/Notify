import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { GradesContext } from "../context/GradesContext"
import { SubjectContext } from "../context/SubjectContext"
import { NotesContext } from "../context/NotesContext"
import { TasksContext } from "../context/TasksContext";
import Aside from "../components/layout/Aside"
import BarraPesquisa from "../components/layout/BarraPesquisa"
import Materia from "../components/ui/Materia"
import Anotacao from "../components/ui/Anotacao"
import Tarefa from "../components/ui/Tarefa"
import normalizeText from "../normalizeText"

export default function Home() {
    const { returnGrade }  = useContext(GradesContext);
    const { subjects, returnSubject } = useContext(SubjectContext);
    const { notes } = useContext(NotesContext);
    const { tasks } = useContext(TasksContext);
    const [ search, setSearch ] = useState("");

    return (
        <>
            <main>
                <BarraPesquisa search={search} setSearch={setSearch} />
                <section id="materias" className="estudos-container">
                    <div className="container-title">
                        <h2>Suas Máterias</h2>
                        <Link to="add/subject"><img src={`${import.meta.env.BASE_URL}/btnAdd.svg`} alt="Adicionar Matéria"/></Link>
                    </div>
                    {Array.isArray(subjects) && subjects.map(subject => (
                        <Materia
                            key={`materia${subject.id}`}
                            id={subject.id}
                            nome={subject.title}
                            serie={returnGrade(subject.grade) != null ? returnGrade(subject.grade).title : ""}
                            display={normalizeText(subject.title).includes(normalizeText(search)) ? true : false}
                        />
                    ))}
                </section>
                <section id="anotacoes" className="estudos-container">
                    <div className="container-title">
                        <h2>Suas Anotações</h2>
                        <Link to="add/note"><img src={`${import.meta.env.BASE_URL}/btnAdd.svg`} alt="Adicionar Anotação"/></Link>
                    </div>
                    {Array.isArray(notes) && notes.map(note => (
                        <Anotacao
                            key={`anotacao${note.id}`}
                            id={note.id}
                            nome={note.title}
                            materia={returnSubject(note.subject) != null ? returnSubject(note.subject).title : ""}
                            display={normalizeText(note.title).includes(normalizeText(search)) ? true : false}
                        />
                    ))}
                </section>
                <section id="tarefas" className="estudos-container">
                    <div className="container-title">
                        <h2>Suas Tarefas</h2>
                        <Link to="add/task"><img src={`${import.meta.env.BASE_URL}/btnAdd.svg`} alt="Adicionar Tarefa"/></Link>
                    </div>
                    {Array.isArray(tasks) && tasks.map(task => (
                        task.done === false ?
                        <Tarefa
                            key={`tarefa${task.id}`}
                            id={task.id}
                            nome={task.title}
                            materia={returnSubject(task.subject) != null ? returnSubject(task.subject).title : ""}
                            prazo={`${task.date.split("-").join("/")} - ${task.time}`}
                            done={task.done}
                            display={normalizeText(task.title).includes(normalizeText(search)) ? true : false}
                        />
                        : ""
                    ))}
                    {Array.isArray(tasks) && tasks.map(task => (
                        task.done === true ?
                        <Tarefa
                            key={`tarefa${task.id}`}
                            id={task.id}
                            nome={task.title}
                            materia={returnSubject(task.subject) != null ? returnSubject(task.subject).title : ""}
                            prazo={`${task.date.split("-").join("/")} - ${task.time}`}
                            done={task.done}
                            display={normalizeText(task.title).includes(normalizeText(search)) ? true : false}
                        />
                        : ""
                    ))}
                </section>
            </main>
            <Aside select="Menu" />
        </>
    )
}