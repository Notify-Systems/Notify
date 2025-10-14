import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GradesContext } from "../../context/GradesContext";
import { SubjectContext } from "../../context/SubjectContext";
import { NotesContext } from "../../context/NotesContext";
import { TasksContext } from "../../context/TasksContext"

export default function Botoes({ type, func, nomeRef, gradeRef, subjectRef, noteRef, dateRef, timeRef }) {
    const { grades, addGrade } = useContext(GradesContext);
    const { subjects, addSubject } = useContext(SubjectContext);
    const { notes, addNote } = useContext(NotesContext);
    const { tasks, addTask } = useContext(TasksContext);
    const navigate = useNavigate();

    function add() {
        const nome = nomeRef.current?.value;
        if(!nome) {
            alert("Preencha o campo de nome");
            return;
        }
        switch(func) {
            case "add":
                switch(type) {
                    case "grade":
                        addGrade(nome);
                        break;
                    case "subject":
                        const grade = Number(gradeRef.current?.innerText);
                        addSubject(nome, grade);
                        break;
                    case "note":
                        const materiaNota = Number(subjectRef.current?.innerText);
                        const note = noteRef.current?.value;
                        addNote(nome, materiaNota, note);
                        break;
                    case "task":
                        const materiaTarefa = Number(subjectRef.current?.innerText);
                        const date = dateRef.current?.value;
                        const time = timeRef.current?.value;
                        if(!date || !time) {
                            alert("Preencha os campos de data e hora");
                            return;
                        }
                        addTask(nome, materiaTarefa, date, time);
                        break;
                }
                break;
        }
        navigate("/");
    }

    return (
        <>
            <section className="edit-buttons">
                <button id="btnConfirmar" onClick={add}>Confirmar</button>
                <button id="btnCancelar">Cancelar</button>
            </section>
        </>
    ) 
}