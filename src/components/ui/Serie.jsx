import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { SubjectContext } from "../../context/SubjectContext";
import Materia from "./Materia"

export default function Serie({ nome }) {
    const { subjects } = useContext(SubjectContext);
    const [subjectList, setSubjects] = useState([]);

    useEffect(() => {
        const newSubjects = subjects.map(subject => (
            <Materia key={`materia${subject.id}`} nome={subject.title}/>
        ));
        setSubjects(newSubjects);
    }, [subjects])

    return (
        <div className="estudos-container">
            <div className="container-title">
                <h2>{ nome }</h2>
                <div>
                    <Link to="add/subject"><img src="/btnAdd.svg" alt="Adicionar Matéria"/></Link>
                    <Link to="#">
                        <div className="link">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Link>
                </div>
            </div>
            {subjectList}
        </div>
    )
}