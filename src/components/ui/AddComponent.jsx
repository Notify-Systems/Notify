import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../context/ThemeContext";

export default function AddComponent({ select }) {
    const { theme } = useContext(ThemeContext)
    const [open, setOpen] = useState(false);

    function toggle() {
        setOpen(!open);
    }

    return (
        <section id="addComponent" className={`select ${open === true ? "open" : ""}`} onClick={toggle}>
            <div id="selectedComponent" className="selected">
                <h5>{ select }</h5>
                <img src={`${import.meta.env.BASE_URL}/arrow${theme === "dark" ? "Dark" : ""}.svg`} />
            </div>
            <article id="selectComponent" className="select-list">
                <Link to="/add/grade"><div>Série</div></Link>
                <Link to="/add/subject"><div>Matéria</div></Link>
                <Link to="/add/note"><div>Anotação</div></Link>
                <Link to="/add/task"><div>Tarefa</div></Link>
            </article>
        </section>
    )
}