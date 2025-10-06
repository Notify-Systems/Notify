import { createContext, useContext, useState } from "react";

export const GradesContext = createContext();

export function GradesProvider({ children }) {
    const [Grades, setGrades] = useState([]);

    function addGrades(_title) {
        const GradesList = useContext(GradesContext);
        const newGrades = {
            id: GradesList.length++,
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