import { Link } from "react-router-dom"
import Nome from "../components/ui/Nome"
import Botoes from "../components/ui/Botoes"

export default function Edit() {
    return (
        <>
            <h2>Editar:</h2>
            <Link to={Nome}></Link>
            <Link to={Botoes}></Link>
        </>
    )
}