import { Link } from "react-router-dom"

export default function Materia() {
    var materia = {
        nome: "Matemática",
        serie: "1o Ano Ensino Médio"
    }

    return (
        <article className="materia">
            <div className="info">
                <h3>{materia.nome}</h3>
                <p>{materia.serie}</p>
            </div>
            <Link to="/materia">
                <div className="link">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Link>
        </article>
    )
}