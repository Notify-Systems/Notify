import { createContext, useState } from "react";

export const NotesContext = createContext();

export function NotesProvider({ children }) {
    const [notes, setNotes] = useState([]);

    function addNote(_title, _subject, _note) {
        const newId = notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;
        const newNote = {
            id: newId,
            title: _title,
            subject: _subject,
            note: _note
        };
        setNotes([...notes, newNote]);
    }

    function removeNote(_id) {
        setNotes(notes.filter((_, i) => i !== _id));
    }

    function editNote(_id, _title, _subject, _note) {
        setNotes(notes.map(noteI => 
            noteI.id === _id
            ? { ...noteI, title: _title, subject: _subject, note: _note }
            : noteI
        ));
    }

    return (
        <NotesContext.Provider value={{ notes, addNote, removeNote, editNote }}>
            { children }
        </NotesContext.Provider>
    )
}