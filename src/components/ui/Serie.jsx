import { useContext } from "react"
import { Link } from "react-router-dom"
import { SubjectContext } from "../../context/SubjectContext"
import { ThemeContext } from "../../context/ThemeContext"
import Materia from "./Materia"
import normalizeText from "../../normalizeText"

export default function Serie({ nome, id, search }) {
    const { subjects } = useContext(SubjectContext);
    const { theme } = useContext(ThemeContext);

    return (
        <section className="estudos-container">
            <div className="container-title">
                <h2>{ nome }</h2>
                <div>
                    <Link to="/add/subject"><img src={`${import.meta.env.BASE_URL}/btnAdd${theme === "dark" ? "Dark" : ""}.svg`} alt="Adicionar Matéria"/></Link>
                    <Link to={`/serie/${id}`}>
                        <div className="link">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Link>
                </div>
            </div>
            {Array.isArray(subjects) && subjects.map(subject => (
                    id === subject.grade ? <Materia
                    key={`materia${subject.id}`}
                    id={subject.id}
                    nome={subject.title}
                    display={normalizeText(subject.title).includes(normalizeText(search))}
                /> : ""
            ))}
        </section>
    )
}