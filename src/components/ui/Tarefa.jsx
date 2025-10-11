import { Link } from "react-router-dom"

export default function Tarefa() {
    var tarefa = {
        nome: "Lição de casa",
        materia: "Matemática",
        prazo: "30/09/2025 - 13:30",
        done: false
    }

    return (
        <article className="tarefa">
            <div className="info">
                <h3>{tarefa.nome}</h3>
                <Link to="materia">{tarefa.materia}</Link>
                <p>{tarefa.prazo}</p>
            </div>
            <div className="items">
                <div className="toggle">
                    <img src={tarefa.done === true ? "/check.svg" : "#"} onError={(e) => e.target.style.display = "none"} />
                </div>
                <Link to="/materia">
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