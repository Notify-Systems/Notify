import { useParams } from "react-router-dom"
import { useRef } from "react"
import Aside from "../components/layout/Aside"
import AddComponent from "../components/ui/AddComponent"
import Nome from "../components/ui/Nome"
import SelSerie from "../components/ui/SelSerie"
import SelMateria from "../components/ui/SelMateria"
import WriteNote from "../components/ui/WriteNote"
import Prazo from "../components/ui/Prazo"
import Botoes from "../components/ui/Botoes"
import "../add.css"

export default function Add() {
    const { info } = useParams();
    const nomeRef = useRef();
    const gradeRef = useRef();
    const subjectRef = useRef();
    const noteRef = useRef();
    const dateRef = useRef();
    const timeRef = useRef();
    
    return (
        <>
            <main className="add">
                <h2>Adicionar:</h2>
                <AddComponent select={
                    info === "grade" ? "Série" :
                    info === "subject" ? "Matéria" :
                    info === "note" ? "Anotação" :
                    "Tarefa"
                } />
                <Nome nomeRef={nomeRef} />
                {info === "subject" && 
                <>
                    <SelSerie gradeRef={gradeRef} />
                </>
                }
                {info === "note" && 
                <>
                    <SelMateria subjectRef={subjectRef} />
                    <WriteNote noteRef={noteRef} />
                </>
                }
                {info === "task" && 
                <>
                    <SelMateria subjectRef={subjectRef} />
                    <Prazo dateRef={dateRef} timeRef={timeRef} />
                </>
                }
                <Botoes
                    type={info}
                    func="add"
                    nomeRef={nomeRef}
                    gradeRef={gradeRef}
                    subjectRef={subjectRef}
                    noteRef={noteRef}
                    dateRef={dateRef}
                    timeRef={timeRef}
                />
            </main>
            <Aside />
        </>
    )
}