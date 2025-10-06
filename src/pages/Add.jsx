import { Link, useParams } from "react-router-dom"
import AddComponent from "../components/ui/AddComponent"
import Nome from "../components/ui/Nome"
import Botoes from "../components/ui/Botoes"

export default function Add() {
    const { info } = useParams();
    
    return (
        <>
            <main>
                <h2>Adicionar:</h2>
                <AddComponent select={
                    info === "grade" ? "Série" :
                    info === "subject" ? "Matéria" :
                    info === "note" ? "Anotação" :
                    "Tarefa"
                } />
                <Nome />
                {info === "subject" && 
                    <AddComponent select="Matéria" />
                }
                {info === "note" && 
                    <AddComponent select="Anotação" />
                }
                {info === "task" && 
                    <AddComponent select="Tarefa" />
                }
                <Botoes />
            </main>
        </>
    )
}