import { Link } from "react-router-dom"

export default function AddComponent({ select }) {
    return (
        <section id="addComponent" className="select">
            <div id="selectedComponent" className="selected">
                <h5>{ select }</h5>
                <img src="/arrow.svg" />
            </div>
            <article id="selectComponent" className="select-list">
                <div><Link to="/add/grade">Série</Link></div>
                <div><Link to="/add/subject">Matéria</Link></div>
                <div><Link to="/add/note">Anotação</Link></div>
                <div><Link to="/add/task">Tarefa</Link></div>
            </article>
        </section>
    )
}