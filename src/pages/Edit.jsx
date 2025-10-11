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
    const { info } = useParams();

    return (
        <>
            <main className="add">
                <h2>Editar:</h2>
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
                <Botoes type={info} func="edit" />
            </main>
            <Aside />
        </>
    )
}