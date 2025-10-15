import { useContext } from "react"
import { SubjectContext } from "../context/SubjectContext"
import { TasksContext } from "../context/TasksContext"
import BarraPesquisa from "../components/layout/BarraPesquisa"
import Aside from "../components/layout/Aside"
import Tarefa from "../components/ui/Tarefa"

export default function Cronograma() {
    const { returnSubject } = useContext(SubjectContext);
    const { tasks } = useContext(TasksContext);

    function atraso(date) {
        const now = new Date();
        const nowDate = now.getDate();
        const nowTime = now.getHours();
        const taskDate = date.getDate();
        const taskTime = date.getHours();
        if(nowDate > taskDate)
            return true;
        else if(nowDate === taskDate) {
            if(nowTime > taskTime)
                return true;
            else
                return false;
        }
        else
            return false;
    }

    return (
        <>
            <main>
                <BarraPesquisa />
                <section id="pendentes" className="estudos-container">
                    <div className="container-title">
                        <h2>Tarefas Pendentes</h2>
                    </div>
                    {Array.isArray(tasks) && tasks.map(task => (
                        task.done === false ? atraso(new Date(`${task.date}T${task.time}`)) === false ?
                        <Tarefa
                            key={`tarefa${task.id}`}
                            id={task.id}
                            nome={task.title}
                            materia={returnSubject(task.subject).title}
                            prazo={`${task.date.split("-").join("/")} - ${task.time}`}
                            done={task.done}
                        />
                        : "" : ""
                    ))}
                </section>
                <section id="atraso" className="estudos-container">
                    <div className="container-title">
                        <h2>Em atraso</h2>
                    </div>
                    {Array.isArray(tasks) && tasks.map(task => (
                        task.done === false ? atraso(new Date(`${task.date}T${task.time}`)) === true ?
                        <Tarefa
                            key={`tarefa${task.id}`}
                            id={task.id}
                            nome={task.title}
                            materia={returnSubject(task.subject).title}
                            prazo={`${task.date.split("-").join("/")} - ${task.time}`}
                            done={task.done}
                        />
                        : "" : ""
                    ))}
                </section>
            </main>
            <Aside select="Cronograma" />
        </>
    )
}