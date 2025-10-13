import { useContext, useState, useEffect } from "react"
import { GradesContext } from "../../context/GradesContext"

export default function SelSerie() {
    const { grades } = useContext(GradesContext);
    const [gradeList, setGrades] = useState([]);
    const [open, setOpen] = useState(false);
    const [gradeSel, setGrade] = useState("");
    const [gradeId, setId] = useState("");

    useEffect(() => {
        const newTasks = grades.map(grade => (
            <section key={`serie${grade.id}`} id={`grade${grade.id}`}>
                <button onClick={() => select(grade.title, grade.id)}>{grade.title}</button>
                <span>{grade.id}</span>
            </section>
        ));
        setGrades(newTasks);
    }, [grades]);

    function toggle() {
        setOpen(!open);
    }

    function select(text, id) {
        setGrade(text);
        setId(id);
    }

    return(
        <section id="serie" className={`select ${open === true ? "open" : ""} ${grades.length === 0 ? "nothing" : ""}`} onClick={toggle}>
            <h2>Série:</h2>
            <div id="selectedGrade" className="selected">
                <h5>{gradeSel != "" ? gradeSel : grades.length === 0 ? "Não há séries disponíveis" : "Escolha uma série"}</h5>
                <span>{gradeId}</span>
                <img src="/arrow.svg" />
            </div>
            <article id="selectGrade" className="select-list">{gradeList}</article>
        </section>
    )
}