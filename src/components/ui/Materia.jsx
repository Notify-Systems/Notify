import { Link } from "react-router-dom"

export default function Materia({ nome, serie }) {

    return (
        <article className="materia">
            <div className="info">
                <h3>{nome}</h3>
                <Link to="serie">{serie}</Link>
            </div>
            <Link to="/materia">
                <div className="link">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Link>
        </article>
    )
}