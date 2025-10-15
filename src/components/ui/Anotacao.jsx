import { Link } from "react-router-dom"

export default function Anotacao({ id, nome, materia }) {
    return(
        <article className="anotacao">
            <div className="info">
                <h3>{nome}</h3>
                <Link to="/materia">{materia}</Link>
            </div>
            <Link to={`/anotacao/${id}`}>
                <div className="link">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Link>
        </article>
    )
}