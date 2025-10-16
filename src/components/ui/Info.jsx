import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { GradesContext } from "../../context/GradesContext"
import { SubjectContext } from "../../context/SubjectContext"
import { NotesContext } from "../../context/NotesContext"
import { TasksContext } from "../../context/TasksContext"

export default function Info({ type, nome, id }) {
    const { removeGrade } = useContext(GradesContext);
    const { removeSubject } = useContext(SubjectContext);
    const { removeNote } = useContext(NotesContext);
    const { removeTask } = useContext(TasksContext);
    const navigate = useNavigate();

    function remove() {
        if(confirm("Você realmente deseja apagar?")) {
            switch(type) {
                case "grade":
                    removeGrade(Number(id));
                    break;
                case "subject":
                    removeSubject(Number(id));
                    break;
                case "note":
                    removeNote(Number(id));
                    break;
                case "task":
                    removeTask(Number(id));
                    break;
            }
            navigate("/");
        }
    }

    return (
        <section className="info-container">
            <h2>{nome}</h2>
            <div className="info-buttons">
                <Link to={`/edit/${type}/${id}`}>
                    <div className="info-btn">
                        <span>Editar</span>
                    </div>
                </Link>
                <button className="info-btn" onClick={remove}>Excluir</button>
            </div>
        </section>
    )
}