import { useContext, useState, useEffect } from "react"
import { SubjectContext } from "../../context/SubjectContext"

export default function SelMateria() {
    const { subjects } = useContext(SubjectContext);
    const [subjectList, setSubjects] = useState([]);

    useEffect(() => {
        const newSubjects = subjects.map(subject => (
            <section key={subject.id} id={`subject${subject.id}`}>
                <button>{subject.title}</button>
                <span>{subject.id}</span>
            </section>
        ));
        setSubjects(newSubjects);
    }, [subjects]);

    return(
        <section id="materia" className={`select ${subjects.length === 0 ? "nothing" : ""}`}>
            <h2>Matéria:</h2>
            <div id="selectedSubject" className="selected">
                <h5>{ subjects.length === 0 ? "Não há matérias disponíveis" : "Escolha uma matéria"}</h5>
                <span></span>
                <img src="/arrow.svg" />
            </div>
            <article id="selectGrade" className="select-list">{subjectList}</article>
        </section>
    )
}