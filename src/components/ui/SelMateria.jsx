import { useContext, useState, useEffect } from "react"
import { SubjectContext } from "../../context/SubjectContext"

export default function SelMateria({ subjectRef }) {
    const { subjects } = useContext(SubjectContext);
    const [subjectList, setSubjects] = useState([]);
    const [open, setOpen] = useState(false);
    const [subjectSel, setSubject] = useState("");
    const [subjectId, setId] = useState("");

    useEffect(() => {
        const newSubjects = subjects.map(subject => (
            <section key={subject.id} id={`subject${subject.id}`}>
                <button onClick={() => select(subject.title, subject.id)}>{subject.title}</button>
                <span>{subject.id}</span>
            </section>
        ));
        setSubjects(newSubjects);
    }, [subjects]);

    function toggle() {
        setOpen(!open);
    }

    function select(text, id) {
        setSubject(text);
        setId(id);
    }

    return(
        <section id="materia" className={`select ${open === true ? "open" : ""} ${subjects.length === 0 ? "nothing" : ""}`} onClick={toggle}>
            <h2>Matéria:</h2>
            <div id="selectedSubject" className="selected">
                <h5>{subjectSel != "" ? subjectSel : subjects.length === 0 ? "Não há matérias disponíveis" : "Escolha uma matéria"}</h5>
                <span ref={subjectRef}>{subjectId}</span>
                <img src={`${import.meta.env.BASE_URL}/arrow.svg`} />
            </div>
            <article id="selectGrade" className="select-list">{subjectList}</article>
        </section>
    )
}