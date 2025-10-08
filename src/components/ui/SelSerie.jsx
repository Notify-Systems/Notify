import { useContext, useState, useEffect } from "react"
import { GradesContext } from "../../context/GradesContext"

export default function Serie() {
    const { grades } = useContext(GradesContext);
    const [gradeList, setGrades] = useState([]);

    useEffect(() => {
        const newTasks = grades.map(grade => (
            <button>{grade.title}</button>
        ));
        setGrades(newTasks);
    }, [grades]);

    return(
        <>
            <div id="selectedGrade">
                <h5>{ grades.length === 0 ? "Não há séries disponíveis" : "Escolha uma série"}</h5>
                <img src="/arrow.svg" />
            </div>
            <article id="selectGrade">{gradeList}</article>
        </>
    )
}