import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GradesContext } from "../../context/GradesContext";
import { SubjectContext } from "../../context/SubjectContext";
import { NotesContext } from "../../context/NotesContext";
import { TasksContext } from "../../context/TasksContext"

export default function Botoes({ type, func, id, nomeRef, gradeRef, subjectRef, noteRef, dateRef, timeRef }) {
    const { addGrade, editGrade } = useContext(GradesContext);
    const { addSubject, editSubject } = useContext(SubjectContext);
    const { addNote, editNote } = useContext(NotesContext);
    const { addTask, editTask } = useContext(TasksContext);
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
            case "edit":
                switch(type) {
                    case "grade":
                        editGrade(Number(id), nome);
                        break;
                    case "subject":
                        const grade = Number(gradeRef.current?.innerText);
                        editSubject (Number(id), nome, grade);
                        break;
                    case "note":
                        const materiaNota = Number(subjectRef.current?.innerText);
                        const note = noteRef.current?.value;
                        editNote(Number(id), nome, materiaNota, note);
                        break;
                    case "task":
                        const materiaTarefa = Number(subjectRef.current?.innerText);
                        const date = dateRef.current?.value;
                        const time = timeRef.current?.value;
                        if(!date || !time) {
                            alert("Preencha os campos de data e hora");
                            return;
                        }
                        editTask(Number(id), nome, materiaTarefa, date, time);
                        break;
                }
        }
        navigate("/");
    }

    function cancel() {
        if(confirm("Você realmente deseja cancelar a operação?"))
            navigate("/")
    }

    return (
        <>
            <section className="edit-buttons">
                <button id="btnConfirmar" onClick={add}>Confirmar</button>
                <button id="btnCancelar" onClick={cancel}>Cancelar</button>
            </section>
        </>
    ) 
}