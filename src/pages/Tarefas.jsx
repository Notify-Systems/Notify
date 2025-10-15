import { useContext } from "react";
import { useParams } from "react-router-dom"
import { TasksContext } from "../context/TasksContext";
import Aside from "../components/layout/Aside"
import Info from "../components/ui/Info"

export default function Tarefas() {
    const { id } = useParams();
    const { returnTask } = useContext(TasksContext);
    const taskId = Number(id);
    const date = returnTask(taskId).date;
    const time = returnTask(taskId).time;
    const done = returnTask(taskId).done;

    function timeLeft() {
        const now = new Date();
        const task = new Date(`${date}T${time}`);
        const diff = (task - now) / (1000 * 60 * 60 * 24);
        const diffTime = (task - now) / (1000 * 60 * 60);

        if(diff == 0) {
            if(diffTime > 0) {
                return ({
                    atrasado: false,
                    msg: `Faltam ${Math.floor(diffTime)} horas para a data limite`
                });
            }
            else {
                return ({
                    atrasado: true,
                    msg: `A sua tarefa está ${Math.floor(Math.abs(diffTime))} horas atrasada`
                });
            }
        }
        else {
            if(diff > 0) {
                return ({
                    atrasado: false,
                    msg: `Faltam ${Math.floor(diff)} dias e ${Math.floor(diffTime % 24)} horas para a data limite`
                });
            }
            else {
                return ({
                    atrasado: true,
                    msg: `A sua tarefa está ${Math.floor(Math.abs(diff))} dias e ${Math.floor(Math.abs(diffTime) % 24)} horas atrasada`
                });
            }
        }
    }

    return (
        <>
            <main>
                <Info type="task" nome={"Lição de Casa"} id={id} />
                <section className={`status-tarefa ${timeLeft().atrasado === true ? "atraso" : ""}`}>
                    <h2>Status:</h2>
                    <h3>{done === true ? "Concluída" : "Pendente"}</h3>
                    <h2>Data Limite:</h2>
                    <h3>{`${date.split("-").join("/")} - ${time}`}</h3>
                    <p>{timeLeft().msg}</p>
                </section>
            </main>
            <Aside />
        </>
    )
}