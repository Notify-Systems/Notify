import { Link } from "react-router-dom"
import Materia from "./Materia"

export default function Serie() {
    const serie = {
        nome: "1o Ano Ensino Médio"
    }

    return (
        <div className="estudos-container">
            <div className="container-title">
                <h2>{ serie.nome }</h2>
                <div>
                    <Link to="add/subject"><img src="/btnAdd.svg" alt="Adicionar Matéria"/></Link>
                    <Link to="#">
                        <div className="link">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Link>
                </div>
            </div>
            <Materia />
        </div>
    )
}