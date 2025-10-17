import { useContext } from "react"
import { Link } from "react-router-dom"
import { SubjectContext } from "../../context/SubjectContext"

export default function Anotacao({ id, nome, materia, display }) {
    const { returnSubject } = useContext(SubjectContext);
    const linkMateria = returnSubject(Number(id))?.id;

    return(
        <article className={`anotacao ${display ? "" : "disabled"}`}>
            <div className="info">
                <h3>{nome}</h3>
                <Link to={`/materia/${linkMateria}`}>{materia}</Link>
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