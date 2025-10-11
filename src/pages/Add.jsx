import { useParams } from "react-router-dom"
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
                    <SelSerie />
                </>
                }
                {info === "note" && 
                <>
                    <SelMateria />
                    <WriteNote />
                </>
                }
                {info === "task" && 
                <>
                    <SelMateria />
                    <Prazo />
                </>
                }
                <Botoes type={info} func="add" />
            </main>
            <Aside />
        </>
    )
}