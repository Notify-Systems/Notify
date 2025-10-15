import { useContext } from "react";
import { useParams } from "react-router-dom"
import { NotesContext } from "../context/NotesContext"
import Aside from "../components/layout/Aside"
import Info from "../components/ui/Info"

export default function Anotacoes() {
    const { id } = useParams();
    const { returnNote } = useContext(NotesContext);
    const noteId = Number(id);

    return (
        <>
            <main>
                <Info type="note" nome={returnNote(noteId).title} id={id} />
                <textarea className="show-note" readOnly value={returnNote(noteId).note}></textarea>
            </main>
            <Aside />
        </>
    )
}