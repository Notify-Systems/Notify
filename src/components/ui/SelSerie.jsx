import { useContext, useState, useEffect } from "react"
import { GradesContext } from "../../context/GradesContext"

export default function SelSerie() {
    const { grades } = useContext(GradesContext);
    const [gradeList, setGrades] = useState([]);

    useEffect(() => {
        const newTasks = grades.map(grade => (
            <button>{grade.title}</button>
        ));
        setGrades(newTasks);
    }, [grades]);

    return(
        <section id="serie" className={`select ${grades.length === 0 ? "nothing" : ""}`}>
            <h2>Série:</h2>
            <div id="selectedGrade" className="selected">
                <h5>{ grades.length === 0 ? "Não há séries disponíveis" : "Escolha uma série"}</h5>
                <img src="/arrow.svg" />
            </div>
            <article id="selectGrade" className="select-list">{gradeList}</article>
        </section>
    )
}