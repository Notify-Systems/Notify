import { createContext, useState } from "react";

export const GradesContext = createContext();

export function GradesProvider({ children }) {
    const [Grades, setGrades] = useState([]);

    function addGrades(_title) {
        const newId = Grades.length > 0 ? Grades[Grades.length - 1].id + 1 : 1;
        const newGrades = {
            id: newId,
            title: _title
        };
        setGrades([...Grades, newGrades]);
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
        <GradesContext.Provider value={{ Grades, addGrades, removeGrades, editGrades }}>
            { children }
        </GradesContext.Provider>
    )
}