import { useContext } from "react"
import { TasksContext } from "../../context/TasksContext"
import { Link } from "react-router-dom"

export default function Tarefa({ id, nome, materia, prazo, done }) {
    const { toggleTask } = useContext(TasksContext);

    return (
        <article className="tarefa">
            <div className="info">
                <h3>{nome}</h3>
                <Link to="materia">{materia}</Link>
                <p>{prazo}</p>
            </div>
            <div className="items">
                <div className="toggle" onClick={() => toggleTask(id)} tabIndex={-1}>
                    {done && <img src="/check.svg" tabIndex={-1} />}
                </div>
                <Link to="/tarefa">
                    <div className="link">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Link>
            </div>
        </article>
    )
}