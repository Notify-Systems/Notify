import { Link } from "react-router-dom"

export default function Anotacao() {
    var anotacao = {
        nome: "Funções do 2o Grau",
        materia: "Matemática"
    }
    
    return(
        <article className="anotacao">
            <div className="info">
                <h3>{anotacao.nome}</h3>
                <Link to="/materia">{anotacao.materia}</Link>
            </div>
            <Link to="/editar">
                <div className="link-anotacao">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Link>
        </article>
    )
}