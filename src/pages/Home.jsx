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

export default function Home() {
    const { returnGrade }  = useContext(GradesContext);
    const { subjects, returnSubject } = useContext(SubjectContext);
    const { notes } = useContext(NotesContext);
    const { tasks } = useContext(TasksContext);
    const [subjectList, setSubjects] = useState([]);
    const [noteList, setNotes] = useState([]);
    const [taskList, setTasks] = useState([]);

    useEffect(() => {
        const newSubjects = subjects.map(subject => (
            <Materia key={`materia${subject.id}`} nome={subject.title} serie={returnGrade(subject.grade)} />
        ));
        setSubjects(newSubjects);
    }, [subjects]);
    
    useEffect(() => {
        const newNotes = notes.map(note => (
            <Anotacao key={`anotacao${note.id}`} nome={note.title} materia={returnSubject(note.subject)} />
        ));
        setNotes(newNotes);
    }, [notes]);

    useEffect(() => {
        const newTasks = tasks.map(task => (
            <Tarefa
                key={`tarefa${task.id}`}
                nome={task.title}
                materia={returnSubject(task.subject)}
                prazo={`${task.date} - ${task.time}`}
                done={task.done}
            />
        ));
        setTasks(newTasks);
    }, [tasks]);

    return (
        <>
            <main>
                <BarraPesquisa />
                <section id="materias" className="estudos-container">
                    <div className="container-title">
                        <h2>Suas Máterias</h2>
                        <Link to="add/subject"><img src="/btnAdd.svg" alt="Adicionar Matéria"/></Link>
                    </div>
                    {subjectList}
                </section>
                <section id="anotacoes" className="estudos-container">
                    <div className="container-title">
                        <h2>Suas Anotações</h2>
                        <Link to="add/note"><img src="/btnAdd.svg" alt="Adicionar Anotação"/></Link>
                    </div>
                    {noteList}
                </section>
                <section id="tarefas" className="estudos-container">
                    <div className="container-title">
                        <h2>Suas Tarefas</h2>
                        <Link to="add/task"><img src="/btnAdd.svg" alt="Adicionar Tarefa"/></Link>
                    </div>
                    {taskList}
                </section>
            </main>
            <Aside select="Menu" />
        </>
    )
}