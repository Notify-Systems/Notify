import { createContext, useState } from "react";

export const SubjectContext = createContext();

export function SubjectProvider({ children }) {
    const [subjects, setSubject] = useState([
        {id: 1, title: "Matemática", grade: 1}
    ]);

    function addSubject(_title, _grade) {
        const newId = subjects.length > 0 ? subjects[subjects.length - 1].id + 1 : 1;
        const newSubject = {
            id: newId,
            title: _title,
            grade: _grade
        }
        setSubject([...subjects, newSubject]);
    }

    function removeSubject(_id) {
        setSubject(subjects.filter(subject => subject.id !== _id));
    }

    function editSubject(_id, _title, _grade) {
        setSubject(subjects.map(subjectI => 
        subjectI.id === _id
            ? { ...subjectI, title: _title, grade: _grade }
            : subjectI
        ));
    }

    function returnSubject(_id) {
        const subject = subjects.find(subject => subject.id === _id);
        return subject ? subject.title : null;
    }

    return (
        <SubjectContext.Provider value={{ subjects, addSubject, removeSubject, editSubject, returnSubject }}>
            { children }
        </SubjectContext.Provider>
    )
}