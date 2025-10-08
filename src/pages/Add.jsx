import { Link, useParams } from "react-router-dom"
import AddComponent from "../components/ui/AddComponent"
import Nome from "../components/ui/Nome"
import Serie from "../components/ui/SelSerie"
import Botoes from "../components/ui/Botoes"

export default function Add() {
    const { info } = useParams();
    
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
                <Nome />
                {info === "subject" && 
                <>
                    <Serie />
                </>
                }
                {info === "note" && 
                <>
                    <Serie />
                </>
                }
                {info === "task" && 
                <>
                    <Serie />
                </>
                }
                <Botoes />
            </main>
        </>
    )
}