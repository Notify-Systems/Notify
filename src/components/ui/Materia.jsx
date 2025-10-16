import { useContext } from "react"
import { Link } from "react-router-dom"
import { GradesContext } from "../../context/GradesContext"

export default function Materia({ id, nome, serie }) {
    const { returnGrade } = useContext(GradesContext);
    const linkSerie = returnGrade(Number(id))?.id;

    return (
        <article className="materia">
            <div className="info">
                <h3>{nome}</h3>
                <Link to={`/serie/${linkSerie}`}>{serie}</Link>
            </div>
            <Link to={`/materia/${id}`}>
                <div className="link">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Link>
        </article>
    )
}