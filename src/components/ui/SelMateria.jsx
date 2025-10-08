import { useContext, useState, useEffect } from "react"
import { SubjectContext } from "../../context/SubjectContext"

export default function SelMateria() {
    const { subjects } = useContext(SubjectContext);
    const [subjectList, setGrades] = useState([]);

    useEffect(() => {
        const newSubjects = subjects.map(subject => (
            <button>{subject.title}</button>
        ));
        setGrades(newSubjects);
    }, [subjects]);

    return(
        <>
            <h2>Matéria:</h2>
            <div id="selectedGrade">
                <h5>{ subjects.length === 0 ? "Não há matérias disponíveis" : "Escolha uma matéria"}</h5>
                <img src="/arrow.svg" />
            </div>
            <article id="selectGrade">{subjectList}</article>
        </>
    )
}