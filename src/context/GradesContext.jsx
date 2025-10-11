import { createContext, useState } from "react";

export const GradesContext = createContext();

export function GradesProvider({ children }) {
    const [grades, setGrades] = useState([
        {id: 1, title: "1o Ano Ensino Médio"}
    ]);

    function addGrades(_title) {
        const newId = grades.length > 0 ? grades[grades.length - 1].id + 1 : 1;
        const newGrades = {
            id: newId,
            title: _title
        };
        setGrades([...grades, newGrades]);
    }

    function removeGrades(_id) {
        setNotes(subjects.filter((_, i) => i !== _id));
    }

    function editGrades(_id, _title) {
        setNotes(subjects.map(GradesI => 
        GradesI.id === _id
            ? { ...GradesI, title: _title}
            : GradesI
        ));
    }

    return (
        <GradesContext.Provider value={{ grades, addGrades, removeGrades, editGrades }}>
            { children }
        </GradesContext.Provider>
    )
}