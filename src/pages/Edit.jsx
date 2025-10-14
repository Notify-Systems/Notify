import { useRef } from "react"
import { useParams } from "react-router-dom"
import Aside from "../components/layout/Aside"
import Nome from "../components/ui/Nome"
import Botoes from "../components/ui/Botoes"
import SelSerie from "../components/ui/SelSerie"
import SelMateria from "../components/ui/SelMateria"
import WriteNote from "../components/ui/WriteNote"
import Prazo from "../components/ui/Prazo"
import "../add.css"

export default function Edit() {
    const { info, id } = useParams();
    const nomeRef = useRef();
    const gradeRef = useRef();
    const subjectRef = useRef();
    const noteRef = useRef();
    const dateRef = useRef();
    const timeRef = useRef();

    return (
        <>
            <main className="add">
                <h2>Editar:</h2>
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
                    func="edit"
                    id={id}
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