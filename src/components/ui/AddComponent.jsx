import { useState } from "react";
import { Link } from "react-router-dom"

export default function AddComponent({ select }) {
    const [open, setOpen] = useState(false);

    function toggle() {
        setOpen(!open);
    }

    return (
        <section id="addComponent" className={`select ${open === true ? "open" : ""}`} onClick={toggle}>
            <div id="selectedComponent" className="selected">
                <h5>{ select }</h5>
                <img src="/arrow.svg" />
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