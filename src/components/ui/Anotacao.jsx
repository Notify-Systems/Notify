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
                <p>{anotacao.materia}</p>
            </div>
            <Link to="/editar">
                <div className="link">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Link>
        </article>
    )
}