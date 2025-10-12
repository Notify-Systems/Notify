import { Link } from "react-router-dom"

export default function Tarefa({ nome, materia, prazo, done }) {
    return (
        <article className="tarefa">
            <div className="info">
                <h3>{nome}</h3>
                <Link to="materia">{materia}</Link>
                <p>{prazo}</p>
            </div>
            <div className="items">
                <div className="toggle">
                    <img src={done === true ? "/check.svg" : "#"} onError={(e) => e.target.style.display = "none"} />
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