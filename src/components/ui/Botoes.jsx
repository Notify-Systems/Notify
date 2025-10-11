import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GradesContext } from "../../context/GradesContext";
import { SubjectContext } from "../../context/SubjectContext";
import { NotesContext } from "../../context/NotesContext";
import { TasksContext } from "../../context/TasksContext"

export default function Botoes({ type, func }) {
    const { grades, addGrade } = useContext(GradesContext);
    const { subjects, addSubject } = useContext(SubjectContext);
    const { notes, addNote } = useContext(NotesContext);
    const { tasks, addTask } = useContext(TasksContext);
    const navigate = useNavigate();

    function add() {
        const nome = document.getElementById("inputNome").value;
        const grade = document.getElementById("selectedGrade").querySelector("span").innerText;
        const materia = document.getElementById("selectedSubject").querySelector("span").innerText;
        const note = document.getElementById("note").value;
        const date = document.getElementById("dateInput").value;
        const time = document.getElementById("timeInput").value
        if(nome == "") {
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
                        addSubject(nome, grade);
                        break;
                    case "note":
                        addNote(nome, materia, note);
                        break;
                    case "task":
                        addTask(nome, materia, date, time);
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