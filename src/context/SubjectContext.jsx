import { createContext, useState } from "react";

export const SubjectContext = createContext();

export function SubjectProvider({ children }) {
    const [subjects, setSubject] = useState([]);

    function addSubject(_title, _grade) {
        const newId = subjects.length > 0 ? subjects[subjects.length - 1].id + 1 : 1;
        const newSubject = {
            id: newId,
            title: _title,
            grade: _grade
        };
        setSubject([...subjects, newSubject]);
    }

    function removeSubject(_id) {
        setNotes(subjects.filter((_, i) => i !== _id));
    }

    function editSubject(_id, _title, _grade) {
        setNotes(subjects.map(subjectI => 
        subjectI.id === _id
            ? { ...subjectI, title: _title, grade: _grade }
            : subjectI
        ));
    }

    return (
        <SubjectContext.Provider value={{ subjects, addSubject, removeSubject, editSubject }}>
            { children }
        </SubjectContext.Provider>
    )
}